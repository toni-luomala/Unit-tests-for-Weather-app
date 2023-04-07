import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Favorite from 'utils/interfaces/FavoriteInterface';

type FavoritesState = {
  items: Favorite[];
};

const initialState: FavoritesState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<Favorite>) => {
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(
        (item) => item.name === action.payload
      );
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { add, remove } = favoritesSlice.actions;

export default favoritesSlice.reducer;
