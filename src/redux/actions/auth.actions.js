import { toast } from "react-toastify";

import * as types from "../constants/auth.constants";

import api from "../../apiService";

const register = (username, firstName, lastName, avatarUrl, email, password) => async (dispatch) => {
        dispatch({ type: types.REGISTER_REQUEST, payload: null });
    try {        
        const data = await api.post('/users', {username, firstName, lastName, avatarUrl, email, password});
        dispatch({ type: types.REGISTER_SUCCESS, payload: data.data });
        toast.success(" User register successfully");
    } catch (error) {
        toast.error(error.message);
        dispatch({ type: types.REGISTER_FAILURE, payload: error });
    }
};

const userLogin = (email, password) => async (dispatch) => {
        dispatch({ type: types.LOGIN_REQUEST, payload: null });
        const data = await api.get('/users');
        if(data.data.some(user => {
            return user.email === email && user.password === password
        } )){
            let idx = data.data.findIndex( d => d.email === email && d.password === password);
            toast.success("Welcome to facebook");
            dispatch({ type: types.LOGIN_SUCCESS, payload: data.data[idx] });
        } else {
            toast.error("The email or password is invalid");
            dispatch({ type: types.LOGIN_FAILURE, payload: null });
        }
};


const signOut = () => async (dispatch) => {
        dispatch({ type: types.LOGOUT, payload: null });
};



const authActions = {register, userLogin, signOut};

export default authActions;
