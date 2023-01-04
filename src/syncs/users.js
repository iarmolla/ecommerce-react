import axios from 'axios'

async function getUsers() {
    return axios.get('https://fakestoreapi.com/users')
}

export default {
    getUsers
}