// Components
import NavBarLogo from 'components/NavigationBar/NavBarTitle';
import { SearchBar } from 'components/SearchBar';
import SettingsButton from 'components/NavigationBar/SettingsButton';

// Other imports
import { NavigationBar, NavigationBarContent } from './styles';

const NavBar = () => {
  return (
    <NavigationBar>
      <NavigationBarContent>
        <NavBarLogo />

        <SearchBar />

        <SettingsButton />
      </NavigationBarContent>
    </NavigationBar>
  );
};

export default NavBar;
