import { SettingsToggler } from 'components/SettingsPage';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme, setTempUnit } from 'reducers/settingsSlice';
import Settings from 'utils/interfaces/SettingsInterface';

const SettingsPageContainer = () => {
  const { useDarkTheme, useFahrenheit } = useSelector(
    (state: Settings) => state.settings
  );
  const dispatch = useDispatch();

  const handleToggle = (setting: string) => {
    if (setting === 'theme') {
      dispatch(setTheme(!useDarkTheme));
    } else if (setting === 'unit') {
      dispatch(setTempUnit(!useFahrenheit));
    }
  };

  return (
    <>
      <SettingsToggler
        title="Dark theme"
        desc="Use dark theme instead of light"
        value={useDarkTheme}
        onChange={() => handleToggle('theme')}
      />

      <SettingsToggler
        title="Temperature unit"
        desc="Use Fahrenheit instead of Celsius"
        value={useFahrenheit}
        onChange={() => handleToggle('unit')}
      />
    </>
  );
};

export default SettingsPageContainer;
