import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import { Provider } from 'react-redux'
import { store } from './components/Authentication/Store.js'
import Counter from './components/Authentication/Counter.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={store}>
    <AppRoutes/>
    {/* <Counter></Counter> */}
    </Provider>
  </StrictMode>,
)
