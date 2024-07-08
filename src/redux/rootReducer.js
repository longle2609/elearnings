import { combineReducers } from "redux";
import userReducer from "./slices/user.slice";
import courseReducer from "./slices/course.slice";
import cartReducer from "./slices/cart.slice"

export default combineReducers({
    user: userReducer,
    course: courseReducer,
    cart: cartReducer,
});