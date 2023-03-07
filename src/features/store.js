import { configureStore } from "@reduxjs/toolkit";
import userReducer from './users/userSlice'
import userAddReducer from './users/userAddSlice'
const store = configureStore({
    reducer: {
        user: userReducer,
        userAdd: userAddReducer
    }
})

export default store