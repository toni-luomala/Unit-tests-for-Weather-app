import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from 'utils/interfaces';

type FavoritesState = {
  items: Location[];
};

const initialState: FavoritesState = {
  items: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<Location>) => {
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
