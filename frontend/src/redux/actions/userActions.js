import { LOGIN_USER, LOGOUT_USER } from '../constants/userConstants'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const navigate=useNavigate()
export const setReduxUserState = (userCreated) => (dispatch) => {
    dispatch({
        type: LOGIN_USER,
        payload: userCreated
    })
}

export const logout = () => (dispatch) => {
    
    navigate("/login");
    axios.get('/api/logout')
    localStorage.removeItem("userInfo");
    sessionStorage.removeItem("userInfo");
    localStorage.removeItem("cart");
    dispatch({ type: LOGOUT_USER })
}