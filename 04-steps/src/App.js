import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // let step = 1;
  // const [test, setTest] = useState({ name: "Kadir" });

  const [step, setStep] = useState(1); // Onclick change the steps
  const [isOpen, setIsOpen] = useState(true); // By default set it open

  //* useState called as react hook
  //! React hooks only available to call in App [Global function].

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < messages.length) setStep(step + 1);
    // In this situation we trying to mutate step variable. But React doesn't mutate step,only updating.
    //: step = step + 1 // React has no way to know it was a state or not. Need to use setter function we defined.

    //! It works but never mutate an OBJECT manually!
    // test.name = "Fred";
    //* True way to update state when we want to pass an OBJECT!
    // setTest({ name: "Fred" });
  }

  function handleClose() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button onClick={handleClose} className="close">
        &times;
      </button>
      {/* To enter Javascript mode we need to be in some div or fragment */}
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 && "active"}>1</div> {/* Works same */}
            <div className={step >= 2 && "active"}>2</div>
            <div className={step >= 3 && "active"}>3</div>
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
      )}
    </>
  );
}
