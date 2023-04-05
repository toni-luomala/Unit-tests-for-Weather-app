import styled from '@emotion/styled';

import SearchBar from 'components/SearchBar';

const NavigationBarContainer = styled.div({
  width: '100%',
  height: '80px',
  backgroundColor: 'gray',
  color: 'white',
});

const NavigationBar = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0px 10px',
});

const NavBar = () => {
  return (
    <NavigationBarContainer>
      <NavigationBar>
        <h1>Weather</h1>

        <SearchBar />
      </NavigationBar>
    </NavigationBarContainer>
  );
};

export default NavBar;
