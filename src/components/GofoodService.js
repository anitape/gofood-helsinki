import axios from 'axios'
const baseUrl = 'http://localhost:8080';

const getAll = () => {
    return axios.get(baseUrl + "/favorites")
};

export default { getAll }

