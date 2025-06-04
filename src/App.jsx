import Home from './Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import './index.css' 
import SignUpArtist from './Components/Artists/SignUpArtist'
import { ArtistFormProvider } from './Components/Artists/ArtistFormContext'
function App() {


  const router = createBrowserRouter([
   
    { path: '/home',
      element: <Home/>
    },
   
    {
      path: '/artist_signup',
      element: <SignUpArtist/>
    }
  ])

  return (
    <>
<ArtistFormProvider>
<RouterProvider router={router}/>
</ArtistFormProvider>
     
   
    </>
  )
}

export default App
