import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axiosClient from './Utils/axiosClient';

export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData , rejectedWithValue) => {
        try{
            const response = await axiosClient.post('/register' , userData);
            return response.data;
        }
        catch(err){
            return rejectedWithValue(err);
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async ( Credential , {rejectedWithValue}) =>{
        try{
            const response = await axiosClient.post('/login' , Credential);

            return response.data;
        }
        catch(err){
            return rejectedWithValue(err);
        }
    }
)



const authSlice = createSlice({
    name: 'auth',
    initialState: { loading: false , user: null , isAuthenticated: false , error:null},
    reducers:{},
    extraReducers: (builder) => {

    }
})