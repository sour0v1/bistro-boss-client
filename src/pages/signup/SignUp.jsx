import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import SocialLogIn from '../shared/SocialLogIn';
// import SocialSignIn from '../shared/SocialSignIn'

// import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    name: userName,
                    email
                }
                updateProfile(auth.currentUser, {
                    'displayName': userName
                })
                    .then(() => {
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                console.log(res.data)
                            })
                            .catch(error => {
                                console.log(error)
                            })
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    // handle Google sign up
    

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Sign Up</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" name='name' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name='email' />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name='password' />
                            {
                                // console.log(errors.pass?.type)
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>

                    </form>
                    {/*  */}
                   <SocialLogIn></SocialLogIn>
                    <label className="label mx-9">
                        <span>Already user?<Link to={'/login'} className="link link-hover underline mx-2 text-blue-500">Log In</Link></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SignUp;