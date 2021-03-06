import axios from "axios";
// import setUser from '../../App'
import jwtDecode from 'jwt-decode';


const loginURL = "http://localhost:8000/api/auth/login/"
const registerURL = "http://localhost:8000/api/auth/register/"
const userURL = "http://localhost:8000/api/auth/user/"


// LOGIN
export const loginUser = async (user, setUser) => {
    try {
        const response = await axios.post(loginURL, user)
        localStorage.setItem("token", response.data.access)
        const userToken = jwtDecode(response.data.access)
        getUserDetails(userToken.user_id, setUser)
        // window.location = "/"
    } catch(err) {
        console.log("🚀 ~ file: API User.jsx ~ line 17 ~ loginUser ~ err", err)
    }
}

// LOGOUT
export const logoutUser = (setUser) => {
    localStorage.removeItem('token');
    const location = window.location.pathname;
    setUser(null)
    if (
        location === '/home' 
        || location === '/search' 
        || location === '/account'
        || location === '/not-found' 
        )
    {
      window.location = "/"
    }
}

// REGISTER USER
export const registerUser = async (user, setUser) => {
    try {
        await axios.post(registerURL, user)
        loginUser({
        "username": user.username,
        "password": user.password
        }, 
        setUser
        )
        window.location = "/"
    } catch(err) {
        console.log("🚀 ~ file: API User.jsx ~ line 30 ~ registerUser ~ err", err)
    }
}

// GET USER
const getUserDetails = async (userId, setUser) => {
    const authToken = localStorage.getItem('token');
    try{ 
        const response = await axios.get(`${userURL}${userId}/`,
        {headers: {Authorization: `Bearer ${authToken}`}})
        const user = response.data
        setUser(user)
    } catch(err) {
        console.log("🚀 ~ file: API User.jsx ~ line 45 ~ getUserDetails ~ err", err)
    }
}