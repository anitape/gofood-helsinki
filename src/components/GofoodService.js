import axios from 'axios'
const baseUrl = 'http://localhost:8080/favorites';

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
};

const create = newObject => {
    const request = axios.post(baseUrl+"Add", newObject);
    return request.then(response => response.data)
};

const remove = (id) => {
    axios.delete(`${baseUrl}/${id}`);
};

export default {
    getAll: getAll,
    create: create,
    remove: remove
}

