import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from 'reducers/favoritesSlice';
import themeReducer from 'reducers/themeSlice';

export default configureStore({
  reducer: {
    favorites: favoritesReducer,
    theme: themeReducer,
  },
});
