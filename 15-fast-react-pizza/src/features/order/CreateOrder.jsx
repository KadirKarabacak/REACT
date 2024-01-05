/* eslint-disable react-refresh/only-export-components */
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // Disable button when it is already submitting
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // To access action data need useActionData() which react-router feature
  const formErrors = useActionData();

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Lets go!</h2>

      {/* We include this "Form" from react-router to create new Order */}
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input className="input" type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input className="input" type="tel" name="phone" required />
          </div>
          {/* Render the error comes from action if there is */}
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required className="input" />
          </div>
        </div>

        <div>
          <input
            className="h-6 w-6 accent-yellow-400 "
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          {/* A hidden input to take fakeCart data, doesnt matter where it is */}
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Order now"}
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
    priority: data.priority === "on",
  };

  //! Handle error messages
  const errors = {};

  // No valid phone number
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you.";

  // Errors object has any error, then return it
  if (Object.keys(errors).length > 0) return errors;

  // createOrder returns new data, so we can redirect URL to that order
  // but we can not use navigate, because it works only in components, not functions
  const newOrder = await createOrder(order);

  // Redirect comes from react-router, returns a Response
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
