import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

function BackButton() {
  // And also if we want we can use this useNavigate as a history. Numeric value like -1 goes one step back.
  const navigate = useNavigate();
  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
      type="back"
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
