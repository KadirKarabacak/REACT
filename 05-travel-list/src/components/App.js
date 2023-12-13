import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

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

  function handleClearList() {
    // Check for user clicks "okay"
    const confirmed = window.confirm(
      `Are you sure you want to delete all ${items.length} items?`
    );
    if (confirmed) setItems([]);
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
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
