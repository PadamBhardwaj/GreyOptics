import React, { useEffect, Fragment } from "react";
import { getCustomer } from "../../actions/customerAction"
import { useDispatch, useSelector } from "react-redux";
import Customer from "./Customer";
import Search from "./Search";
import { logout } from "../../actions/clientAction"
import { Route, Navigate } from "react-router-dom";
const Home2 = () => {
    const dispatch = useDispatch();
    const { client, isAuthenticated } = useSelector((state) => state.client);

    const { loading, error, customers } = useSelector(
        (state) => state.customers
    );
    console.log(client, isAuthenticated);
    useEffect(() => {

        dispatch(getCustomer())
    }, [dispatch])
    if (!isAuthenticated) {

        console.log(history);
        console.log(client);

        return (<Navigate to='/' />);
    }

    return <>

        <div className="headingCustomer container"><h1 className="fs-1 fw-bold">
            Customer Details
        </h1>
        </div>
        <div>
            <Search />
            {customers && customers.map((customer) => <Customer id={customer._id} key={customer._id} customer={customer} />)}
        </div>
        <div>
            <button onClick={() => { dispatch(logout()) }}>logout</button>
        </div>
    </>
}
export default Home2;


















