import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        value:[]
    },
    redurcers:{
        signIn(state,action){
            state.value.push(action.payload)
        },
        signUp(state,action){
            state.value = []
        }
    }
})

export const {signIn, signUp} = userSlice.actions

export default userSlice.reducer