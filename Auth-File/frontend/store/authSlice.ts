import{createSlice,PayloadAction}from'@reduxjs/toolkit';
import{User } from '@/types';

interface Authstate{
    user:User |null;
}

const initialState:Authstate={
    user:null,
};

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAuthUser:(state,action:PayloadAction<User |null>)=>{
            state.user=action.payload;
        },
    },
});

export const{setAuthUser}=authSlice.actions;

export default authSlice.reducer;