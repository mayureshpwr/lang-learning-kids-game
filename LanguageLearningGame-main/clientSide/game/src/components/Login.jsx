import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import './Login.css';
import { setGlobalState } from './Globalvariable';
import { store } from '../App';
import hello from './home/image/hello.png';


function Login() {
    const initialUser = {
        email: '',
        password: '',
        score: 0,
    };

    // Use 'logEmail' in some way to avoid ESLint warning
    const [logEmail, setLogEmail] = useContext(store);
    console.log(logEmail); // Using 'logEmail' here

    const [user, setUser] = useState(initialUser);
    const [passwordError, setPasswordError] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        setPasswordError(false); // Reset password error when the user types
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/create', user);
            if (response.data.msg === 'right') {
                setGlobalState('email', response.data.email);
                setGlobalState('score', response.data.score);
                setLogEmail(user.email);
                navigate('/home');
            } else {
                // Set password error if login is not successful
                setPasswordError(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        
        <div className="Login-page">
            
            <div className="Login">
                <div className="login-heading">
                    <h2>Welcome To The Language Learning Game</h2>
                </div>
                <img
    src={hello}
    alt='hello'
    width='70%'
    draggable='false'
    style={{ marginBottom: '10px', marginTop: '-5px' }} 
/>
                <div>
                    <div className="log-sym">
                        <LoginIcon />
                    </div>

                    <div className="log-details">
                        <form onSubmit={handleSubmit} method="post">
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                placeholder="Enter Email"
                            />
                            <br />
                            <input
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                placeholder="Password"
                                style={{ borderColor: passwordError ? 'red' : '' }}
                            />
                            <br />

                            <button className="log-button" type="submit">
                                Log In
                            </button>
                            {passwordError ? <h2 style={{ color: 'red' }}>incorrect password</h2> : ""}
                        </form>
                        <footer
        style={{
          textAlign: "center",
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "black",
          fontSize: "17px",
        }}
      >
         © 2024 Mayuresh Pawar. All rights reserved.
      </footer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
