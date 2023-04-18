// Components and pages:
import { NavBar } from 'components/NavigationBar';
import HomePage from 'pages/Home';
import LocationPage from 'pages/Location';
import SettingsPage from 'pages/Settings';
// Utils imports:
import { Settings } from 'utils/interfaces';
import { setBodyStyles } from 'utils/functions';
import { loadLocalStorageData } from 'utils/functions';
// Redux, reducers:
import { useDispatch, useSelector } from 'react-redux';
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
  const { useDarkTheme } = useSelector((state: Settings) => state.settings);

  useEffect(() => {
    setBodyStyles(useDarkTheme);
  }, [useDarkTheme]);

  useEffect(() => {
    loadLocalStorageData(dispatch);
  }, [dispatch]);

  return (
    <BrowserRouter>
      <NavBar />

      <ContentContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route
            path="/location/:latitude/:longitude/:name/:admin1?"
            element={<LocationPage />}
          />
        </Routes>
      </ContentContainer>
    </BrowserRouter>
  );
};

export default App;
