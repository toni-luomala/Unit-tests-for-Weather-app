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
    setTheme: (state, action: PayloadAction<boolean>) => {
      localStorage.setItem('darkTheme', JSON.stringify(action.payload));
      state.darkTheme = action.payload;
    },
    setTempUnit: (state, action: PayloadAction<string>) => {
      localStorage.setItem('tempUnit', action.payload);
      state.tempUnit = action.payload;
    },
  },
});

export const { setTheme, setTempUnit } = settingsSlice.actions;

export default settingsSlice.reducer;
