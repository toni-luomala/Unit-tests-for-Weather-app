import reducer, { setTheme, setTempUnit } from './settingsSlice'
import deepFreeze from 'deep-freeze'

describe('Reducer should act presumably', () => {
  const initialState = {
    useDarkTheme: false,
    useFahrenheit: false
  }

  test('Reducer should have initial state by default', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState)
  })

  test('should handle the state change of theme', () => {
    const state = initialState
    expect(reducer(initialState, setTheme(true))).toEqual({
      useDarkTheme: true,
      useFahrenheit: false
    })
    deepFreeze(state)
  })

  test('should handle the state change of temperature', () => {
    const state = initialState
    expect(reducer(initialState, setTempUnit(true))).toEqual({
      useDarkTheme: false,
      useFahrenheit: true
    })
    console.log('state: ', state)
    deepFreeze(state)
  })
})
