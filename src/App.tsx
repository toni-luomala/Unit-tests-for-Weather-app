import { NavBar } from 'components/NavigationBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import HomePage from 'pages/Home';
import LocationPage from 'pages/Location';
import SettingsPage from 'pages/Settings';

import styled from '@emotion/styled';

const ContentContainer = styled.div({
  width: '95%',
  maxWidth: '1200px',
  margin: '0px auto 0px auto',
});

const App = () => {
  return (
    <Router>
      <NavBar />

      <ContentContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />

          <Route
            path="/location/:latitude/:longitude"
            element={<LocationPage />}
          />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </ContentContainer>
    </Router>
  );
};

export default App;
