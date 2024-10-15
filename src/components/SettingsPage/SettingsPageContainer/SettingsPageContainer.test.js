import { reducer, screen, within } from '../../../utils/test-utils'
import '@testing-library/jest-dom'
import SettingsPageContainer from './index'
import { act } from 'react-dom/test-utils'

describe('Settings page', () => {
  describe('Document contains specific texts', () => {
    test('Text for dark theme is defined', () => {
      const findByText = screen.getByText('Use dark theme instead of light')
      expect(findByText).toBeDefined()
    })

    test('Text for temperatures is defined', () => {
      const findByText = screen.getByText('Use Fahrenheit instead of Celsius')
      expect(findByText).toBeDefined()
    })
  })

  describe('Buttons should exist', () => {
    test('Toggle button for dark theme exists', () => {
      const getElement = screen.getByLabelText('theme')

      expect(getElement).toBeInTheDocument()

      const { getByLabelText } = within(getElement)

      const getButton = getByLabelText('toggleSwitch')

      expect(getButton).toBeInTheDocument()
    })

    test('Toggle button for temperature exists', () => {
      const getElement = screen.getByLabelText('temperature')

      expect(getElement).toBeInTheDocument()

      const { getByLabelText } = within(getElement)

      const getButton = getByLabelText('toggleSwitch')

      expect(getButton).toBeInTheDocument()
    })
  })

  describe('Theme and temperature should have initialstate and state changes if button gets clicked', () => {
    test('States should be false by default', () => {
      const { store } = reducer(<SettingsPageContainer />)

      expect(store.getState().settings.useDarkTheme).toBe(false)
      expect(store.getState().settings.useFahrenheit).toBe(false)
    })

    test('State should change when button for dark theme gets clicked', () => {
      const { store } = reducer(<SettingsPageContainer />)

      const getElement = screen.getByLabelText('theme')

      expect(getElement).toBeInTheDocument()

      const { getByLabelText } = within(getElement)

      const themeInitialState = store.getState().settings.useDarkTheme

      act(() => {
        getByLabelText('toggleSwitch').click()
      })

      expect(store.getState().settings.useDarkTheme).not.toEqual(
        themeInitialState
      )
    })
  })
})
