import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="fixed z-10 w-full max-w-6xl mx-auto flex justify-between items-center bg-black bg-opacity-20 py-5 px-6 text-white">
                <h1 className="text-2xl font-bold">Bistro</h1>
                <div className="flex justify-center items-center gap-6">
                    <NavLink>Home</NavLink>
                    <NavLink>Contact Us</NavLink>
                    <NavLink>Dashboard</NavLink>
                    <NavLink to={'/menu'}>Our Menu</NavLink>
                    <NavLink to={'/shop'}>Our Shop</NavLink>
                </div>
            </div>
        </>
    );
};

export default Navbar;