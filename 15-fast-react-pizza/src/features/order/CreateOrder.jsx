/* eslint-disable react-refresh/only-export-components */
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
import { createOrder } from '../../services/apiRestaurant';
import { formatCurrency } from '../../utils/helpers';
import { fetchAddress } from '../user/userSlice';
import EmptyCart from '../cart/EmptyCart';
import Button from '../../ui/Button';
import store from '../../store';

function CreateOrder() {
  // Priority checkbox adds + 20% to totalCartPrice
  const [withPriority, setWithPriority] = useState(false);

  // Taking username from store again
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === 'loading';

  // Disable button when it is already submitting
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  // To access action data need useActionData() which react-router feature
  const formErrors = useActionData();

  // Get Cart info to handle empty cart
  const cart = useSelector(getCart);

  // Show total price into order button
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Lets go!</h2>

      {/* We include this "Form" from react-router to create new Order */}
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input sm:grow"
            type="text"
            name="customer"
            required
            defaultValue={username}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
            {/* Render the error comes from action if there is */}
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              disabled={isLoadingAddress}
              defaultValue={address}
              className="input w-full"
            />
            {addressStatus === 'error' && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {errorAddress}
              </p>
            )}
          </div>

          {!position.latitude && !position.longitude && (
            <span className="absolute right-1 top-[35px] z-50 sm:right-1 sm:top-[3px] md:right-2 md:top-[4.5px]">
              <Button
                disabled={isLoadingAddress}
                type="small"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                Get position
              </Button>
            </span>
          )}
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 "
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          {/* A hidden input to take cart data, doesnt matter where it is */}
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          {/*  Another hidden input to take position */}
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ''
            }
          />
          <Button type="primary" disabled={isSubmitting || isLoadingAddress}>
            {isSubmitting
              ? 'Placing order...'
              : `Order now ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

// When the "Form" submitted, react-router calls this action and pass request.
export async function action({ request }) {
  // This is a convention, always follow this recipe
  const formData = await request.formData();

  // Convert to object to see our data.
  const data = Object.fromEntries(formData);

  // Configuring data
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  //! Handle error messages
  const errors = {};

  // No valid phone number
  if (!isValidPhone(order.phone)) errors.phone = 'Wrong phone number.';

  // Errors object has any error, then return it
  if (Object.keys(errors).length > 0) return errors;

  // createOrder returns new data, so we can redirect URL to that order
  // but we can not use navigate, because it works only in components, not functions
  const newOrder = await createOrder(order);

  //! After order complated, we need to clean cart, but no way to dispatch directyl so we use that trick, calling whole store.
  store.dispatch(clearCart());

  // Redirect comes from react-router, returns a Response
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
