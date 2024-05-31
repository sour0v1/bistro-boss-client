import React from 'react';

const UserInfo = ({ user, idx }) => {
    const {name, email, role} = user;
    console.log(user)
    return (
        <tr>
            <th>{idx + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{role}</td>
            <td>Action</td>
        </tr>
    );
};

export default UserInfo;