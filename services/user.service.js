import Cookies from 'js-cookie';
import { fetchWrapper } from '../helpers/fetch-wrapper';

export const userService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

const baseUrl = `${process.env.NEXT_API}/api/users`;
const token = Cookies.get('token');

function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getById(id) {
    return fetchWrapper.patch(`${baseUrl}/${id}`,token);
}

function create(params) {
    return fetchWrapper.post(`${baseUrl}`, params);
}

function update(id, params) {
    return fetchWrapper.put(`${baseUrl}/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetchWrapper.delete(`${baseUrl}/${id}`);
}
