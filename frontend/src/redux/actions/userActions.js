import { LOGIN_USER, LOGOUT_USER } from '../constants/userConstants'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const setReduxUserState = (userCreated) => (dispatch) => {
    

    dispatch({
        type: LOGIN_USER,
        payload: userCreated
    })
}

export const logout = () => (dispatch) => {
    
    const navigate=useNavigate()

    axios.get('/api/logout')
    localStorage.removeItem("userInfo");
    sessionStorage.removeItem("userInfo");
    localStorage.removeItem("cart");
    dispatch({ type: LOGOUT_USER })

    console.log("ok")

    navigate("/login")


}