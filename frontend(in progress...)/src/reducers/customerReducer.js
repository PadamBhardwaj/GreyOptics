import { ALL_CUSTOMER_FAIL, ALL_CUSTOMER_REQUEST, ALL_CUSTOMER_SUCCESS, CLEAR_ERRORS } from "../constants/customerConstant"
export const customerReducer = (state = { customers: [] }, action) => {
    switch (action.type) {
        case ALL_CUSTOMER_REQUEST:
            return {
                loading: true,
                customer: []
            };
        case ALL_CUSTOMER_SUCCESS:
            return {
                loading: false,
                customers: action.payload.customers,
                customersCount: action.payload.customerCount
            };
        case ALL_CUSTOMER_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}