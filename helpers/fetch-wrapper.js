import Cookies from "js-cookie";
import { userService } from "../services/user.service";
import getConfig from 'next/config';
import { Await } from "react-router-dom";

const { publicRuntimeConfig } = getConfig();


const token = Cookies.get('token');


export const fetchWrapper = {
    get,
    post,
    patch,
    put,
    delete: _delete
};

function get(url) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()

    };
    return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}` },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function patch(url,getToken) {
    const requestOptions = {
        method: 'PATCH',
        headers: authHeader()
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function put(url, body) {
    const requestOptions = {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
         },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {
    const requestOptions = {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}` }
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function authHeader() {
    return { Authorization: `Bearer ${token}` };
}

// helper functions

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        
        if (!response.ok) {
            if ([401, 403].includes(response.status) && userService.userValue) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                userService.logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }


        return data;
    });
}