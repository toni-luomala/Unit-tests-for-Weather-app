import { SettingsToggler } from 'components/SettingsPage'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme, setTempUnit } from 'reducers/settingsSlice'
import { Settings } from 'utils/interfaces'

const SettingsPageContainer = () => {
  const { useDarkTheme, useFahrenheit } = useSelector(
    (state: Settings) => state.settings
  )
  const dispatch = useDispatch()

  const handleToggle = (setting: string) => {
    if (setting === 'theme') {
      dispatch(setTheme(!useDarkTheme))

      //console.log('handleToggle: ', dispatch(setTheme))
    } else if (setting === 'unit') {
      dispatch(setTempUnit(!useFahrenheit))
    }
    //console.log('useDarkTheme', !useDarkTheme)
  }

  return (
    <div>
      <div aria-label="theme">
        <SettingsToggler
          title="Dark theme"
          desc="Use dark theme instead of light"
          value={useDarkTheme}
          onChange={() => handleToggle('theme')}
        />
      </div>
      <div aria-label="temperature">
        <SettingsToggler
          title="Temperature unit"
          desc="Use Fahrenheit instead of Celsius"
          value={useFahrenheit}
          onChange={() => handleToggle('unit')}
        />
      </div>
    </div>
  )
}

export default SettingsPageContainer
