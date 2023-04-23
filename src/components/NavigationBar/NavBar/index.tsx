// Components
import NavBarLogo from 'components/NavigationBar/NavBarTitle';
import { SearchBar } from 'components/SearchBar';
import SettingsButton from 'components/NavigationBar/SettingsButton';

// Other imports
import {
  NavigationBar,
  NavigationBarContent,
  SearchBarAndSettingsDiv,
} from './styles';

const NavBar = () => {
  return (
    <NavigationBar>
      <NavigationBarContent>
        <NavBarLogo />

        <SearchBarAndSettingsDiv>
          <SearchBar />

          <SettingsButton />
        </SearchBarAndSettingsDiv>
      </NavigationBarContent>
    </NavigationBar>
  );
};

export default NavBar;
