import { useState } from "react";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];

export default function App() {
  // A state for all events Add,Remove and Toggle
  const [items, setItems] = useState([]);

  //! HANDLERS
  function handleAddItems(item) {
    // Add items without mutate original array.
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    // Create an array without deleted items
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // Loop over items array, check items id and compare clicked items id. Change packed prop conditionally.
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Pass props for child components
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItem}
        items={items}
      />
      <Stats items={items} />
    </div>
  );
}

function Form({ onAddItems }) {
  //! Control form elements Input and Select and Create new object with values
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Handle form submit
  function handleSubmit(e) {
    e.preventDefault();

    // On submit create a new object
    const newItem = { description, quantity, packed: false, id: Date.now() };
    // Each submit add items to list
    onAddItems(newItem);

    // Clear input field
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      {/* To create an array from 1 to 20 easiest way to do */}
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        required
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

// List of packing
function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

// Each item in list
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span
        style={
          item.packed ? { textDecoration: "line-through", opacity: "0.5" } : {}
        }
      >
        {item.quantity} {item.description}
      </span>
      {/* We can't call simply onDeleteItem, because it gives us form event so doesnt work. */}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

// Footer
function Stats({ items }) {
  // When there is no items
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : `💼 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${numItems && percentage}%)`}
      </em>
    </footer>
  );
}

function Logo() {
  return <h1>🌴Far Away 💼</h1>;
}
