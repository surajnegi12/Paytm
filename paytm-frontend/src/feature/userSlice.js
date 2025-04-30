import { createSlice } from "@reduxjs/toolkit";
const initialState={
    userDetails:{},
    token:null
}
export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setLoggedInCredentials:(state,action)=>{
            state.userDetails=action.payload.userDetails;
            state.token=action.payload.token;
        },
        logout:(state,action)=>{
            state.userDetails={};
            state.token=null;
        }
    }
});
export const{setLoggedInCredentials,logout}=userSlice.actions;
export default userSlice.reducer;