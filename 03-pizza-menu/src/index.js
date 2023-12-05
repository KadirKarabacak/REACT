import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Copied pizza data from data.js
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//! There is two rule writing function as component !
// 1- Function names starts with Uppercase.
// 2- Each function returns any markup.
function App() {
  return (
    <div className="container">
      <Header />
      {/* React is allow us to call another component more and more */}
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // To style any element we need to define an object like bottom or directly inline ->
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  // Setting empty cuz of external css is not works
  return (
    <header className="header">
      <h1 style={style} className="header">
        Fast React Pizza Co.
      </h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert(" We are open!");
  // else alert("We are closed!");

  // First is element, second is props, third one is child element.
  // return React.createElement("footer", null, "We'r currently open!");
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We'r currently open!
    </footer>
  );
}

function Pizza() {
  return (
    <div className="">
      <img src="pizzas/spinaci.jpg" alt="Spinaci Pizza" />
      <h3>Pizza Spinaci</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
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
