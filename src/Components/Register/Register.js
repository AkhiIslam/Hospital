import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')

    const auth = getAuth();

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
    }

    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 8) {
            setError('Password Must be at least 8 characters long.')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
                setUserName('')
                console.log(user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className="login-form">
            <div className="text-center">
                <h2 className="m-5 text-primary">Register: Create Account</h2>

                <form onSubmit={handleRegistration}>
                    <input onBlur={handleNameChange} className="mb-3 text-center border-2 border border-primary rounded" type="name" placeholder="Your Name" required />
                    <br />
                    <input onBlur={handleEmailChange} className="mb-3 text-center border-2 border border-primary rounded" type="email" name="" id="" placeholder="Your Email" required />
                    <br />
                    <input onBlur={handlePasswordChange} className="mb-3 text-center border-2 border border-primary rounded" type="password" name="" id="" placeholder="Your Password" required />
                    <br />
                    <div className="text-danger">{error}</div>
                    <br />
                    <input className="mb-3 btn-primary border-0 rounded p-2" type="submit" value="Submit" />


                </form>
                <p className="mb-3">Already have an account? <Link to="/home">Login</Link></p>

                <button className="btn-primary rounded border-0 p-2">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;