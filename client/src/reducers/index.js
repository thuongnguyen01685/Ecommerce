import categoryReducers from "./category.reducers";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  category: categoryReducers,
});

export default rootReducer;
