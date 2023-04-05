import NavBar from 'components/NavBar';
import AppRoutes from './Routes';

import styled from '@emotion/styled';

const RouterContainer = styled.div({
  width: '95%',
  maxWidth: '1200px',
  margin: '100px auto 0px auto',
});

const App = () => {
  return (
    <>
      <NavBar />

      <RouterContainer>
        <AppRoutes />
      </RouterContainer>
    </>
  );
};

export default App;
