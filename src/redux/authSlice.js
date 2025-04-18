import {createSlice} from '@reduxjs/toolkit'


const initialState = {
   showLogin: false,
   isAuthenticated:false,
   user:null
}

export const authSlice = createSlice({
   name:'auth',
   initialState,
   reducers:{
      setShowLogin : (state, action) =>{
         state.showLogin = action.payload
      },
      setUser:(state,action)=>{
         state.user = action.payload;
         state.isAuthenticated = true;
         state.showLogin = false;
      },
      logoutUser: (state) => {
         state.user = null;
         state.isAuthenticated = false;
      }
   }
})


export const {setShowLogin,setUser, logoutUser} = authSlice.actions
export default authSlice.reducer