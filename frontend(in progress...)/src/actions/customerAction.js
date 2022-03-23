import axios from "axios";
import {CLEAR_ERRORS,ALL_CUSTOMER_FAIL,ALL_CUSTOMER_REQUEST,ALL_CUSTOMER_SUCCESS} from "../constants/customerConstant"

export const getCustomer=()=>async (dispatch)=>{
    try {
        dispatch({
            type:ALL_CUSTOMER_REQUEST
        });
        const {data}= await axios.get("/api/customers")
        console.log(data);
        dispatch({
            type:ALL_CUSTOMER_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:ALL_CUSTOMER_FAIL,
            payload:error.response.data.message
        })
    }
}

export const clearErrors=()=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}