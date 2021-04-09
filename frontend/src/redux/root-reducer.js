/*

import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "User",
  initialState: {
    user: {
      isLoggedIn: false,
      profile: {},
    },
    skurt: {
      keps: "röd med ränder",
    },
  },
  reducers: {
    setUserLoggedIn: (state) => {
      console.log(state.user.isLoggedIn)
      state.user.isLoggedIn = !state.user.isLoggedIn
      console.log(state.user.isLoggedIn)
    },
    setUserProfile: (state, action) => {
      console.log(state.user.profile)
      state.user.profile = action.payload
      console.log(state.user.profile)
      console.log(state.skurt.keps)
    },
  },
})

export const { setUserLoggedIn, setUserProfile } = userSlice.actions

export default userSlice
*/

import { combineReducers } from "redux"

import userReducer from "./user/user.reducer"

export default combineReducers({
  user: userReducer,
})
