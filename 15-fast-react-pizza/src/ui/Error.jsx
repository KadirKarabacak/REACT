import { useNavigate, useRouteError } from "react-router-dom";

// This element has accest to the Error cuz of errorElement
function Error() {
  const navigate = useNavigate();
  // Takes error with useRouteError()
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
