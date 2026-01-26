import configureStore from "@reduxjs/toolkit";
import authReducer from "./feature/Auth/authSlice.js"
import userReducer from "./feature/User/userSlice.js"
import customerReducer from "./feature/Customer/customerSlice.js"
import orderReducer from  "./feature/Order/orderSlice.js"
import refundReducer from "./feature/Refund/refundSlice.js"

const globalState  = configureStore({
    reducer: {
        auth : authReducer,
        user: userReducer,
        customer : customerReducer,
        order: orderReducer,
        refund: refundReducer
    }
})

export default globalState;