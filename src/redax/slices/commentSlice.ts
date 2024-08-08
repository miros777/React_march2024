import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";
import {IComment} from "../../models/IComment";
import {commentServices} from "../../api.services/services";
import {AxiosError} from "axios";

type commentSliceType = {
    comments: IComment[],
    isLoad: boolean,
    comment: IComment | null,
    error: string
}
export const initComment: commentSliceType = {
    comments: [],
    isLoad: false,
    comment: null,
    error: ''
}
const loadComment = createAsyncThunk('sliceComment/loadComments', async (id: number, thunkAPI) => {
    try {
        let comments = await commentServices.getCommentsByPostId(id);
        return thunkAPI.fulfillWithValue(comments);
    } catch (e) {
        let error = e as AxiosError;
        return thunkAPI.rejectWithValue(error?.response?.data);
    }
});

export const commentSlice = createSlice({
    name: "commentSlice",
    initialState: initComment,
    reducers: {},
    extraReducers: (builder) => {
        return builder
            .addCase(loadComment.fulfilled, (state, action) => {
                state.comments = action.payload;
            })
            .addMatcher(isRejected(loadComment), (state, action) => {
                state.error = action.payload as string;
            })
    }
});

export const commentActions = {
    ...commentSlice.actions,
    loadComment,
}