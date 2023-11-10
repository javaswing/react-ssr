import { combineReducers } from "@reduxjs/toolkit";
import listReducer from './list'



const rootReducer = combineReducers({
    list: listReducer
})

export default rootReducer;