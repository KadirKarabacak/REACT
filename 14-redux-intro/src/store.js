//! OLD WAY OF REDUX
// Importing redux create store functionality
// import { applyMiddleware, combineReducers, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// FIRST STEP : NPM I REDUX-THUNK AND IMPORT IT
// import { thunk } from "redux-thunk";

//* And now to combine all reducers we do this.
// const rootReducer = combineReducers({
//   account: accountReducer,
//   customer: customerReducer,
// });

//* And then we use createStore like this. So we have a root object which includes both reducers.
// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
//* SECOND STEP: APPLYMIDDLEWARE AS CREATESTORE'S SECOND ARG, THEN USE INTO ACTION CREATORS

///////////////////////////////////////////////////////////////////////////////////////////////
//! Modern way of Redux!
import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
