import axios from 'axios'

async function getAllJewelery() {
    return axios.get(`https://fakestoreapi.com/products/category/jewelery`)
}

async function getProducts() {
    return axios.get(`https://fakestoreapi.com/products`)
}

async function getMen() {
    return axios.get(`https://fakestoreapi.com/products/category/men's%20clothing`)
}

async function getWomen() {
    return axios.get(`https://fakestoreapi.com/products/category/women's clothing`)
}

async function getTechnology() {
    return axios.get(`https://fakestoreapi.com/products/category/electronics`)
}

export default {
    getAllJewelery,
    getProducts,
    getMen,
    getWomen,
    getTechnology
}