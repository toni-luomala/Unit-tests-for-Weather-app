import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import settingsReducer from '../reducers/settingsSlice'

function reducer(
  ui,
  {
    preloadedState = {},
    store = configureStore({
      reducer: { settings: settingsReducer },
      preloadedState
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export * from '@testing-library/react'
export { reducer }
