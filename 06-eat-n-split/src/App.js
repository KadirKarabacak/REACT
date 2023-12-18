import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  // Control new added friends which data comes from FormAddFriend inputs.
  const [friends, setFriends] = useState(initialFriends);

  // State to control addFriend and split bill form
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  // Control form
  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  // Without mutate original array and add more than one user
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    handleShowAddFriend();
  }

  // Control selected friend by passing in friend object
  function handleSelection(friend) {
    // If selected button clicks again, set it null to hide form, otherwise set friend.
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    // Also i need optional chaining on current right here.
    setShowAddFriend(false);
    // And each time only open one form.
  }

  /**
   * @param {Calculated from expense and friendExpense} value
   * @description { Control split submit.}
    // 1: update friends array with friends state.
    // 2: Check friend.id is === ? selected.id
    // 3: if yes then {go into object ...other properties, change balance with value}
    // 4: if not leave it as it is. 
   */
  function handleSplitBill(value) {
    // Updating friends array to find which one need to change
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    // And close form after submit
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      {/* <Header /> */}
      <div className="sidebar">
        {/* Friends list */}
        <FriendsList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {/* Form Add Friend */}
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        {/* Button open Add Friend Form */}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {/* Split Bill Form */}
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

// Pass initial friends list, then render news
function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

// Take entire object forEach friend and render each <li>
function Friend({ friend, onSelection, selectedFriend }) {
  // Check id to add selected class conditionally, and change button text
  const isSelected = selectedFriend?.id === friend.id;
  // selectedFriend.id is null right now, so i use optional chaining

  return (
    <li className={isSelected && "selected"}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} &nbsp;
          {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you &nbsp;
          {Math.abs(friend.balance)}€
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      {/* Select buttons to open right form */}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

// Reusable button element
function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

// Add new friends by submit
function FormAddFriend({ onAddFriend }) {
  // Control input elements
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    const id = crypto.randomUUID();
    // crypto.randomUUID good to use for create random id
    const newFriend = {
      name,
      image: `${image}?=${id}`,
      id,
      balance: 0,
    };
    onAddFriend(newFriend);
  }

  return (
    <form onSubmit={handleSubmit} className="form-add-friend">
      <label>Friend Name 🤙</label>
      <input
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />

      <label>Image URL 🎴</label>
      <input
        required
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
      />
      <Button>Add</Button>
    </form>
  );
}

// Using selectedFriend to each click set New selected friends data
function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const friendExpense = bill ? bill - expense : "";
  const [whoPays, setWhoPays] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !expense) return;

    // To update who owes other one
    onSplitBill(whoPays === "user" ? friendExpense : -expense);
    // If you pays, others need to owe you. If friend pays, u need to owe him/her
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input
        required
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
        type="number"
      />

      <label>🧑 Your expense</label>
      <input
        required
        value={expense}
        onChange={(e) =>
          setExpense(+e.target.value > bill ? expense : +e.target.value)
        }
        type="number"
      />

      <label>🤙 {selectedFriend.name}'s expense</label>
      <input value={+friendExpense} disabled type="number" />

      <label>🤑 Who is paying bill</label>
      <select value={whoPays} onChange={(e) => setWhoPays(e.target.value)}>
        <option value="user">You?</option>
        <option value="friend">{selectedFriend.name}?</option>
      </select>

      <Button onClick={() => {}}>Split bill</Button>
    </form>
  );
}

// function Header() {
//   return <header className="header">Eat-N-Split</header>;
// }
