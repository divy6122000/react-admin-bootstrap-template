import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const submitUserData = createAsyncThunk('userAdd/submitUserData', async (formData) => {
    try {
        const response = await axios.post(`https://reqres.in/api/users`, {
            data: formData
        })
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

export const userAddSlice = createSlice({
    name: 'userAdd',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(submitUserData.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(submitUserData.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.data = action.payload
        })
        builder.addCase(submitUserData.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const { } = userAddSlice.actions
export default userAddSlice.reducer