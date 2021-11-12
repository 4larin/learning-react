import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface AppState {
    users: Array<string>,
    theme: string
    nav: Object
}

const initialState: AppState = {
    users: [],
    theme: 'light',
    nav: {},
    
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  
  reducers: {
    toggleTheme: state =>{
      state.theme = state.theme==="light"? 'dark':'light'
    },
    addUser: (state, action:PayloadAction<string>)=>{
        state.users = [
            ...state.users,
            action.payload    
        ]
    }
  }
})

export const { toggleTheme, addUser} = appSlice.actions

export default appSlice.reducer