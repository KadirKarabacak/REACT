// A new way of setting Routers
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// Components
import Order, { loader as orderLoader } from './features/order/Order';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import Error from './ui/Error';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import { action as updateOrderAction } from './features/order/UpdateOrder';

// Using it and selecting paths, each object is one Route
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      // Providing loader to Menu Router
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        // Updating priority on order page
        action: updateOrderAction,
      },
    ],
  },
  // We don't need to spesify "*" for other routes as old one. It knows.
]);

function App() {
  // And then passing that object to RouterProvider
  return <RouterProvider router={router} />;
}

export default App;
