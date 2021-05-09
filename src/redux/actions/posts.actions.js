import { toast } from "react-toastify";
import moment from 'moment';
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


const getPostsByUserId = (userId) => async (dispatch) => {
        dispatch({ type: types.GET_POSTS_BY_USER_ID_REQUEST, payload: null });
    try {        
        const data = await api.get('/posts');
        let postsById = data.data.filter(post => post.userId === userId);
        dispatch({ type: types.GET_POSTS_BY_USER_ID_SUCCESS, payload: postsById });
    } catch (error) {
        toast.error(error.message);
        dispatch({ type: types.GET_POSTS_BY_USER_ID_FAILURE, payload: error });
    }
}

const postPost = (postBody) => async (dispatch) => {
        dispatch({ type: types.POST_POST_REQUEST, payload: null });
        
    try {        
        const data = await api.post('/posts',{
            body: postBody, 
            userId: 2, 
            createdAt: moment().format(),
            comments: []  
        });
        dispatch({ type: types.POST_POST_SUCCESS, payload:  data });
    } catch (error) {
        toast.error(error.message);
        dispatch({ type: types.POST_POST_FAILURE, payload: error });
    }
}



const postsActions = {getPosts, postPost , getPostsByUserId};

export default postsActions;
