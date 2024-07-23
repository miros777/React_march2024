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
const getPosts = async ():Promise<IPost[]> => {
   return await axiosInstance.get<IPost[]>('/posts').then((response:AxiosResponse<IPost[]>) => response.data);
}

const getOnePostById = async (id: string):Promise<IPost> => {
   return await axiosInstance.get<IPost>('/posts/' + id).then((response:AxiosResponse<IPost>) => response.data);
}

const getUserById = async (id: string | undefined):Promise<IUser> => {
    return await axiosInstance.get<IUser>('/users/' + id).then((response:AxiosResponse<IUser>) => response.data);
}

const getUsers = async ():Promise<IUser[]> => {
   return await axiosInstance.get<IUser[]>('/users/').then((response:AxiosResponse<IUser[]>) => response.data);
}

const getComments = async ():Promise<IComment[]> => {
    return await axiosInstance.get<IComment[]>('/comments').then((response:AxiosResponse<IComment[]>) => response.data);
}

export {
    getPosts,
    getUsers,
    getComments,
    getOnePostById,
    getUserById
};