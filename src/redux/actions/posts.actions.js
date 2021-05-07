import { toast } from "react-toastify";

import * as types from "../constants/posts.constants";

import api from "../../apiService";

const getPosts = () => async (dispatch) => {
        dispatch({ type: types.GET_POSTS_REQUEST, payload: null });
    try {        
        const data = await api.get('/posts');
        dispatch({ type: types.GET_POSTS_SUCCESS, payload: data.data });
    } catch (error) {
        toast.error(error.message);
        dispatch({ type: types.GET_POSTS_FAILURE, payload: error });
    }
}



const postsActions = {getPosts};

export default postsActions;
