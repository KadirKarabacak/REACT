import { useState } from "react";
export default function Form({ onAddItems }) {
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
