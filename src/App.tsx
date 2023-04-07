import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import HomePage from 'pages/Home';
import LocationPage from 'pages/Location';
import SettingsPage from 'pages/Settings';
import { NavBar } from 'components/NavigationBar';

import { useDispatch } from 'react-redux';
import { add } from 'reducers/favoritesSlice';

import Favorite from 'utils/interfaces/FavoriteInterface';

import styled from '@emotion/styled';
import { useEffect } from 'react';

const ContentContainer = styled.div({
  width: '95%',
  maxWidth: '600px',
  margin: '0px auto 0px auto',
});

const App = () => {
  const dispatch = useDispatch();

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

  return (
    <Router>
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
    </Router>
  );
};

export default App;
