// Components and pages:
import { NavBar } from 'components/NavigationBar';
import HomePage from 'pages/Home';
import LocationPage from 'pages/Location';
import SettingsPage from 'pages/Settings';
// Utils imports:
import Favorite from 'utils/interfaces/FavoriteInterface';
import { setBodyStyles } from 'utils/functions/setBodyStyles';
import Settings from 'utils/interfaces/SettingsInterface';
// Redux, reducers:
import { useDispatch, useSelector } from 'react-redux';
import { setTheme, setTempUnit } from 'reducers/settingsSlice';
import { add } from 'reducers/favoritesSlice';
// Other imports:
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useEffect } from 'react';

const ContentContainer = styled.div({
  width: '95%',
  maxWidth: '600px',
  margin: '0px auto 0px auto',
});

const App = () => {
  const dispatch = useDispatch();
  const useDarkTheme = useSelector(
    (state: Settings) => state.settings.useDarkTheme
  );

  useEffect(() => {
    setBodyStyles(useDarkTheme);
  }, [useDarkTheme]);

  useEffect(() => {
    const storedDarkTheme = localStorage.getItem('useDarkTheme');
    const storedFahrenheit = localStorage.getItem('useFahrenheit');
    const storedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );

    if (storedDarkTheme !== null)
      dispatch(setTheme(JSON.parse(storedDarkTheme)));

    if (storedFahrenheit !== null)
      dispatch(setTempUnit(JSON.parse(storedFahrenheit)));

    if (storedFavorites.length) {
      storedFavorites.forEach((fav: Favorite) => {
        dispatch(add(fav));
      });
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />

      <ContentContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />

          <Route
            path="/location/:latitude/:longitude/:name?/:admin1?"
            element={<LocationPage />}
          />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </ContentContainer>
    </BrowserRouter>
  );
};

export default App;
