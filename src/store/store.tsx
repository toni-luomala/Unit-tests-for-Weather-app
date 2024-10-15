import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from 'reducers/favoritesSlice'
import settingsReducer from 'reducers/settingsSlice'

export default configureStore({
  reducer: {
    favorites: favoritesReducer,
    settings: settingsReducer
  }
})
