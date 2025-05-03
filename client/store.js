import { configureStore } from '@reduxjs/toolkit'
import  authSlice  from './slices/userSlice'

export default configureStore({
  reducer: {
    authSlice: authSlice
  },
})