import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import postsReducer from "./posts.reducer";


export default combineReducers({
    auth: authReducer,
    posts: postsReducer,
});