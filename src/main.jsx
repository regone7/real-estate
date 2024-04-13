import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './layout/Root';
import Home from './pages/Home';
import LogInPg from './components/LogInPg';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader:()=>fetch('/mydata.json'),
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogInPg></LogInPg>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
