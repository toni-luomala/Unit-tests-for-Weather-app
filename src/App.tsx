// Components and pages:
import { NavBar } from 'components/NavigationBar';
import HomePage from 'pages/Home';
import LocationPage from 'pages/Location';
import SettingsPage from 'pages/Settings';
// Utils imports:
import Favorite from 'utils/interfaces/FavoriteInterface';
import { setBodyStyles } from 'utils/functions/setBodyStyles';
import Theme from 'utils/interfaces/ThemeInterface';
// Redux, reducers:
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'reducers/themeSlice';
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
  const darkMode = useSelector((state: Theme) => state.theme.darkMode);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );

    if (storedFavorites.length) {
      storedFavorites.forEach((fav: Favorite) => {
        dispatch(add(fav));
      });
    }
  }, [dispatch]);

  useEffect(() => {
    setBodyStyles(darkMode);
  }, [darkMode]);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
      const parsedTheme = JSON.parse(storedTheme);
      dispatch(toggleTheme(parsedTheme));
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
