import SettingsToggler from 'components/SettingsPage/SettingsToggler';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'reducers/themeSlice';

const SettingsPageContainer = () => {
  const theme = useSelector((state: any) => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  return (
    <>
      <SettingsToggler
        title="Dark theme"
        desc="Use dark theme instead of light"
        value={theme}
        onChange={handleToggleTheme}
      />
    </>
  );
};

export default SettingsPageContainer;
