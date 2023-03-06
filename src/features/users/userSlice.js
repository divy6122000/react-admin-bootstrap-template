import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchUserData = createAsyncThunk('user/fetchUserData', async () => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        return response.data
    } catch (error) {
        return error.message
    }
})

const initialState = {
    data: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(fetchUserData.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(fetchUserData.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.data = action.payload
        })
        builder.addCase(fetchUserData.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const { } = userSlice.actions
export default userSlice.reducer