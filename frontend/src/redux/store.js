/*
import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"

const store = configureStore({
  reducer: userReducer,
})

export default store

*/

import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"

import rootReducer from "./user/user.reducer.js"

const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
