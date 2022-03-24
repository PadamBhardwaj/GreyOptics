import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
const HomeAdmin = () => {
    const { client, isAuthenticated } = useSelector((state) => state.client);
    console.log(isAuthenticated, client);
    return (
        <div>HomeAdmin</div>
    )
}

export default HomeAdmin