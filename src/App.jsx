import Home from './Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import './index.css' 
import SignUpArtist from './Artists/SignUpArtist'
import { ArtistFormProvider } from './Artists/ArtistFormContext'
import Roles from './Artists/Roles'
import BusinessSignup from './Business/BusinessSignUp'
import { BusinessFormProvider } from './Business/BusinessFormContext'
import ArtistDashboard from './Artists/ArtistDahsBoard'
function App() {


  const router = createBrowserRouter([
   
    { path: '/home',
      element: <Home/>
    },
   
    {
      path: '/artist_signup',
      element: <SignUpArtist/>
    },

    {
      path: '/specify_role',
      element: <Roles/>
    },
    {
      path: '/business_signup',
      element: <BusinessSignup/>
    },
    {
      path: '/artist_dashboard',
      element: <ArtistDashboard/>
    },
  ])

  return (
    <>
    <BusinessFormProvider>
<ArtistFormProvider>
<RouterProvider router={router}/>
</ArtistFormProvider>
</BusinessFormProvider>
     
   
    </>
  )
}

export default App
