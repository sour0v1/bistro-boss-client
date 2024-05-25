
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../pages/shared/Navbar';
import Footer from '../pages/shared/Footer';

const Root = () => {
    const location = useLocation();
    console.log(location);
    const logInLocation = location.pathname.includes('login') || location.pathname.includes('sign-up')
    console.log(logInLocation)
    return (
        <div className='max-w-6xl mx-auto'>
            {
                logInLocation || <Navbar></Navbar>
            }
            <Outlet></Outlet>
            {
                logInLocation || <Footer></Footer>
            }
        </div>
    );
};

export default Root;