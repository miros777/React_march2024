import axios from "axios";
import {IUserModel} from "../models/IUserModel";
import {UserResponse} from "../models/UserResponse";
import {TokenObtainPairModel} from "../models/TokenObtainPairModel";
import {TokenRefresh} from "../models/TokenRefresh";

const axiosInstans = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v2'
});

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

export {
    userService,
    authUser
}
