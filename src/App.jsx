import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import AboutPage from './Components/About/About'
import Forgotpass from './Components/Authentication/ForgotPass/Forgotpass'
import Login from './Components/Authentication/Login/Login'
import Registration from './Components/Authentication/Registration/Registration'
import ErrorPage from './Components/ErrorPage'
import Home from './Components/Homepage/Home'
import EditProfile from './Components/Profile/EditProfile'
import MyProfile from './Components/Profile/MyProfile'
import Root from './Components/Root'
import ToyDetails from './Components/ToyDetails/ToyDetails'
import Toys from './Components/ToysPage/Toys'
import TriedToys from './Components/TriedToys/TriedToys'
import PrivateRoutes from './Routes/PrivateRoutes'

const router = createBrowserRouter([
  {
    path: '/', Component: Root,
    children: [
      {
        index: true, Component: Home, loader: () => fetch('/toys.json')
      },
      {
        path: 'toys', Component: Toys, loader: () => fetch('/toys.json')
      },
      {
        path: 'toy/:toyid', element: <ToyDetails></ToyDetails>, loader: () => fetch('/toys.json')
      },
      {
        path: 'login', Component: Login
      },
      {
        path: 'register', Component: Registration
      },
      {
        path: 'about' , Component: AboutPage
      },
      {
        path: 'profile', element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
      },
      {
        path: 'edit-profile', element: <PrivateRoutes><EditProfile></EditProfile></PrivateRoutes>
      },
      {
        path: 'forgot-password', Component : Forgotpass
      },
      {
        path: 'tried-toys', element : <PrivateRoutes><TriedToys></TriedToys></PrivateRoutes> 
      },
      {
        path: '*', Component: ErrorPage
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
