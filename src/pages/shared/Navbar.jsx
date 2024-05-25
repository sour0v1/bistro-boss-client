import { NavLink, useLocation } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
    const location = useLocation();
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () =>{
        logOut()
            .then(() =>{
                console.log('log out successfully')
            })
            .catch(error =>{
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
                    <NavLink to={'/dashboard'}>Dashboard</NavLink>
                    <NavLink to={'/menu'}>Our Menu</NavLink>
                    <NavLink to={'/shop/salad'}>Our Shop</NavLink>
                    <NavLink to={'/secret'}>Secret</NavLink>
                    {
                        user ? <>
                        <button onClick={handleLogOut}>Log Out</button>
                    </>:
                    <>
                        <NavLink to={'/login'} state={{from : location}} replace>Log In</NavLink>
                        <NavLink to={'/sign-up'}>Sign Up</NavLink>
                    </>
                    }

                </div>
            </div>
        </>
    );
};

export default Navbar;