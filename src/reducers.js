import { combineReducers } from "redux";
import { UserReducer } from "./redux/user";

export default combineReducers({
  user: UserReducer
});