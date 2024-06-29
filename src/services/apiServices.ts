
// let baseUrl:string = 'https://dummyjson.com';
// const getUsers = async () => {
//     return await fetch(baseUrl +'/users')
//         .then(value => value.json())
// }
//
// const getPostsFormUser = async (id:number) => {
//     return await fetch(baseUrl +'/users' + '/' + id + '/posts')
//         .then(posts => posts.json())
// }
// export {
//     getUsers,
//     getPostsFormUser
// }

import axios from 'axios'

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
});
axiosInstance.interceptors.request.use(request => {
    request.headers.set('Content-Type', 'application/json',);
    return request;
})
const getUsers = async () => {
    return await axiosInstance.get('/users').then((response) => response.data);
}
const getPostsFormUser = async (id:number) => {
    return await axiosInstance.get( '/users' + '/' + id + '/posts').then(response => response.data);
}
export {
    getUsers,
    getPostsFormUser
}