import { configureStore } from "@reduxjs/toolkit";
import mailReducer from '../features/mailSlice'
import UserReducer from '../features/userSlice'

const store = configureStore({
    reducer:{
        mail:mailReducer,
        user:UserReducer,
    }
})

export default store