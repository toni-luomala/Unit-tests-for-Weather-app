import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SettingsState = {
  useDarkTheme: boolean;
  useFahrenheit: boolean;
};

const initialState: SettingsState = {
  useDarkTheme: false,
  useFahrenheit: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<boolean>) => {
      localStorage.setItem('useDarkTheme', JSON.stringify(action.payload));
      state.useDarkTheme = action.payload;
    },
    setTempUnit: (state, action: PayloadAction<boolean>) => {
      localStorage.setItem('useFahrenheit', JSON.stringify(action.payload));
      state.useFahrenheit = action.payload;
    },
  },
});

export const { setTheme, setTempUnit } = settingsSlice.actions;

export default settingsSlice.reducer;
