import { authAPI } from "../api/api";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

let initialState = {
    username: '',
    password: ''
    // isauth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthData = (username, password) => (
    {type: SET_AUTH_DATA, payload: {username, password}}
)


export const loginThunk = () => (dispatch) => {
    return authAPI.login('', '')
        .then(response => {
            if (response.data) {
                let { username, password } = response.data.data;
                dispatch(setAuthData(username, password))
           }
       })
}


export default authReducer;

// export const loginThunk = (email, password) => async (dispatch) => {
//     let responce = await 
// }