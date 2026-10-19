import './App.css'
import DashboardSkeleton from './components/Loading/Demo'
import LoadingPage from './components/Loading/Loading'

function App() { 

  return (
    <div className='h-screen bg-blue-50 flex '>
     <div className='h-full w-20 bg-white block'></div>
     <LoadingPage/>
     {/* <DashboardSkeleton/> */}
    </div>
  )
}

export default App
