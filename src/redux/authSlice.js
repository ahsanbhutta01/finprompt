import {createSlice} from '@reduxjs/toolkit'

const initialState = {
   showLogin: false
}

export const authSlice = createSlice({
   name:'auth',
   initialState,
   reducers:{
      setShowLogin : (state, action) =>{
         state.showLogin = action.payload
      }
   }
})


export const {setShowLogin} = authSlice.actions
export default authSlice.reducer