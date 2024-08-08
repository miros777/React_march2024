import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";
import {IPost} from "../../models/IPost";
import {postServices} from "../../api.services/services";
import {AxiosError} from "axios";

type postSliceType = {
    posts: IPost[],
    post: IPost | null,
    error: string,
    isLoaded: boolean
}
const initState: postSliceType = {
    posts: [],
    post: null,
    error: '',
    isLoaded: false
}
const loadPosts = createAsyncThunk('postSlice\loadPosts', async (_, thinkAPI) => {
    try{
        let posts = await postServices.getAllPosts();
        return thinkAPI.fulfillWithValue(posts);
    }catch (e){
        let error = e as AxiosError;
        return thinkAPI.rejectWithValue(error?.response?.data);
    }
});

const loadPost = createAsyncThunk('postSlice/loadPostByID', async (id:number, thinkAPI) => {
    try{
        let post = await postServices.getPostByID(id);
        return thinkAPI.fulfillWithValue(post);
    }catch (e){
        let error = e as AxiosError;
        return thinkAPI.rejectWithValue(error?.response?.data);
    }
});

const loadPostByUserID = createAsyncThunk('postSlice/loadPostByUserID', async (id:number, thinkAPI) => {
    try{
        let post = await postServices.getPostByUserID(id)
        return thinkAPI.fulfillWithValue(post);
    }catch (e){
        let error = e as AxiosError;
        return thinkAPI.rejectWithValue(error?.response?.data);
    }
});

export const postSlice = createSlice({
    name: "postSlice",
    initialState: initState,
    reducers: {},
    extraReducers: (builder) => {
        return builder
            .addCase(loadPosts.fulfilled, ((state, action) => {
                state.posts = action.payload;
                state.isLoaded = true;
            }))
            .addCase(loadPost.fulfilled, (state, action) => {
                state.post = action.payload;
                state.isLoaded = true;
            })
            .addCase(loadPostByUserID.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoaded = true;
            })
            .addMatcher(isRejected(loadPosts, loadPost, loadPostByUserID), (state, action) => {
                state.error = action.payload as string;
            })

    }

});
export const postActions = {
    ...postSlice.actions,
    loadPosts,
    loadPost,
    loadPostByUserID
}