import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SettingsState = {
  darkTheme: boolean;
  tempUnit: string;
};

const initialState: SettingsState = {
  darkTheme: false,
  tempUnit: 'celsius',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.darkTheme = action.payload;
    },
    setTempUnit: (state, action: PayloadAction<string>) => {
      state.tempUnit = action.payload;
    },
  },
});

export const { toggleTheme, setTheme, setTempUnit } = settingsSlice.actions;

export default settingsSlice.reducer;
