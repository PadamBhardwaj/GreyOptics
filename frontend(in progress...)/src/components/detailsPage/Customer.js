import React from "react";
import "../../App.css";
import { Redirect, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import { createOrder } from "../../actions/customerAction"
const current = new Date();
const month = current.toLocaleString('default', { month: 'long' });
const date = `${current.getDate()} ${month} ${current.getFullYear()}`;
const Customer = ({ customer, history }) => {
    const dispatch = useDispatch();
    const num = customer.contactno;
    const tel = `tel:${num}`;
    const whatsapp = `https://wa.me/${num}`;
    const handleClick = () => {

        console.log("clicked");
        console.log(customer._id)
        history.push('/customer/orders/new/' + customer._id)
    }
    return <div className="customerCard">

        <div className="d-flex justify-content-between align-content-start  px-3 py-3" >
            <div className="border d-flex justify-content-between">
                <h3>101.</h3>
                <div>
                    <h3>{customer.name}</h3>
                    <p>{customer.contactno}</p>
                </div>
            </div>
            <h4>{customer.date}</h4>
        </div>
        <div className="fontawesome">
            <a> <i className="fa-solid  fa-xl fa-pencil"></i></a>
            <a href={whatsapp}><i className="fa-brands fa-xl  fa-whatsapp-square"></i></a>
            <a href={tel}><i className="fa-solid  fa-xl fa-phone"></i></a>
        </div>

        <form action="post" method="">
            <div >
                <button type="button" className="btn btn-secondary" onClick={handleClick}>New Order</button>
            </div>
        </form>
    </div >
}
export default Customer;