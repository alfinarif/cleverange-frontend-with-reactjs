import {configureStore} from "@reduxjs/toolkit";
import settingsSlice from "../stateSlice/settings/settingSlice";

export default configureStore({
    reducer:{
        settings: settingsSlice
    }
})