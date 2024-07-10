import axios, {AxiosInstance, AxiosResponse} from "axios";

let axiosInstance:AxiosInstance = axios.create({
    baseURL: 'https://dummyjson.com'
});

axiosInstance.interceptors.request.use(request  => {
    request.headers.set('Content-Type', 'application/json', );
    return request;
});
const getUsers = async () => {
    return await axiosInstance.get('/users').then((response:AxiosResponse<any>) => response.data);
}
const getUserPostsById = async (id:number) => {
    return await axiosInstance.get('/users' + '/' + id + '/posts').then((response:AxiosResponse<any>) => response.data);
}
export {
    getUsers,
    getUserPostsById
}