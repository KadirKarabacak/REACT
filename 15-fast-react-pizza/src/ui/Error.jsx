import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

// This element has accest to the Error cuz of errorElement
function Error() {
  // Takes error with useRouteError()
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
