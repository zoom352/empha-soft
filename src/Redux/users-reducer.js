import { usersAPI } from "../api/api";

const SET_USERS = 'SET_USERS'

let initialState = {
    users: [],
    first_name: '',
    last_name: '',
    
};

let Usersreducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS: {
            return { ...state, users: action.users}
        }
            
        default:
            return state;
    }
}

export const SetUsers = (users) => {
    return {type: SET_USERS, users}
}

export const getUsersThunk = ( first_name, last_name) => {

    return (dispatch) => {
        debugger;
        usersAPI.getUser()
            .then(data => {
              dispatch(SetUsers(data.items))
          })
    }
}

export default Usersreducer