import SettingsToggler from 'components/SettingsPage/SettingsToggler';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from 'reducers/themeSlice';

const SettingsPageContainer = () => {
  const theme = useSelector((state: any) => state.theme.darkTheme);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    const newTheme = !theme;
    dispatch(setTheme(newTheme));
    localStorage.setItem('darkTheme', JSON.stringify(newTheme));
  };

  useEffect(() => {
    localStorage.setItem('darkTheme', JSON.stringify(theme));
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
