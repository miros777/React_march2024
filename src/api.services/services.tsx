import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {baseUrl, urls} from "../constants/urls";
import {IComment} from "../models/IComment";


const axiosInstans = axios.create({
    baseURL: baseUrl,
    headers: {}
})

const userServices = {
    getAllUsers: async () => {
        let response = await axiosInstans.get<IUser[]>(urls.users.base);
        return  response.data;
    },
    getUser: async (id:number):Promise<IUser> => {
        let response = await axiosInstans.get<IUser>(urls.users.byID(id));
        return response.data;
    }
}

const postServices = {
    getAllPosts: async () => {
        let response = await axiosInstans.get<IPost[]>(urls.posts.base);
        return response.data;
    },
    getPostByID: async (id:number) => {
        let response = await axiosInstans.get<IPost>(urls.posts.byID(id));
        return response.data;
    },
    getPostByUserID: async (id:number) => {
        let response = await axiosInstans.get<IPost[]>(urls.posts.byUserID(id));
        return response.data;
    }
}
const commentServices={
    getCommentsByPostId: async (id:number) => {
        let response = await axiosInstans.get<IComment[]>(urls.comments.byUserID(id));
        return response.data;
    }
}

export {
    postServices,
    userServices,
    commentServices,
}
