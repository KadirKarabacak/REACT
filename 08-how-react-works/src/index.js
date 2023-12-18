import React from "react";

//! To try batching change import aswell
import ReactDOM from "react-dom/client";
// import ReactDOM from 'react-dom';

import App from "./App";
import "./index.css";

// REACT 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//! Also u can see batching is not working at React@17
// REACT 17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
