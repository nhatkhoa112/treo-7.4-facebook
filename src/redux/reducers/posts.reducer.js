import * as types from "../constants/posts.constants";

const initialState = {
    loading: false,
    posts: []
};


const postsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
            case types.GET_POSTS_REQUEST:
                return {...state, 
                        loading: true
                    }
            case types.GET_POSTS_SUCCESS:
                return {...state, 
                        loading: false, 
                        posts: payload
                        }
            case types.GET_POSTS_FAILURE:
                return {...state,
                        loading: false}
            case types.POST_POST_REQUEST:
                return {...state, 
                        loading: true
                    }
            case types.POST_POST_SUCCESS:
                return {...state, 
                        loading: false, 
                        posts: state.posts.concat(payload.data)
                        }
            case types.POST_POST_FAILURE:
                return {...state,
                        loading: false}
            case types.CREATE_COMMENT_TO_POST: 
                state.posts.find(p => p.id === payload.postId).comments.unshift(payload);
                return {...state , posts: state.posts}

                
        default:
        return state;
    }
};

export default postsReducer;