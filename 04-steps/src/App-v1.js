import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  // let step = 1;
  // const [test, setTest] = useState({ name: "Kadir" });

  const [step, setStep] = useState(1); // Onclick change the steps
  const [isOpen, setIsOpen] = useState(true); // By default set it open

  //* useState called as react hook
  //! React hooks only available to call in App [Global function].

  function handlePrevious() {
    // Always use callback into setter
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < messages.length) {
      // What if we want to move forward two times ?
      setStep((s) => s + 1);
      //! Two time call is not the solution, instead we have to pass function into setter
      // setStep((s) => s + 1);
    }

    // In this situation we trying to mutate step variable. But React doesn't mutate step,only updating.
    //: step = step + 1 // React has no way to know it was a state or not. Need to use setter function we defined.

    //! It works but never mutate an OBJECT manually!
    // test.name = "Fred";
    //* True way to update state when we want to pass an OBJECT!
    // setTest({ name: "Fred" });
  }

  function handleClose() {
    setIsOpen((isOp) => !isOp);
  }

  return (
    <div>
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
          {/* Using children prop */}
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
              <span>👈</span> Previous
            </Button>
            <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// To make text a reusable component
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

// To make a reusable component
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
