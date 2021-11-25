import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {

    const { signInUsingGoogle } = useAuth()
    // console.log(signInUsingGoogle)
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div className="login-form ">
            <div className="text-center">
                <h2 className="m-5 text-primary" >Please Login</h2>
                <form>
                    <input className="mb-3 text-center border border-primary border-2 rounded" type="email" name="" placeholder="Your Email" />
                    <br />
                    <input className="mb-3 text-center border border-primary border-2 rounded" type="password" name="" placeholder="Your Password" />
                    <br />
                    <input className="mb-3 btn-primary border-0 rounded p-2" type="submit" value="Submit" />
                </form>
                <p>new to ema-john website? <Link to="/register">Create Account</Link></p>

                <button
                    className="btn-primary rounded border-0 p-2"
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;