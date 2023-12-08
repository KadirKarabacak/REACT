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

console.log(pizzaData);

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

//! We pass props from parent element to child element
function Pizza(props) {
  // For some less code
  const prop = props.pizzaObj;
  return (
    <li className="pizza">
      <img src={prop.photoName} alt={prop.name} />
      <div>
        <h3>{prop.name}</h3>
        <p>{prop.ingredients}</p>
        <span className="pizza-price">{`${prop.price}$`}</span>
      </div>
    </li>
  );
}

// For all pizzas our menu
function Menu() {
  // To add conditional rendering.
  const pizzas = pizzaData;
  // If we pass an empty array pizzas are not rendered but ul el. is still there
  // const pizzas = [];
  // To remove ul element too we need to check length
  const numPizzas = pizzas.length;
  // And now it renders 0 on document, we have to use > 0 into short circuiting

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* Instead of doin all pizzas manually one by one, we use render lists by pizzas array */}
      {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            // Passing entire object and then fixing on Pizza component
            <Pizza pizzaObj={pizza} key={pizza.name} />
            // Also we need a unique key prop on pizza for performance or something like that xD
          ))}
        </ul>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      /> */}

      {/* <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
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

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  // Conditional rendering
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) alert(" We are open!");
  // else alert("We are closed!");

  //! First is element, second is props, third one is child element.
  // return React.createElement("footer", null, "We'r currently open!");
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
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
