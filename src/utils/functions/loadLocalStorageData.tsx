import { Dispatch } from 'redux';
import { AnyAction } from '@reduxjs/toolkit';
import { Location } from 'utils/interfaces';
import { setTheme, setTempUnit } from 'reducers/settingsSlice';
import { add } from 'reducers/favoritesSlice';

const loadLocalStorageData = (dispatch: Dispatch<AnyAction>) => {
  const storedDarkTheme = localStorage.getItem('useDarkTheme');
  const storedFahrenheit = localStorage.getItem('useFahrenheit');
  const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');

  if (storedDarkTheme !== null) {
    dispatch(setTheme(JSON.parse(storedDarkTheme)));
  }

  if (storedFahrenheit !== null) {
    dispatch(setTempUnit(JSON.parse(storedFahrenheit)));
  }

  if (storedFavorites.length) {
    storedFavorites.forEach((fav: Location) => {
      dispatch(add(fav));
    });
  }
};

export default loadLocalStorageData;
