import React from "react";
import "../../App.css";

const current = new Date();
const month = current.toLocaleString('default', { month: 'long' });
const date = `${current.getDate()} ${month} ${current.getFullYear()}`;

const Customer = ({ customer }) => {
    return <div className="customerCard">

    <div className="d-flex justify-content-between align-content-start  px-3 py-3" >
            <div className="border d-flex justify-content-between">
                <h3>101.</h3>
                <div>
                    <h3>{customer.name}</h3>
                    <p>9876543210</p>
                </div>
            </div>
            <h4>{date}</h4>
        </div>
        <form action="post" method="">
        <div >
            <button type="button" class="btn btn-secondary">New Order</button>
        </div>
        </form>
    </div>
}
export default Customer;