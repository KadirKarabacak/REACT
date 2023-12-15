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
    setSelectedFriend(friend);
  }

  return (
    <div className="app">
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
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
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
  const isSelected = selectedFriend.id === friend.id;

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
      <Button onClick={() => onSelection(friend)}>Select</Button>
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
function FormSplitBill({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>💰Bill value</label>
      <input type="text" />

      <label>🧑 Your expense</label>
      <input type="text" />

      <label>🤙 {selectedFriend.name}'s expense</label>
      <input disabled type="text" />

      <label>🤑 Who is paying bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
