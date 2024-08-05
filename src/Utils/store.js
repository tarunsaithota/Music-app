import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import songsReducer from "./songsSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
    reducer: {
        app: appReducer,
        songs: songsReducer,
        user : userReducer,
    }
})

export default appStore;