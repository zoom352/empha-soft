import { applyMiddleware, combineReducers, createStore } from "redux";
// import thunk from "redux-thunk";
import aboutReducer from "./reducer-about";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import authReducer from "./auth-reducer";
import Usersreducer from "./users-reducer";


let reducers = combineReducers({
    aboutPage: aboutReducer,
    form: formReducer,
    auth: authReducer,
    UsersPage: Usersreducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;