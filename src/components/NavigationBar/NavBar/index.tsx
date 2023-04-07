import styled from '@emotion/styled';
import NavBarTitle from 'components/NavigationBar/NavBarTitle';
import SearchBar from 'components/NavigationBar/SearchBar';
import SettingsButton from 'components/NavigationBar/SettingsButton';

const NavigationBar = styled.div({
  width: '100%',
  height: '80px',
  backgroundColor: 'gray',
  color: 'white',
});

const NavigationBarContent = styled.div({
  width: '95%',
  height: '100%',
  maxWidth: '600px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  margin: 'auto',
});

const SearchBarAndSettingsDiv = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'right',
});

const NavBar = () => {
  return (
    <NavigationBar>
      <NavigationBarContent>
        <NavBarTitle />

        <SearchBarAndSettingsDiv>
          <SearchBar />

          <SettingsButton />
        </SearchBarAndSettingsDiv>
      </NavigationBarContent>
    </NavigationBar>
  );
};

export default NavBar;
