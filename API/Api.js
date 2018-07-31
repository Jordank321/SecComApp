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

export async function getConversastions(sessionCookie){
    if (sessionCookie.startsWith('set-cookie=')) sessionCookie = sessionCookie.substring(11);
    const response = await api.get('/Conversation/All', {}, {headers: {'Cookie': sessionCookie}});
    if (response.ok)
    {        
        return response.data;
    };
    return null
};