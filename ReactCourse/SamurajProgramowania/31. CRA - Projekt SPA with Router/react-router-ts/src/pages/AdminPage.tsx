import React from "react";
import { Navigate } from "react-router-dom";

const AdminPage = () => {
    const permission = false;
    return (
        <>
            {permission ? (<h3>Admin panel - welcome!</h3>) : <Navigate replace to="/login" />}
        </>
    );
}

export default AdminPage;