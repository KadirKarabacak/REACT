// Importing redux create store functionality
import { applyMiddleware, combineReducers, createStore } from "redux";

// FIRST STEP : NPM I REDUX-THUNK AND IMPORT IT
import { thunk } from "redux-thunk";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

//! Where we gonna write pure Redux Code

//! And now to combine all reducers we do this.
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

//! And then we use createStore like this. So we have a root object which includes both reducers.
const store = createStore(rootReducer, applyMiddleware(thunk));
//! SECOND STEP: APPLYMIDDLEWARE AS CREATESTORE'S SECOND ARG, THEN USE INTO ACTION CREATORS

export default store;
