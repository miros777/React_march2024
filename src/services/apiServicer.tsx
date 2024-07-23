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
const getAllPosts = async ():Promise<IPost[]> => {
   return await axiosInstance.get<IPost[]>('/posts').then((response:AxiosResponse<IPost[]>) => response.data);
}

const getUserById = async (id: string | undefined):Promise<IUser> => {
    return await axiosInstance.get<IUser>('/users/' + id).then((response:AxiosResponse<IUser>) => response.data);
}

const getAllUsers = async ():Promise<IUser[]> => {
   return await axiosInstance.get<IUser[]>('/users/').then((response:AxiosResponse<IUser[]>) => response.data);
}
const getPostsByUserId = async (id: string):Promise<IPost[]> => {
    return await axiosInstance.get<IPost[]>('/users/' + id + '/posts').then((response:AxiosResponse<IPost[]>) => response.data);
}

const getComments = async ():Promise<IComment[]> => {
    return await axiosInstance.get<IComment[]>('/comments').then((response:AxiosResponse<IComment[]>) => response.data);
}
const getCommentsByPostId = async (id: string | undefined):Promise<IComment[]> => {
    return await axiosInstance.get<IComment[]>('posts/' + id + '/comments').then((response:AxiosResponse<IComment[]>) => response.data);
}

export {
    getAllPosts,
    getAllUsers,
    getComments,
    getPostsByUserId,
    getUserById,
    getCommentsByPostId
};