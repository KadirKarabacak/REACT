import { useState } from "react";

function SlowComponent() {
  // If this is too slow on your maching, reduce the `length`
  const words = Array.from({ length: 100_000 }, () => "WORD");
  return (
    <ul>
      {words.map((word, i) => (
        <li key={i}>
          {i}: {word}
        </li>
      ))}
    </ul>
  );
}

// With children prop we extract counter feature a new component, and inside we use SlowComponent.
// Then when counter gets update, Slow component no longer updated
function Counter({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
      {children}
    </div>
  );
}

export default function Test() {
  // const [count, setCount] = useState(0);
  // return (
  //   <div>
  //     <h1>Slow counter?!?</h1>
  //     <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>
  //     <SlowComponent />
  //   </div>
  // );
  return (
    <Counter>
      <SlowComponent />
    </Counter>
  );
}
