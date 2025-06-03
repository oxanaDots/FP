import Home from './Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import './index.css' 
function App() {


  const router = createBrowserRouter([
   
    { path: '/home',
      element: <Home/>
    }
  ])

  return (
    <>

      <RouterProvider router={router}/>
   
    </>
  )
}

export default App
