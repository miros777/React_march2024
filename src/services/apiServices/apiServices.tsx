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
type IUsers = {
    users: IUser[]
}

type IPosts = {
    posts: IPost[]
}
const getUsers = async ():Promise<IUsers> => {
    const axiosResponse = await axiosInstance.get<IUsers>('/users');
    return axiosResponse.data;
}
const getUserPostsById = async (id:number):Promise<IPosts> => {
    const axiosResponse = await axiosInstance.get<IPosts>('/users' + '/' + id + '/posts');
    return axiosResponse.data;
}
export {
    getUsers,
    getUserPostsById
}