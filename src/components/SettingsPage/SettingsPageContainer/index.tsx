import SettingsToggler from 'components/SettingsPage/SettingsToggler';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme, setTempUnit } from 'reducers/settingsSlice';

const SettingsPageContainer = () => {
  const theme = useSelector((state: any) => state.settings.darkTheme);
  const unit = useSelector((state: any) => state.settings.tempUnit);
  const dispatch = useDispatch();

  const handleToggleTheme = () => {
    const newTheme = !theme;
    dispatch(setTheme(newTheme));
    localStorage.setItem('darkTheme', JSON.stringify(newTheme));
  };

  const handleChangeUnit = () => {
    const newUnit = unit === 'celsius' ? 'fahrenheit' : 'celsius';
    dispatch(setTempUnit(newUnit));
    localStorage.setItem('tempUnit', newUnit);
  };

  return (
    <>
      <SettingsToggler
        title="Dark theme"
        desc="Use dark theme instead of light"
        value={theme}
        onChange={handleToggleTheme}
      />

      <SettingsToggler
        title="Temperature unit"
        desc="Use Fahrenheit instead of Celsius"
        value={unit === 'fahrenheit'}
        onChange={handleChangeUnit}
      />
    </>
  );
};

export default SettingsPageContainer;
