import {createAsyncThunk, createSlice, isRejected} from "@reduxjs/toolkit";
import {userServices} from "../../api.services/services";
import {AxiosError} from "axios";
import {IUser} from "../../models/IUser";

type UseSliceType = {
    users: IUser[],
    isLoaded: boolean,
    error: string,
    user: IUser | null
}

const initialState: UseSliceType = {
    users: [],
    isLoaded: false,
    error: '',
    user: null
}
const loadUsers = createAsyncThunk('userSlice\loadUsers', async (_, thinkAPI) => {
    try{
        let users = await userServices.getAllUsers();
        return thinkAPI.fulfillWithValue(users);
    }catch (e){
        let error = e as AxiosError;
        return thinkAPI.rejectWithValue(error?.response?.data);
    }

});

const loadUser = createAsyncThunk('userSlice\loadUser', async (id:number, thinkAPI) => {
    try{
        let user = await userServices.getUser(id);
        return thinkAPI.fulfillWithValue(user);
    }catch (e){
        let error = e as AxiosError;
        return thinkAPI.rejectWithValue(error?.response?.data);
    }

});
export const userSlice = createSlice({
    name: "userSlice",
    initialState: initialState,
    reducers: {
        // fillUser: (state, action) => {
        //     state.user = action.payload;
        // },
        // refillUsers: (state, action) => {
        //     state.users = action.payload;
        // }
    },
    extraReducers: (builder) => {
        return builder
            .addCase(loadUsers.fulfilled, ((state, action) => {
                state.users = action.payload;
                state.isLoaded = true;
            }))
            .addCase(loadUser.fulfilled, ((state, action) => {
                state.user = action.payload;
                state.isLoaded = true;
            }))
            // .addCase(loadUsers.rejected, (state, action) => {
            //     state.error = action.payload as string;
            // })
            .addMatcher(isRejected(loadUsers, loadUser), (state, action) => {
                state.error = action.payload as string;
            })

    }

})

export const userActions = {
    ...userSlice.actions,
    loadUser,
    loadUsers
}