import { CLIENT_REQUEST, CLIENT_FAIL, CLIENT_SUCCESS, CLEAR_ERRORS } from "../constants/clientConstants";
import axios from "axios";
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: CLIENT_REQUEST });
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post(`/api/clients/login`, { email, password }, config);
        dispatch({ type: CLIENT_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({
            type: CLIENT_FAIL
            , payload: error.response.data.message
        })
    }

}

export const clearErrors = () => {
    dispatch({
        type: CLEAR_ERRORS
    })
}