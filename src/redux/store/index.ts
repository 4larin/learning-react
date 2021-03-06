import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../slices/appSlice";
import userSlice from "../slices/userSlice";


const store = configureStore({
  reducer: {
      app: appSlice,
      user: userSlice,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store