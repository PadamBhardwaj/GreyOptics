import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
// import Input from './input';
import "./input.css"
import { updateProfile } from "../../actions/customerAction"
const cutomerUpdate = ({ customer, history }) => {
    const dispatch = useDispatch();
    const { client, loading, isAuthenticated } = useSelector((state) => state.client);
    // const { } = useDispatch((state) => state.customer);
    useEffect(() => {
        if (isAuthenticated === false) {
            console.log("updateCustomer returning")
            history.push("/");
        }
    }, [history, isAuthenticated]);
    let initialValue = customer
    const [val, setVal] = useState(initialValue)

    const handleChange = (e) => {
        setVal({ ...val, [e.target.name]: e.target.value })
    }

    function handleClick(e) {
        e.preventDefault();
        dispatch(updateProfile(val));
        history.push("/customer");
    }
    return (
        <div className='divform'><form className='formdiv'>
            <input placeholder='Name' name="name" className='inp' value={val.name} onChange={handleChange} />
            <input placeholder='Address' name="address" className='inp' value={val.address} onChange={handleChange} />
            <input placeholder='Date' name="date" className='inp' value={val.date} onChange={handleChange} />
            <input placeholder='Contact no.' name="contactno" className='inp' value={val.contactno} onChange={handleChange} />
            <input placeholder='Email' name="email" className='inp' value={val.email} onChange={handleChange} />
            <button onClick={handleClick} className="submitbtn btn btn-success" type="submit">Submit</button>
        </form></div>
    )
}

export default cutomerCreate