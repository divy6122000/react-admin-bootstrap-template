import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUserData = createAsyncThunk('userUpdate/updateUserData', async (formData) => {
    try {
        const response = await axios.patch(`https://reqres.in/api/users`, {
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

export const userUpdateSlice = createSlice({
    name: 'userUpdate',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(updateUserData.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(updateUserData.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.data = action.payload
        })
        builder.addCase(updateUserData.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export const { } = userUpdateSlice.actions
export default userUpdateSlice.reducer