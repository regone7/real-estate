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
import RegisterPg from './components/RegisterPg';
import AuthProvider from './provider/AuthProvider';
import UpdateProfile from './pages/UpdateProfile';
import PrivateRoutes from './routes/PrivateRoutes';
import CardsDiteals from './pages/CardsDiteals';
import Profiles from './pages/Profiles';
import ContructUs from './pages/ContructUs';
import MoreService from './pages/MoreService';
import Errorpage from './components/Errorpage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        loader: () => fetch('/mydata.json'),
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogInPg></LogInPg>,
      },
      {
        path: "/register",
        element: <RegisterPg></RegisterPg>,
      },
      {
        path: "/estatedtls/:id",
        loader: () => fetch('/mydata.json'),
        element: <PrivateRoutes><CardsDiteals></CardsDiteals></PrivateRoutes>,

      },
      {
        path: "/updateprofile",
        element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>,
      },
      {
        path: "/profile",
        element: <PrivateRoutes><Profiles></Profiles></PrivateRoutes>,
      },
      {
        path: "/contact",
        element: <PrivateRoutes><ContructUs></ContructUs></PrivateRoutes>,
      },
      {
        path: "/more",
        element: <PrivateRoutes><MoreService></MoreService></PrivateRoutes>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
