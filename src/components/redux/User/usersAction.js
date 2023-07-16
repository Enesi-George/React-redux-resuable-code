import axios from 'axios';
import { FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS, FETCH_USERS_REQUEST } from "./usersTypes";

export const fetchUserRequest =()=> {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload : users
    }
}

export const fetchUserFailure =error=> {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

//Creating action creator function for an async api call
export const fetchUsers =()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest())
        axios.get(' https://api.github.com/users')
        .then(response =>{
            const users = response.data
            dispatch({
                type: FETCH_USERS_SUCCESS,
                payload : users
            })
        })
        .catch(error=>{
            const errorMsg = error.message
            dispatch(fetchUserFailure(errorMsg))
        })
    }
}
