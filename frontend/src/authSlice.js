import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosClient from './Utils/axiosClient';

export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, { rejectWithValue }) => {
        try {
            const response = await axiosClient.post('user/register', userData);
            return response.data;
        }
        catch (err) {
            return rejectWithValue(err);
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/login',
    async (Credential, { rejectWithValue }) => {
        try {
            console.log('credentials: ', Credential);

            const response = await axiosClient.post('/user/login', Credential);

            return response.data;
        }
        catch (err) {
            return rejectWithValue(err);
        }
    }
)

export const checkAuth = createAsyncThunk(
    'auth/check',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosClient.get('/user/check');
            console.log(res.data);

            return response.data;
        }
        catch (err) {
            return rejectWithValue(err);

        }
    }
)



const authSlice = createSlice({
    name: 'auth',
    initialState: { loading: false, user: null, isAuthenticated: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // registerUser Cases
            .addCase(registerUser.pending, (state) => {
                state.loading = true
                state.error = null
                state.isAuthenticated = false
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.isAuthenticated = !!action.payload
                state.error = null
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false
                state.error = action?.payload?.message || 'something went wrong'
                state.isAuthenticated = false
                state.user = null
            })

            // loginUser Cases
            .addCase(loginUser.pending, (state) => {
                state.loading = true,
                    state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false,
                    state.error = null,
                    state.user = action.payload
                state.isAuthenticated = !!action.payload
                state.error = null
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
                state.isAuthenticated = false
                state.user = null
            })

            // checkAuth Cases
            .addCase(checkAuth.pending, (state) => {
                state.loading = true
                state.error = null
                state.isAuthenticated = false
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.loading = false
                state.user = !!action.payload
                state.isAuthenticated = true
                state.error = null
            })
            .addCase(checkAuth.rejected, (state, action) => {
                state.loading = false
                state.error = action?.payload?.message || 'something went wrong'
                state.user = null
                state.isAuthenticated = false
            })
    }
})


export default authSlice.reducer;