import axios, {AxiosInstance, AxiosResponse} from "axios";
import {IUser} from "../../models/IUser";
import {IPost} from "../../models/IPosts";

let axiosInstance:AxiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
});

axiosInstance.interceptors.request.use(request  => {
    request.headers.set('Content-Type', 'application/json', );
    return request;
});
type TypeUsers = {
    users: IUser[]
}
const getUsers = async ():Promise<TypeUsers> => {
    const axiosResponse = await axiosInstance.get<TypeUsers>('/users');
    return axiosResponse.data;
}

type TypePosts = {
    posts: IPost[]
}
const getUserPostsById = async (id:number):Promise<TypePosts> => {
    const axiosResponse = await axiosInstance.get<TypePosts>('/users' + '/' + id + '/posts');
    return axiosResponse.data;
}
export {
    getUsers,
    getUserPostsById
}