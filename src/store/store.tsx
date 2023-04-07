import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from 'reducers/favoritesSlice';

export default configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});
