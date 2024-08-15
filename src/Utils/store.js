import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import songsReducer from "./songsSlice";
import userReducer from "./userSlice";
import searchReducer from "./searchSuggestionSlice";

const appStore = configureStore({
    reducer: {
        app: appReducer,
        songs: songsReducer,
        user : userReducer,
        search : searchReducer
    }
})

export default appStore;