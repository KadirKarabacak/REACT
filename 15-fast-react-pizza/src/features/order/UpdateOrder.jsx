import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  // Here instead of using fetcher.load, we use "fetcher.Form", this is not navigate like React-Router "Form" in CreateOrder.jsx
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>;
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };

  // This updateOrder needs an id and the data which should change
  await updateOrder(params.orderId, data);

  console.log('update');
  return null;
}
