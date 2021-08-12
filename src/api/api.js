import * as axios from 'axios';
import React from 'react';


const instance = axios.create({
    // withCredentials: true,
    Credentials: 'include',

    baseURL: `http://emphasoft-test-assignment.herokuapp.com`,
    headers: {
        // 'Access-Control-Allow-Origin': 'http://emphasoft-test-assignment.herokuapp.com',
        // 'Access-Control-Allow-Credentials': true,
        'Content-Type': 'application/json',
        // 'API-KEY': '958e8ddf33cc24e6108f996aa964dda790ba01c2',
        'Authorization': '958e8ddf33cc24e6108f996aa964dda790ba01c2'
    }
})

export const usersAPI = {
    getUser( first_name, last_name) {
        return instance.get(`/api/v1/users/`, {first_name, last_name})
    }
}

export const authAPI = {
    // me() {
    //     return instance.get (`api-token-auth/`)
    // },
    login(username, password) {
        return instance.post(`/api-token-auth/`, {username, password})
    }
}