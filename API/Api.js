import {create} from 'apisauce'

const api = create({baseURL: 'http://192.168.0.17:7777'})

export async function login(username,password){
    const response = await api.post('/Account/Login', {
        username: username,
        password: password
    });
    if (response.ok && response.headers && response.headers['set-cookie']) {
        return JSON.parse(JSON.stringify(response.headers['set-cookie'])).pop();
    }
    else return null;
}