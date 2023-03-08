import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const singleUserData = createAsyncThunk('singleUser/singleUserData', async (id) => {
    try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`)
        return response.data.data
    } catch (error) {
        return error.message
    }
})

const initialState = {
    data: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const userSingleSlice = createSlice({
    name: 'singleUser',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(singleUserData.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(singleUserData.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.data = action.payload
        })
        builder.addCase(singleUserData.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

// export const { } = userSingleSlice.actions
export default userSingleSlice.reducer