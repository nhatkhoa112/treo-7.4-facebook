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
        default:
        return state;
    }
};

export default postsReducer;