import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'


const Home = () => {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        toast.success(location?.state?.toastMessage)
    }, [location])

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/user/get-users', { withCredentials: true })
                setUsers(data.users)
            } catch (error) {
                console.log(error)
            }
        }

        getAllUsers()
    }, [])


    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:5000/api/user/logout', {}, { withCredentials: true })
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='home'>
            <div className='navbar'>
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Contact</h1>
                <button className='logout' onClick={handleLogout}>Logout</button>
            </div>

            <div className='users-container'>
                {users.map((user, indx) => {
                    return <div className='user-card' key={indx}>
                        <div className='user-details'>
                            <div className="user-icon">
                                <FontAwesomeIcon icon={faUser} size="4x" />
                            </div>
                            <p className='username'>{user.username}</p>
                            <p className='email'>{user.email}</p>
                        </div>
                    </div>
                })}
            </div>

            <ToastContainer />
        </div>
    )
}

export default Home
