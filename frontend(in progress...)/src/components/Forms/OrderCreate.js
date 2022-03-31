import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";

import "./input.css"
import { createOrder, getCustomer } from "../../actions/customerAction"
import { updateProfile } from "../../actions/customerAction"


const OrderCreate = ({ history }) => {
    const dispatch = useDispatch();
    const { client, loading, isAuthenticated } = useSelector((state) => state.client);

    const { error, customers } = useSelector(
        (state) => state.customers
    );
    const str = history.location.pathname;
    const id = str.substring(str.length - 24);





    useEffect(() => {
        dispatch(getCustomer());
        if (isAuthenticated === false) {

            history.push("/");
        }
    }, [history, isAuthenticated]);
    let initialValue = {
        lens_type: "",
        frame_type: "",
        amount: "",
        remarks: "",
        re_sph: "",
        re_cyl: "",
        re_axis: "",
        le_sph: "",
        le_cyl: "",
        le_axis: ""

    }
    const [val, setVal] = useState(initialValue)

    const handleChange = (e) => {
        setVal({ ...val, [e.target.name]: e.target.value })
    }

    function handleClick(e) {
        e.preventDefault();
        dispatch(createOrder(val, id));


        history.push("/customer");
    }
    return (
        <div className='divform'><form className='formdiv'>
            <input placeholder='lens_type' name="lens_type" className='inp' value={val.lens_type} onChange={handleChange} />
            <input placeholder='frame_type' name="frame_type" className='inp' value={val.frame_type} onChange={handleChange} />
            <input placeholder='amount' name="amount" className='inp' value={val.amount} onChange={handleChange} />
            <input placeholder='remarks' name="remarks" className='inp' value={val.remarks} onChange={handleChange} />
            <input placeholder='re_sph' name="re_sph" className='inp' value={val.re_sph} onChange={handleChange} />
            <input placeholder='re_cyl' name="re_cyl" className='inp' value={val.re_cyl} onChange={handleChange} />
            <input placeholder='re_axis' name="re_axis" className='inp' value={val.re_axis} onChange={handleChange} />
            <input placeholder='le_sph' name="le_sph" className='inp' value={val.le_sph} onChange={handleChange} />
            <input placeholder='le_cyl' name="le_cyl" className='inp' value={val.le_cyl} onChange={handleChange} />
            <input placeholder='le_axis' name="le_axis" className='inp' value={val.le_axis} onChange={handleChange} />
            <button onClick={handleClick} className="submitbtn btn btn-success" type="submit">Submit</button>
        </form></div>
    )
}

export default OrderCreate;