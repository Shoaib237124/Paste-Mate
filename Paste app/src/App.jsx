
import './App.css'
import Navbar from './components/Navbar'
import ViewPastes from './components/ViewPastes'
import Pastes from './components/Pastes'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>

    },
    {
      path:"/pastes",
      element:
      <div>
       <Navbar/>
       <Pastes/> 
      </div>

    },
    {
      path:"/pastes/:id",
      element:
      <div>
      <Navbar/>
      <ViewPastes/>
      </div>

    },
  ]
)

function App() {


  return (
   
      <div>
       <RouterProvider router={router}/>
      </div>
      
  )
}

export default App
