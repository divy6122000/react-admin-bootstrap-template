import { configureStore } from "@reduxjs/toolkit";
import userReducer from './users/userSlice'
import userAddReducer from './users/userAddSlice'
import singleUserReducer from './users/userSingleSlice'
const store = configureStore({
    reducer: {
        // Users 
        user: userReducer,
        userAdd: userAddReducer,
        singleUser: singleUserReducer
    }
})

export default store