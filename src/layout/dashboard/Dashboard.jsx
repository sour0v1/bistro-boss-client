
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className='flex'>
            <div className='w-1/6 bg-gray-200 min-h-screen'>
                {
                    isAdmin ? <>
                        <ul className='p-9 space-y-4'>
                            <li><NavLink to={'/'}>Admin Home</NavLink></li>
                            <li><NavLink to={'add-item'}>Add Item</NavLink></li>
                            <li><NavLink to={'/'}>Manage Items</NavLink></li>
                            <li><NavLink to={'/'}>Manage Bookings</NavLink></li>
                            <li><NavLink to={'users'}>All Users</NavLink></li>
                        </ul>
                    </> :
                        <>
                            <ul className='p-9 space-y-4'>
                                <li><NavLink to={'/'}>User Home</NavLink></li>
                                <li><NavLink to={'/'}>Reservation</NavLink></li>
                                <li><NavLink to={'/'}>Payment History</NavLink></li>
                                <li><NavLink to={'/dashboard/cart'}>My Cart</NavLink></li>
                            </ul>
                        </>
                }
                {/* divider */}
                <hr className='border border-black mx-9' />
                <ul className='p-9 space-y-4'>
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/menu'}>Menu</NavLink></li>
                    <li><NavLink to={'/shop/salad'}>Shop</NavLink></li>
                    <li><NavLink to={'/contact'}>Contact</NavLink></li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;