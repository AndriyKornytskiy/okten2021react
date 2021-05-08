import axios from 'axios';

let axiosInstance = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com',
});


const getUsers = () => {
    return axiosInstance.get('/users');

};

const getPosts = () => {
    return axiosInstance.get('/posts');
};


export {
    getUsers, getPosts, axiosInstance
};