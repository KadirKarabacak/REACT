import { useReducer } from "react";

//* USE REDUCER IS SIMPLY TAKES OLD AND NEW STATE, CALCULATING AND DISPLAYING NEW STATE

const initialState = { count: 0, step: 1 }; // setting initials for both count and step.

//! Reducer function takes two args. first is old state, second is changed state
function reducer(state, action) {
  console.log(state, action);

  //! Usually we use switch case into reducer function to handle all possibilities.
  switch (action.type) {
    case "dec":
      // Always returning an object and overwriting, because our initial value is an object.
      return { ...state, count: state.count - state.step };
    case "inc":
      return { ...state, count: state.count + state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      // return { count: 0, step: 1 };
      return initialState;

    default:
      throw new Error("Unknown action");
  }

  //! And after we pass in dispatch an object need to change this return.
  // return state + action;

  // if (action.type === "inc") return state + 1; // is inc +1 payload is optional
  // if (action.type === "dec") return state - 1; // is dec -1 payload is optional
  // if (action.type === "setCount") return action.payload; // Written by input, set it complately
}

// Date counter component
function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  //! Different way to update state instead of useState. Dispatch is setter function equals "action"
  //! when we create reducer(). Second arg is "initial" value.
  const [state, dispatch] = useReducer(reducer, initialState);
  const { count, step } = state; // Destructuring to use

  // This mutates the date object.
  const date = new Date();
  date.setDate(date.getDate() + count);

  const dec = function () {
    //! Dispatch's argument setting action into reducer function. Standart set object like this.
    dispatch({ type: "dec", payload: -1 });
  };

  const inc = function () {
    //! Instead of setCount, we use "dispatch()"
    dispatch({ type: "inc", payload: 1 });
  };

  const defineCount = function (e) {
    //! And to set input value again instead of setCount
    dispatch({ type: "setCount", payload: Number(e.target.value) });
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({ type: "reset" });
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
