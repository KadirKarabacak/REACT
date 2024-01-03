//! First Step: Importing createSlice
import { createSlice } from "@reduxjs/toolkit";

//! Customer reducer initial state
const initialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

// Created modern redux createSlice
const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    // Create new Customer
    createCustomer: {
      prepare(fullName, nationalId) {
        return {
          payload: {
            fullName,
            nationalId,
            createdAt: new Date().toDateString(),
          },
        };
      },
      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },
    // Update Customer names
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

// Exported
export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;

//! Another Reduce for Customer's state
// export default function customerReducer(state = initialState, action) {
//   switch (action.type) {
//     // Create new Customer
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalId: action.payload.nationalId,
//         createdAt: action.payload.createdAt,
//       };

//     // Update Customer names
//     case "customer/updateName":
//       return { ...state, fullName: action.payload };
//     default:
//       return state;
//   }
// }

// // Customer Action Creator
// export function createCustomer(fullName, nationalId) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationalId, createdAt: new Date().toDateString() },
//   };
// }

// // Customer Action Creator
// export function updateName(fullName) {
//   return { type: "customer/updateName", payload: fullName };
// }
