import Home from './Home'
import { createBrowserRouter, NavLink, RouterProvider } from 'react-router-dom'
import './App.css'
import './index.css' 
import SignUpArtist from './BandS/SignUpArtist'
import { ArtistFormProvider } from './BandS/ArtistFormContext'
import Roles from './BandS/Roles'
import BusinessSignup from './Business/BusinessSignUp'
import { BusinessFormProvider } from './Business/BusinessFormContext'
import ArtistDashboard from './BandS/ArtistDahsBoard'
import SignIn from './Forms/SignIn'
import ProtectedRoute from './Forms/ProtectedRoute'
import { AuthProvider } from './Forms/UserAuthContext'
import BusinessDashboard from './Business/BusinessDashboard'
function App() {


  const router = createBrowserRouter([
   
    { path: '/home',
      element: <Home/>
    },
    { path: '/',
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
      element: <ProtectedRoute>
        <ArtistDashboard/>
        </ProtectedRoute>
    },
    {
      path: '/business_dashboard',
      element: <ProtectedRoute>
        <BusinessDashboard/>
        </ProtectedRoute>
    },
    {
      path: '/signin',
      element: <SignIn/>
    },
  ])

  return (
    <div>
      <h1 className='p-8'>Logo</h1>
  <BusinessFormProvider>
    <AuthProvider>
<ArtistFormProvider>
<RouterProvider router={router}/>
</ArtistFormProvider>
</AuthProvider>
</BusinessFormProvider>
     
   
    </div>
  )
}

export default App
