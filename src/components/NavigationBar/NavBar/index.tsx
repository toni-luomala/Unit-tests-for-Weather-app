import styled from '@emotion/styled';
import NavBarTitle from 'components/NavigationBar/NavBarTitle';
import SearchBar from 'components/NavigationBar/SearchBar';
import SettingsButton from 'components/NavigationBar/SettingsButton';

const NavigationBar = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '80px',
  padding: '0px 10px',
  boxSizing: 'border-box',
  backgroundColor: 'gray',
  color: 'white',
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
      <NavBarTitle />

      <SearchBarAndSettingsDiv>
        <SearchBar />

        <SettingsButton />
      </SearchBarAndSettingsDiv>
    </NavigationBar>
  );
};

export default NavBar;
