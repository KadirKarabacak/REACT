//! First Step: Importing createSlice
import { createSlice } from "@reduxjs/toolkit";

//! Account reducer initial state
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    // Deposit Action Creator
    deposit(state, action) {
      state.balance += action.payload;
    },
    // Withdraw Action Creator
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    // Request Loan Action Creator
    requestLoan: {
      // Taking two or more arguments
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      // And then action.payload becomes that prepared payload
      reducer(state, action) {
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },

    // Pay Loan Action Creator
    payLoan(state, action) {
      state.balance -= state.loan;
      state.loanPurpose = "";
      state.loan = 0;
    },
  },
});

//! Now need to export reducer and action creators
export const { deposit, withdraw, requestLoan, payload } = accountSlice.actions;

export default accountSlice.reducer;

//! Account reducer
// export default function accountReducer(state = initialState, action) {
//   switch (action.type) {
//     // Deposit
//     case "account/deposit":
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: false,
//       };

//     // Converting Currency
//     case "account/convertingCurrency":
//       return { ...state, isLoading: true };

//     // Withdraw
//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };

//     // Request Loan
//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };

//     // Pay Loan
//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };
//     default:
//       return state;
//   }
// }

// // Account Action Creator // Later we pass currency too for use Redux-Thunk to convert currency
// export function deposit(amount, currency) {
//   if (currency === "USD")
//     // if its USD nothing changes.
//     return { type: "account/deposit", payload: amount };

//   // To redux's understand we need a thunk, we need to return a function so it understands
//   // And redux allow us to use dispatch and getState(current state) cuz of its thunk
//   return async function (dispatch, getState) {
//     dispatch({ type: "account/convertingCurrency" });

//     // API call which controls value converting to USD
//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );
//     const data = await res.json();
//     console.log(data);
//     const converted = data.rates.USD;
//     // Return action
//     dispatch({ type: "account/deposit", payload: converted });
//   };
// }

// // Account Action Creator
// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }

// // Account Action Creator
// export function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: { amount, purpose },
//   };
// }

// Account Action Creator
export function payLoan() {
  return { type: "account/payLoan" };
}
