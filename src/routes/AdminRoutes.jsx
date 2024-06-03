import React, { useContext } from 'react';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoutes = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
       return <p className='h-screen w-full flex justify-center items-center'>loading...</p>
    }
    if (user && isAdmin) {
        return <>
            {children}
        </>
    }
    return (
        <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
    );
};

export default AdminRoutes;