import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React</h1>;
}

// This is how react renders after v18
const rootDiv = document.querySelector("#root");
const root = ReactDOM.createRoot(rootDiv);
// Activate strict mode into render
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
