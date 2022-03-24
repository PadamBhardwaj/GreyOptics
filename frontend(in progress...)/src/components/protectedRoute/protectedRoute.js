// import { is } from 'express/lib/request';
import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { loading, isAuthenticated, client } = useSelector((state) => state.client);
    return (
        <>
            {loading && (
                <Route
                    {...rest}
                    render={(props) => {
                        if (!isAuthenticated) {
                            return <Navigate to="/" />
                        }
                        return <Component {...props} />;
                    }}
                />
            )}
        </>
    )
}

export default ProtectedRoute