import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./usertypes"
import axios from 'axios'


export const fetchUsersRequest = () => {
    return{
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return{
        type: FETCH_USERS_SUCCESS,
        payload:users
    }
}

export const fetchUsersFailure = (error) => {
    return{
        type: FETCH_USERS_FAILURE,
        payload:error
    }
}


export const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            // response.data is array of users
            const users = res.data
            console.log(users)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(err => {
            //error.message
            const error = err.message
            dispatch(fetchUsersFailure(error))
        })
    }
}
