//! Customer reducer initial state
const initialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

//! Another Reduce for Customer's state
export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    // Create new Customer
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };

    // Update Customer names
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

// Customer Action Creator
export function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toDateString() },
  };
}

// Customer Action Creator
export function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}
