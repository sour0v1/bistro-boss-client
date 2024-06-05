import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const AdminHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1>WellCome back, <span>{user?.displayName}</span></h1>
        </div>
    );
};

export default AdminHome;