import { CLIENT_REQUEST, CLIENT_FAIL, CLIENT_SUCCESS, CLEAR_ERRORS } from "../constants/clientConstants";
export const clientReducer = (state = { client: {} }, action) => {
    switch (action.type) {
        case CLIENT_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            }
        case CLIENT_SUCCESS:
            return {
                loading: false,
                isAuthenticated: true,
                client: action.payload
            }
            break;
        case CLIENT_FAIL:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}