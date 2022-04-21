import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/"
const RECIPES_URL = "recipes/"

const client = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

async function get(params) {
    try {
        let response = await client.get(RECIPES_URL, {
            headers: {
                'Content-Type': 'application/json'
            }, params: params
        });
    
        return response.data;
    } catch(error) {
        console.log(error);
    }    
}

async function getById(id) {
    try {
        let response = await client.get(`${RECIPES_URL}${id}/`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        return response.data;
    } catch(error) {
        console.log(error);
    }
}

async function create(data) {
    try {
        let response = await client.post(RECIPES_URL, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        return response.data;
    } catch(error) {
        console.log(error);
    }    
}

async function update(id, data) {
    try {
        let response = await client.patch(`${RECIPES_URL}${id}/`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        return response.data;
    } catch(error) {
        console.log(error);
    }
}

async function remove(id) {
    try {
        let response = await client.delete(`${RECIPES_URL}${id}/`)
    
        return response.data;
    } catch(error) {
        console.log(error);
    }
}

export {
    get, 
    getById, 
    create, 
    update, 
    remove
}