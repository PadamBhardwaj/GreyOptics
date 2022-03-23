import React, { useEffect, Fragment } from "react";
import { getCustomer } from "../../actions/customerAction"
import { useDispatch, useSelector } from "react-redux";
import Customer from "./Customer";
import Search from "./Search";

function Home2() {
    const dispatch =useDispatch();
    const {loading,error,customers}=useSelector(
        (state)=>state.customers
    );
    useEffect(()=>{
        dispatch(getCustomer())
    },[dispatch])
    return <>
        <div className="headingCustomer container"><h1 className="fs-1 fw-bold">
        Customer Details
    </h1>
    </div>
    <div>
        <Search />
        {customers && customers.map((customer)=><Customer id={customer._id} key={customer._id} customer={customer} />)}
    </div>
    </>
}
export default Home2;


















