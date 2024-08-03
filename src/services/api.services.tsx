import axios from "axios";
import {IUserModel} from "../models/IUserModel";
import {UserResponse} from "../models/UserResponse";
import {TokenObtainPairModel} from "../models/TokenObtainPairModel";
import {TokenRefresh} from "../models/TokenRefresh";
import {retriveLocalStorageData} from "../helpers/healpers";
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";
import {CarPaginatedModel} from "../models/CarPaginatedModel";

const axiosInstans = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2'
});

axiosInstans.interceptors.request.use(requestObject => {
    if(requestObject.url !== '/auth' && localStorage.getItem('tokenPair')){
        requestObject.headers.set('Authorization', 'Bearer ' + retriveLocalStorageData<TokenRefresh>('tokenPair').access);
    }
    return requestObject
})
const userService  = {
    saveUser: async (data:IUserModel):Promise<boolean> => {
        let res = await axiosInstans.post<UserResponse>('/users', data);
        // console.log(res);
        // console.log(res.status === 201);
        return !!res.data.id || false
    }
}

const authUser  = {
    authenticate: async (data:TokenObtainPairModel):Promise<void> => {
        let res = await axiosInstans.post<TokenRefresh>('/auth', data);
        localStorage.setItem('tokenPair', JSON.stringify(res.data));
    },
    refresh: async ():Promise<void> => {
        const refreshToken = retriveLocalStorageData<TokenRefresh>('TokenPair').refresh;
        let res = await axiosInstans.post<UserResponse>('/auth/refresh', {refresh: refreshToken});
        localStorage.setItem('tokenPair', JSON.stringify(res) )
    }
}

const carsUser = {
    getCars: async():Promise<CarPaginatedModel> => {
        let res = await axiosInstans.get<CarPaginatedModel>('/cars');
        return res.data;
    }
}

export {
    userService,
    authUser,
    carsUser
}
