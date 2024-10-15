import ReactDOM from 'react-dom/client'
import 'assets/index.css'
import App from './App'
import store from 'store/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root') as Element)

//console.log('store.getState() loggaus index.tsx tiedostosta', store.getState())

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
