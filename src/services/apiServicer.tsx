import axios, {AxiosInstance, AxiosResponse} from "axios";
import {IPost} from "../models/IPost";
import {IUser} from "../models/IUser";
import {IComment} from "../models/IComment";

let axiosInstance:AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

axiosInstance.interceptors.request.use( request => {
    request.headers.set('Content-type: application/json; charset=UTF-8');
    return request
})
const getPosts = async () => {
   return await axiosInstance.get('/posts').then((response:AxiosResponse<IPost[]>) => response.data);
}

const getUsers = async () => {
   return await axiosInstance.get('/users/').then((response:AxiosResponse<IUser[]>) => response.data);
}

const getComments = async () => {
    return await axiosInstance.get('/comments').then((response:AxiosResponse<IComment[]>) => response.data);
}

export {
    getPosts,
    getUsers,
    getComments
};