import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./slices/userSlice";
import {postReducer} from "./slices/postSlice";

const rootReducer = combineReducers({
    userReducer,
    postReducer
});

const setupStore = () => configureStore({
        reducer:rootReducer
    });

export {
    setupStore
}