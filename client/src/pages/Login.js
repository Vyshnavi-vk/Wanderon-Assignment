import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import { useNavigate, useLocation } from 'react-router-dom'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        toast.success(location?.state?.toastMessage)
    }, [location])


    const handleLogin = async () => {
        try {
            await axios.post('http://localhost:5000/api/user/login',
                {
                    email, password
                }, { withCredentials: true }
            )

            navigate('/home', { state: { toastMessage: 'User loggedin successfully' } })

        } catch (error) {
            if (error.response) {
                if (error.response.data.errors) {
                    console.log(error.response.data.errors[0].msg);
                    toast.error(error.response.data.errors[0].msg);
                } else if (error.response.data.msg) {
                    console.log(error.response.data.msg);
                    toast.error(error.response.data.msg);
                }
            }
        }
    }

    return (
        <div className='container'>
            <div className='register'>
                <div className='inputs'
                    style={{ marginTop: '3rem' }}
                >
                    <div className='heading'>
                        <h2>Please Login!!</h2>
                    </div>
                    <input
                        type="email"
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='btn'>
                    <button className='login' onClick={handleLogin}
                        style={{ backgroundColor: 'tomato' }}
                    >Login</button>
                    <span>Don't have account
                        <a href='/register'>Register Here</a>
                    </span>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login
