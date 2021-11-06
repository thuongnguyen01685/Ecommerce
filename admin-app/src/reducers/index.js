import authReducers from "./auth.reducers";
import userReducers from "./user.reducers";
import productReducers from "./product.reducers";
import categoryReducers from "./category.reducers";
import orderReducers from "./order.reducers";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducers,
  user: userReducers,
  category: categoryReducers,
  product: productReducers,
  order: orderReducers,
});

export default rootReducer;
