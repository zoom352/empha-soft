import * as axios from 'axios';
import React from 'react';


const instance = axios.create({
    withCredentials: true,
    baseURL: `http://emphasoft-test-assignment.herokuapp.com/`,
    headers: {
        'API-KEY': '958e8ddf33cc24e6108f996aa964dda790ba01c2'
    }
})

export const authAPI = {
    // me() {
    //     return instance.get (`api-token-auth/`)
    // },
    login(username, password) {
        return instance.post(`api-token-auth/`, {username, password})
    }
}