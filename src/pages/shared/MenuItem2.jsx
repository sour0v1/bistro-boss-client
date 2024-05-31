import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MenuItem2 = ({ item }) => {
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const { user, } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(item);
    const { name, recipe, price, image, _id } = item;
    const cartInfo = {
        itemId: _id,
        email: user?.email,
        itemName: name,
        itemImage: image,
        price
    }

    const handleCart = () => {
        if (user && user.email) {
            console.log('You have permission');
            axiosSecure.post('/cart', cartInfo)
                .then(res => {
                    console.log(res.data)
                    refetch();
                })
            // navigate('/cart')
        }
        else {
            Swal.fire({
                title: "Logged in required",
                text: "You have to log in before add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Log in"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                    // Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    // });
                }
            });
        }
        // console.log(food)
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl  relative">
            <figure className="">
                <img src={image} />
            </figure>
            <div className="card-body items-center text-center">
                <p className="bg-black px-2 py-1 text-white absolute top-4 right-6">${price}</p>
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button onClick={() => handleCart(item)} className="py-1 px-3 border-b-2 rounded-lg border-[#BB8506] hover:bg-black hover:text-white hover:border-none">Add to Cart</button>
                </div>
            </div>
        </div>
    );

};

export default MenuItem2;