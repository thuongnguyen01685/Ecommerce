import categoryReducers from "./category.reducers";
import productReducers from "./product.reducer";

import authReducers from "./auth.reducers";

import { combineReducers } from "redux";
import cartReducer from "./cart.reducer";

const rootReducer = combineReducers({
  category: categoryReducers,
  product: productReducers,
  auth: authReducers,
  cart: cartReducer,
});

export default rootReducer;
