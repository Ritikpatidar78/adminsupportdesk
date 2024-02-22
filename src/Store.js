import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./features/auth/UserSlice"
import profilereducer from "./features/profiles/ProfileSlice"



const store = configureStore({
    reducer: {
        auth : authreducer,
        profile: profilereducer
    }
})

export default store