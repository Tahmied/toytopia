import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Login from './Components/Authentication/Login/Login'
import Registration from './Components/Authentication/Registration/Registration'
import Home from './Components/Homepage/Home'
import MyProfile from './Components/Profile/MyProfile'
import Root from './Components/Root'
import ToyDetails from './Components/ToyDetails/ToyDetails'
import Toys from './Components/ToysPage/Toys'

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
        path: 'toy/:toyid', Component: ToyDetails, loader: () => fetch('/toys.json')
      },
      {
        path: 'login', Component: Login
      },
      {
        path: 'register', Component: Registration
      },
      {
        path: 'profile', Component: MyProfile
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
