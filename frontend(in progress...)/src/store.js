import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { customerReducer } from "./reducers/customerReducer";
import { clientReducer } from "./reducers/clientReducer";
const reducer = combineReducers({
    customers: customerReducer,
    client: clientReducer
})

let initialState = {};
const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store; 