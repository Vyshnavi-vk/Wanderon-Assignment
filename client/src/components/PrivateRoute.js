import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const authCheck = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/user/auth-check', { withCredentials: true })
                setIsAuthenticated(data.authenticated)
            } catch (error) {
                setIsAuthenticated(false)
                navigate('/')
            }
        }

        authCheck()
    }, [])



    return isAuthenticated ? children : null
}

export default PrivateRoute
