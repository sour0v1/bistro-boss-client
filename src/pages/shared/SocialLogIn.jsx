import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const SocialLogIn = () => {
    const axiosPublic = useAxiosPublic();
    const { createUserByGoogle } = useContext(AuthContext);

    const handleGoogleSignUp = () => {
        createUserByGoogle()
            .then((result => {
                console.log(result.user)
                const userInfo = {
                    name: result.user.displayName,
                    email: result.user.email
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })


            }))
            .catch((error => {
                console.log(error);
            }))
    }
    return (
        <div className='mx-9'>
            <button onClick={handleGoogleSignUp} className='flex justify-center items-center w-full gap-2 border py-1'>
                <FaGoogle></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default SocialLogIn;