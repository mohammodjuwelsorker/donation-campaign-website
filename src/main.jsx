import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './components/Home/Home';
import Roots from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import DonationDetails from './components/DonationDetails/DonationDetails';
import Donation from './components/Donation/Donation';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/donation",
        element:<Donation/>
      },
      {
        path:"/donationDetails/:id",
        element:<DonationDetails/>,
        loader:() => fetch('/donation.json')
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
