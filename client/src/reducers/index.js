import categoryReducers from "./category.reducers";
import productReducers from "./product.reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  category: categoryReducers,
  product: productReducers,
});

export default rootReducer;
