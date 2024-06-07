

import Live from './components/Live'
import History from './components/History'
import Navbar from './components/Navbar'
import PointTable from './components/PointTable'


import { createBrowserRouter,RouterProvider } from 'react-router-dom'

 const App=()=>{
  
  const router=createBrowserRouter([

    { path:"/",element:<><Navbar/><Live/></>},
    {path:"/Live",element:<><Navbar/><Live/></>},
    {path:"/History",element:<><Navbar/><History/></>},
    {path:"/PointTable",element:<><Navbar/><PointTable/></>}
  ])

  return (
    <>
    
    <RouterProvider router={router}></RouterProvider>
    </>
   
  )
}

export default App
