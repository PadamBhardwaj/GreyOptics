import axios from "axios";
import {
    CLEAR_ERRORS,
    ALL_CUSTOMER_FAIL,
    ALL_CUSTOMER_REQUEST,
    ALL_CUSTOMER_SUCCESS,
    ADD_CUSTOMER_FAIL,
    ADD_CUSTOMER_REQUEST,
    ADD_CUSTOMER_SUCCESS,
    ADD_ORDER_FAIL,
    ADD_ORDER_REQUEST,
    ADD_ORDER_SUCCESS,
    UPDATE_CUSTOMER_FAIL,
    UPDATE_CUSTOMER_REQUEST,
    UPDATE_CUSTOMER_SUCCESS
} from "../constants/customerConstant"

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

//update customer

export const updateProfile = (userData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PROFILE_REQUEST });

        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.put(`/api/customers/update`, userData, config);

        dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data.success });
    } catch (error) {
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: error.response.data.message,
        });
    }
};

export const createOrder = (order, id) => async (dispatch) => {
    // try {
    dispatch({ type: ADD_ORDER_REQUEST });

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };
    // console.log(order, customer)
    const { data } = await axios.post(`/api/customer/orders/new/${id}`, order, config);
    console.log(data, "create");

    dispatch({ type: ADD_ORDER_SUCCESS, payload: data });
    // }
    // } catch (error) {
    //     console.log("error")
    //     dispatch({
    //         type: ADD_ORDER_FAIL,
    //         payload: error.response,
    //     });
    // }
}
export const clearErrors = () => {
    dispatch({
        type: CLEAR_ERRORS
    })
}