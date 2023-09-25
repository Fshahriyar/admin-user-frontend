import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import Details from './Components/Details';
import Modals from './Components/Modals';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
   {
        path:'details',
        element:<Details></Details>,
   },
    {
      path:'modals/:id',
      element:<Modals></Modals>
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
