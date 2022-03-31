import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Search from '../detailsPage/Search'
import LogoutButton from "../logoutButton/logoutButton";
import Client from "../detailsPage/Client"
import { getClients, logout } from '../../actions/clientAction';
import { useDispatch, useSelector } from "react-redux"
const HomeAdmin = ({ history }) => {

    const dispatch = useDispatch();

    const { client, isAuthenticated } = useSelector((state) => state.client);
    const { loading, clients } = useSelector((actions) => actions.clients);
    if (!client) {
        window.location.reload();

    }
    
    useEffect(() => {
        dispatch(getClients());
        if (isAuthenticated === false) {
            console.log("home 2 returning")
            history.push("/");
        }
        
        if (client.role === "admin") {
            console.log("Admin login")
            history.push("/admin");
        }
        
    }, [history, isAuthenticated]);

    function handleClick() {
        dispatch(logout());
        history.push("/");
    }
    function handleAdd() {
        history.push("/clients/register")
    }
    
    return <>
        {loading === false && (
            <div>
                <div className="headingCustomer container"><h1 className="fs-1 fw-bold">
                    Clients Details
                </h1>
                </div>
                <div>
                    <Search />
                    {clients && clients.map((client) => <Client id={client._id} key={client._id} customer={client} history={history} />)}
                </div>
                <LogoutButton func={handleClick} />

                <button className="Add" onClick={() => { handleAdd() }}>+</button>



            </div>
        )
        }
    </>
}
export default HomeAdmin