// Each item in list
export default function Item({ item, onDeleteItem, onToggleItem }) {
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
