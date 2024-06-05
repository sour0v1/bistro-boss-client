import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const UserHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
           <h1>WellCome back, <span>{user?.displayName}</span></h1>
        </div>
    );
};

export default UserHome;