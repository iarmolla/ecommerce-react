import axios from 'axios'

async function getUser(id) {
    const request = axios.get(`https://fakestoreapi.com/users/${id}`)
    return request
}

export default getUser