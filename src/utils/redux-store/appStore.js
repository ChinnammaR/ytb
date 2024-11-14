import { configureStore } from "@reduxjs/toolkit";

import appReducer from "./appSlice";
import searchReudcer from "./searchSlice";
import chatReducer from "./chatSlice";



const appStore=configureStore({

    reducer:{
        app:appReducer,
        search:searchReudcer,
        chat:chatReducer,
    }
});

export default appStore;