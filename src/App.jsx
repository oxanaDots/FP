import { useState } from 'react'
import Home from './Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

function App() {


  const router = createBrowserRouter([
    {
      path: "/signup",
      element: <SignUp/>
    },
    {
      path:"/signin",
      element: <SignIn/>
    },
    { path: '/home',
      element: <Home/>
    }
  ])

  return (
    <>
 
    <FormProvider>
      <RouterProvider router={router}/>
    </FormProvider>
    </>
  )
}

export default App
