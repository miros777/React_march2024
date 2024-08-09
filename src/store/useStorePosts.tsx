import {create} from "zustand";
import {IPost} from "../models/IPost";

type storeType = {
    post: IPost[]
}
export const useStorePosts = create<storeType>((set)=> ({
    post: set((state) => {post: state.post}
}));

