import {create} from "zustand";
import {IPost} from "../models/IPost";

type storeType = {
    post: IPost[],
    getAllPosts: () => Promise<IPost[]>
}
export const useStorePosts = create<storeType>((set) => ({
    post: [],
    getAllPosts: () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                set((state) => ({post: data.data}));
            })
    }
}));

