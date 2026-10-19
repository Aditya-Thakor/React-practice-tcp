import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ref from './hooks/useRef/Ref'
import Ref2 from './hooks/useRef/Ref2'
import Reducer from './hooks/useReducer/Reducer'
import Ref3 from './hooks/useRef/Ref3'
import Cb from './hooks/useCallback/Cb'
import MainApp from './hooks/useCallback/Child'
import Form from './hooks/useReducer/Form'
import Data from './hooks/useReducer/Reducer2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* useRef hook */}
    {/* <Ref/>
    <Ref2/> */}
    {/* <Ref3/> */}
    {/* <Cb></Cb> */}
    {/* <MainApp/> */}

    {/* useReducer hook */}
     {/* <Reducer/>  */}
     {/* <Form/> */}
     <Data></Data>
    </>
  )
}

export default App
