// import { findAllByTestId } from "@testing-library/dom";
import * as types from "../constants/auth.constants";

const initialState = {
    email: "",
    isAuthenticated: false,
    isDirect: false, 
    loading: false
};

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.REGISTER_REQUEST:
            return {...state, 
                    loading: true
                }
        case types.REGISTER_SUCCESS:
            return {...state, 
                    loading: false, 
                    isAuthenticated: true,
                    email: payload.email, 
                    isDirect : true}
        case types.REGISTER_FAILURE:
            return {...state,
                    loading: false}
        case types.LOGIN_REQUEST:
            return {...state, 
                    loading: true
                }
        case types.LOGIN_SUCCESS:
            return {...state, 
                    loading: false, 
                    isAuthenticated: true,
                    email: payload, 
                    isDirect : true}
        case types.LOGIN_FAILURE:
            return {...state,
                    loading: false}
        default:
        return state;
    }
};

export default authReducer;