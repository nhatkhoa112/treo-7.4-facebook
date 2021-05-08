// import { findAllByTestId } from "@testing-library/dom";
import * as types from "../constants/auth.constants";
const user = JSON.parse(localStorage.getItem("coderbookUser"));


const initialState = {
    username: user ? user.username : "",
    avatarUrl: user ? user.avatarUrl : "",
    email:  user ? user.email : "",
    isAuthenticated:  user ? true : false, 
    isDirect: user ? true : false, 
    loading:   false, 
};

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.REGISTER_REQUEST:
            return {...state, 
                    loading: true
                }
        case types.REGISTER_SUCCESS:
                localStorage.setItem("coderbookUser", JSON.stringify(payload));
            return {...state, 
                    loading: false, 
                    isAuthenticated: true,
                    email: payload.email,
                    username: payload.username,
                    avatarUrl: payload.avatarUrl,
                    isDirect : true}
        case types.REGISTER_FAILURE:
            return {...state,
                    loading: false}
        case types.LOGIN_REQUEST:
            return {...state, 
                    loading: true
                }
        case types.LOGIN_SUCCESS:
            localStorage.setItem("coderbookUser", JSON.stringify(payload)); 
            return {...state, 
                    loading: false, 
                    isAuthenticated: true,
                    email: payload.email,
                    username: payload.username,
                    avatarUrl: payload.avatarUrl,
                    isDirect : true}
        case types.LOGIN_FAILURE:
            return {...state,
                    loading: false}
        case types.LOGOUT:
            localStorage.removeItem("coderbookUser")
            return {...state,
                    email:   "",
                    isAuthenticated:  false, 
                    isDirect:  false, 
                    loading:   false, }
        default:
        return state;
    }
};

export default authReducer;