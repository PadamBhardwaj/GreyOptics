import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import "./input.css";
import { createClient } from "../../actions/clientAction"
import { useEffect, useState } from "react"
const ClientCreate = ({ history }) => {
    const dispatch = useDispatch();
    const { client, loading, isAuthenticated } = useSelector((state) => state.client);
    
    useEffect(() => {
        if (isAuthenticated === false) {
            console.log("clientCustomer returning")
            history.push("/");
        }
    }, [history, isAuthenticated]);
    let initialValue = {

        name: "",
        address: "",
        date: "",
        contactno: "",
        email: "",
        username: "",
        password: "",
        remarks: ""

    }
    const [val, setVal] = useState(initialValue)

    const handleChange = (e) => {
        setVal({ ...val, [e.target.name]: e.target.value })
    }

    function handleClick(e) {
        e.preventDefault();
        dispatch(createClient(val));
        history.push("/admin");
    }
    return (
        <div className='divform'><form className='formdiv'>
            <input placeholder='Name' name="name" className='inp' value={val.name} onChange={handleChange} />
            <input placeholder='Address' name="address" className='inp' value={val.address} onChange={handleChange} />
            <input placeholder='Date' name="date" className='inp' value={val.date} onChange={handleChange} />
            <input placeholder='Contact no.' name="contactno" className='inp' value={val.contactno} onChange={handleChange} />
            <input placeholder='Email' name="email" className='inp' value={val.email} onChange={handleChange} />
            <input placeholder='username' name="username" className='inp' value={val.username} onChange={handleChange} />
            <input placeholder='password' name="password" className='inp' type='password' value={val.password} onChange={handleChange} />
            <input placeholder='remarks' name="remarks" className='inp' value={val.remarks} onChange={handleChange} />
            <button onClick={handleClick} className="submitbtn btn btn-success" type="submit">Submit</button>
        </form></div>
    )
}

export default ClientCreate;