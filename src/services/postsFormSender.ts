import axios, {AxiosInstance, AxiosResponse} from "axios";

let axiosInstance:AxiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});

axiosInstance.interceptors.request.use(request   => {
    request.headers.set('Content-type: application/json; charset=UTF-8');
    return request
});

const sendPost = async (data:string) => {
    await axiosInstance.post('/posts', data).then((responce:AxiosResponse<any, any>) => console.log(responce.data));
}

// const getUserId = async (id:number) => {
//     await axiosInstance.get('/users/' + id.toString());
// }

export {
    sendPost
}