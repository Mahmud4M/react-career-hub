import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import Satisfied from './components/Satisfied/Satisfied';
import Jobs from './components/Jobs/Jobs';
import Appliedjobs from './components/AppliedJobs/Appliedjobs';
import Blogs from './components/Blogs/Blogs';
import Errorpage from './components/ErrorPage/Errorpage';
import JobDetails from './components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/satisfied",
        element: <Satisfied></Satisfied>
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "/appliedjobs",
        element: <Appliedjobs></Appliedjobs>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json') // Do not load all data Load only what you need
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
