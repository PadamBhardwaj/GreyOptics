import { CLIENT_REQUEST, CLIENT_FAIL, CLIENT_SUCCESS, CLEAR_ERRORS, LOGOUT_FAIL, LOGOUT_SUCCESS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS } from "../constants/clientConstants";
import axios from "axios";
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: CLIENT_REQUEST });
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post(`/api/clients/login`, { email, password }, config);
        dispatch({ type: CLIENT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: CLIENT_FAIL
            , payload: error.response.data.message
        })
    }

}

//Load User
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: LOAD_USER_REQUEST });
        // const config = { headers: { "Content-Type": "application/json" } };


        const { data } = await axios.get(`/api/client`);
        console.log(data);
        dispatch({ type: LOAD_USER_SUCCESS, payload: data.client });
    } catch (error) {
        dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
    }
};
export const logout = () => async (dispatch) => {
    try {
        await axios.get(`/api/clients/logout`);

        dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
        dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }

};
export const clearErrors = () => {
    dispatch({
        type: CLEAR_ERRORS
    })
}