// Components and pages:
import { NavBar } from 'components/NavigationBar'
// Utils imports:
import { Settings } from 'utils/interfaces'
import { setBodyStyles } from 'utils/functions'
import { loadLocalStorageData } from 'utils/functions'
// Redux, reducers:
import { useDispatch, useSelector } from 'react-redux'
// Other imports:
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styled from '@emotion/styled'
import { useEffect } from 'react'
import { routes } from './routes'
import store from 'store/store'

const ContentContainer = styled.div({
  width: '95%',
  maxWidth: '600px',
  margin: '0px auto 0px auto'
})

const App = () => {
  const dispatch = useDispatch()
  const { useDarkTheme } = useSelector((state: Settings) => state.settings)

  useEffect(() => {
    console.log('useDarkTheme: ', useDarkTheme)
    setBodyStyles(useDarkTheme)
  }, [useDarkTheme])

  useEffect(() => {
    loadLocalStorageData(dispatch)
    console.log('loadLocalStorageData: ', loadLocalStorageData)
  }, [dispatch])

  console.log(store.getState())

  return (
    <BrowserRouter>
      <NavBar />
      <ContentContainer>
        <Routes>
          {routes.map((route, index) => (
            <Route {...route} key={index} />
          ))}
        </Routes>
      </ContentContainer>
    </BrowserRouter>
  )
}

export default App
