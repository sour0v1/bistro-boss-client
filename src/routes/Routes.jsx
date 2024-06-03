import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import Shop from "../pages/shop/Shop";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/signup/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../pages/private/Secret";
import Cart from "../pages/cart/Cart";
import Dashboard from "../layout/dashboard/Dashboard";
import MyCart from "../layout/dashboard/MyCart";
import AllUser from "../layout/dashboard/allUser/AllUser";
import AddItems from "../layout/dashboard/admin/AddItems";
import AdminRoutes from '../routes/AdminRoutes'



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
          path : '/menu',
          element : <Menu></Menu>
        },
        {
          path : '/shop/:category',
          element : <Shop></Shop>
        },
        {
          path : '/login',
          element : <LogIn></LogIn>
        },
        {
          path : '/sign-up',
          element : <SignUp></SignUp>
        },
        {
          path : '/secret',
          element : <PrivateRoutes><Secret></Secret></PrivateRoutes>
        },
        {
          path : '/cart',
          element : <Cart></Cart>
        }
      ]
    },
    // dash board routes
    {
      path : '/dashboard',
      element : <Dashboard></Dashboard>,
      children : [
        // user routes
        {
          path :'/dashboard/cart',
          element : <MyCart></MyCart>
        },
        // admin routes
        {
          path : 'add-item',
          element : <AdminRoutes><AddItems></AddItems></AdminRoutes>
        },
        {
          path : 'users',
          element : <AllUser></AllUser>
        },
      ]
    }
  ]);

  export default router;