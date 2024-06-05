import { NavLink, useLocation, useNavigate } from "react-router-dom";
import './Navbar.css'
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    console.log(cart);
    const navigate = useNavigate();
    const location = useLocation();
    const { user, logOut, loading } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('log out successfully');
                // localStorage.removeItem('access-token');
                navigate('/login');
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>
            <div className="fixed z-10 w-full max-w-6xl mx-auto flex justify-between items-center bg-black bg-opacity-20 py-5 px-6 text-white">
                <h1 className="text-2xl font-bold">Bistro</h1>
                <div id="nav" className="flex justify-center items-center gap-6">
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/contact'}>Contact Us</NavLink>
                    {
                        user && !isAdmin ? <NavLink to={'dashboard/user/home'}>Dashboard</NavLink> :
                        user && isAdmin && <NavLink to={'dashboard/admin/home'}>Dashboard</NavLink>
                    }
                    <NavLink to={'/menu'}>Our Menu</NavLink>
                    <NavLink to={'/shop/salad'}>Our Shop</NavLink>
                    <NavLink to={'/secret'}>Secret</NavLink>
                    <NavLink to={'/dashboard/cart'}>
                        <button className="btn">
                            <FaCartShopping />
                            <div className="badge">{cart?.length}</div>
                        </button>
                    </NavLink>
                    {
                        user ? <>
                            <button onClick={handleLogOut}>Log Out</button>
                        </> :
                            <>
                                <NavLink to={'/login'} state={{ from: location }} replace>Log In</NavLink>
                                <NavLink to={'/sign-up'}>Sign Up</NavLink>
                            </>
                    }

                </div>
            </div>
        </>
    );
};

export default Navbar;