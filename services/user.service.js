import { fetchWrapper } from '../helpers/fetch-wrapper';

export const userService = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

const baseUrl = `${process.env.NEXT_API}/api/users`;

function getAll() {
    return fetchWrapper.get(baseUrl);
}

function getById(id) {
    return fetchWrapper.get(`${process.env.NEXT_API}/${id}`);
}

function create(params) {
    return fetchWrapper.post(`${baseUrl}`, params);
}

function update(id, params) {
    return fetchWrapper.put(`${process.env.NEXT_API}/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(id) {
    return fetchWrapper.delete(`${process.env.NEXT_API}/${id}`);
}
