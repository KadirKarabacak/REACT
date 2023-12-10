import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // let step = 1;
  //! How to use useState in 3 steps
  const [step, setStep] = useState(1); // it returns an array with two arg, first is default value (1), and second one is a function to update state.
  //* useState called as react hook
  //! React hooks only available to call in App [Global function].

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < messages.length) setStep(step + 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 && "active"}>1</div> {/* Works same */}
        <div className={`${step >= 2 && "active"}`}>2</div>
        <div className={`${step >= 3 && "active"}`}>3</div>
      </div>
      <p className="message">
        Step {step}: {}
        {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
