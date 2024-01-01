// Importing redux create store functionality
import { combineReducers, createStore } from "redux";

//! Where we gonna write pure Redux Code

//! Account reducer initial state
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

//! Account reducer
function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    // Deposit
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    // Withdraw
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    // Request Loan
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    // Pay Loan
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

//! Customer reducer initial state
const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

//! Another Reduce for Customer's state
function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    // Create new Customer
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };

    // Update Customer names
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
}

//! And now to combine all reducers we do this.
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

//! And then we use createStore like this. So we have a root object which includes both reducers.
const store = createStore(rootReducer);

// Account Action Creator
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

// Account Action Creator
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

// Account Action Creator
function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}

// Account Action Creator
function payLoan() {
  return { type: "account/payLoan" };
}

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
store.dispatch(requestLoan(1000, "Buy a home"));
store.dispatch(payLoan());
console.log(store.getState());

// Customer Action Creator
function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toDateString() },
  };
}

// Customer Action Creator
function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}

store.dispatch(createCustomer("Kadir Karabacak", "147896225"));
store.dispatch(updateName("Jonas Schmedthmann"));
console.log(store.getState());
