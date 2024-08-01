import axios from "axios";
import {IUserModel} from "../models/IUserModel";
import {UserResponse} from "../models/UserResponse";
import {TokenObtainPairModel} from "../models/TokenObtainPairModel";
import {TokenRefresh} from "../models/TokenRefresh";
import {retriveLocalStorageData} from "../helpers/healpers";
import {ICarWithAuthModel} from "../models/ICarWithAuthModel";

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
        console.log(res);

        return !!res.data.id || false
    }

}

const authUser  = {
    authenticate: async (data:TokenObtainPairModel):Promise<void> => {
        let res = await axiosInstans.post<TokenRefresh>('/auth', data);
        console.log(res);
        console.log(res.data.access);
        console.log(res.data.refresh);
    }

}

const carsUser = {
    getCars: async():Promise<any> => {
        let res = await axiosInstans.get<UserResponse>('/cars');
        let data = res.data;
        console.log(data);
        return data;

    }
}

export {
    userService,
    authUser,
    carsUser

}
