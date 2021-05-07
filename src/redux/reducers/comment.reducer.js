import * as types from "../constants/comment.constants";

const initialState = {
    
};


const commentReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
            case types.CREATE_COMMENT_REQUEST:
                return {...state}
            case types.CREATE_COMMENT_FAILURE:
                return {...state}
        default:
        return state;
    }
};

export default commentReducer;