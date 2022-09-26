import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'




 const UserReducer = createSlice({
    name: "User",
    initialState: {
        currentUser : null as any,
        loggedIn : false
    },
 reducers:{ userLoggedIn : (state, {payload}) => {
   state.currentUser = payload
   console.log(payload)
   state.loggedIn = true
  },}
})

export const{userLoggedIn}  =UserReducer.actions

export default UserReducer
