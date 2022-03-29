import axios from "axios";
import { CLEAR_ERRORS, ALL_CUSTOMER_FAIL, ALL_CUSTOMER_REQUEST, ALL_CUSTOMER_SUCCESS, ADD_CUSTOMER_FAIL, ADD_CUSTOMER_REQUEST, ADD_CUSTOMER_SUCCESS } from "../constants/customerConstant"

export const getCustomer = () => async (dispatch) => {
    try {
        dispatch({
            type: ALL_CUSTOMER_REQUEST
        });
        const { data } = await axios.get("/api/customers")
        console.log(data);
        dispatch({
            type: ALL_CUSTOMER_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_CUSTOMER_FAIL,
            payload: error.response.data.message
        })
    }
}
export const createCustomer = (customer) => async (dispatch) => {
    try {
        dispatch({ type: ADD_CUSTOMER_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        const { data } = await axios.post("/api/customers/new", customer, config);

        dispatch({ type: ADD_CUSTOMER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: ADD_CUSTOMER_FAIL,
            payload: error.response.data.message,
        });
    }
};
export const clearErrors = () => {
    dispatch({
        type: CLEAR_ERRORS
    })
}