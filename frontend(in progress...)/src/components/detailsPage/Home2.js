import React, { useEffect, Fragment } from "react";
import { getCustomer } from "../../actions/customerAction"
import { useDispatch, useSelector } from "react-redux";
import Customer from "./Customer";
import Search from "./Search";
import LogoutButton from "../logoutButton/logoutButton";
import { logout } from "../../actions/clientAction"
import { Link, Redirect, Route } from "react-router-dom";
const Home2 = ({ history }) => {
    const dispatch = useDispatch();
    const { client, loading, isAuthenticated } = useSelector((state) => state.client);
    const { error, customers } = useSelector(
        (state) => state.customers
    );
    // console.log(client, isAuthenticated);
    useEffect(() => {
        dispatch(getCustomer());
        if (isAuthenticated === false) {
            console.log("home 2 returning")
            history.push("/");
        }
        console.log(client.role);
    }, [history, isAuthenticated]);
    function handleClick() {
        dispatch(logout());
        history.push("/");
    }
    function handleAdd() {
        history.push("/customer/new")
    }
    return <>
        {loading === false && (<div>
            <div className="headingCustomer container"><h1 className="fs-1 fw-bold">
                Customer Details
            </h1>
            </div>
            <div>
                <Search />
                {customers && customers.map((customer) => <Customer id={customer._id} key={customer._id} customer={customer} history={history} />)}
            </div>
            <LogoutButton func={handleClick} />

            <button className="Add" onClick={() => { handleAdd() }}>+</button>



        </div>
        )
        }
    </>
}
export default Home2;


















