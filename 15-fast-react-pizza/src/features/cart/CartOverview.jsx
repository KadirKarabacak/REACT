import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Importing from cartSlice
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';
import { getUserName } from '../user/userSlice';

function CartOverview() {
  // Instead of defining here, we define it into "slice"
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const username = useSelector(getUserName);

  if (!username) return null;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        {!totalCartQuantity ? (
          'No pizzas in cart'
        ) : (
          <>
            <span>{totalCartQuantity} Pizzas in cart</span>
            <span>{formatCurrency(totalCartPrice)}</span>
          </>
        )}
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
