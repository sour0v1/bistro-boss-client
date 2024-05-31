import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogIn from '../shared/SocialLogIn';

const LogIn = () => {
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'
    console.log(from);
    const navigate = useNavigate(null);
    // console.log(location)
    const {user, logInUser} = useContext(AuthContext);
    console.log(user)
    const [disabled, setDisabled] = useState(true);
    const captchaRef = useRef(null);
    console.log(captchaRef);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    const handleLogIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logInUser(email, password)
            .then(result =>{
                console.log(result.user);
                navigate(from)
                // navigate('/')
            })
            .catch(error =>{
                console.log(error)
            })
    }

    const handleValidate = e =>{
        e.preventDefault();
        const userCaptchaValue = captchaRef.current.value;
        if(validateCaptcha(userCaptchaValue) === true){
            setDisabled(false);
            
        }
        captchaRef.current.value = ''
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" name='email'/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" name='password' />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div className='border-2 p-2 rounded mt-2'>
                                <LoadCanvasTemplate />
                            </div>
                            <div className='flex justify-center items-center gap-3 my-3'>
                                <input ref={captchaRef} type="text" placeholder="Type captcha" className="input input-bordered" />
                                <button onClick={handleValidate} className='btn btn-warning'>Validate</button>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <SocialLogIn></SocialLogIn>
                </div>
            </div>
        </div>
    );
};

export default LogIn;