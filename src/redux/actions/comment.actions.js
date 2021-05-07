import { toast } from "react-toastify";
import moment from 'moment';
import * as postTypes from '../constants/posts.constants';
import * as types from '../constants/comment.constants';

import api from "../../apiService";

const createComment = (post, commentBody) => async (dispatch) => {
    dispatch({type: types.CREATE_COMMENT_REQUEST, payload: null});
    const comment = {
        userId : 1, 
        body: commentBody, 
        createdAt: moment().format() ,
        postId: post.id
    }
    const data = await api.post('/comments', comment);
    dispatch({type: postTypes.CREATE_COMMENT_TO_POST, payload: comment});
    try {
        dispatch({type: types.CREATE_COMMENT_FAILURE, payload: null});
    } 
    catch(error){

    }

    
    


}




const commentActions = {createComment};

export default commentActions;
