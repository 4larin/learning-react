import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface UserState {
    isLoggedIn: boolean,
    userDetails: {},
}

const initialState: UserState = {
    isLoggedIn: false,
    userDetails: {},
    
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  
  reducers: {
      login: (state, action:PayloadAction<object>)=>{
         let payload = action.payload
          return{
              ...state,
              isLoggedIn: true,
              userDetails: {...payload}
          }
    },
      logout: (state)=>{
        state.isLoggedIn = false
        state.userDetails = {}
    }
  }
})

export const { login, logout} = userSlice.actions
export default userSlice.reducer

