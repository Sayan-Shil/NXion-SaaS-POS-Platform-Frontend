import configureStore from "@reduxjs/toolkit";
import authReducer from "./feature/Auth/authSlice.js"
import userReducer from "./feature/User/userSlice.js"

const globalState  = configureStore({
    reducer: {
        auth : authReducer,
        user: userReducer,

    }
})

export default globalState;