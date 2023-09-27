import {   createHashRouter,  Navigate,  RouterProvider } from "react-router-dom";
import Notfound from './../NotFound/NotFound';
import Home from './../Home/Home';
import People from './../People/People';
import Login from './../Login/Login';
import Register from './../Register/Register';
import Tvshows from './../Tvshows/Tvshows';
import Movies from './../Movies/Movies';
import About from './../About/About';
import MasterLayout from './../MasterLayout/MasterLayout';
import Details from './../Details/Details';
import jwtDecode from 'jwt-decode'
import { useState } from 'react';
import { useEffect } from 'react';
import ProtectedRoute from './../ProtectedRoute/ProtectedRoute';

function App() {
const [userData, setUserData] = useState(null)
let saveUserData=()=>{
  let encodedToken=localStorage.getItem('token')
  let decodedToken=jwtDecode(encodedToken)
  setUserData(decodedToken);
}

let Logout=()=>{
  localStorage.removeItem('token')
  setUserData(null)
return <Navigate to='/login'/>
}
useEffect(() => {
  if (localStorage.getItem('token')) {
    saveUserData()
    
  }
}, )







  let routes = createHashRouter([
    {
      path: "/",
      element: <MasterLayout userData={userData} Logout={Logout}/>,
      errorElement: <Notfound />,
      children: [
        { index: true, element:<ProtectedRoute userData={userData}><Home /></ProtectedRoute>  },
        { path: "about", element:<ProtectedRoute userData={userData}><About /></ProtectedRoute>  },
        { path: "movies", element:<ProtectedRoute userData={userData}> <Movies /></ProtectedRoute>  },
        { path: "tvshows", element: <ProtectedRoute userData={userData}><Tvshows /></ProtectedRoute> },
        { path: "register", element: <Register /> },
        { path: "details/:id/:mediaType", element:<ProtectedRoute userData={userData}><Details /></ProtectedRoute>  },
        { path: "people", element:<ProtectedRoute userData={userData}> <People /></ProtectedRoute>  },
        { path: "login", element: <Login saveUserData={saveUserData}/> },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
