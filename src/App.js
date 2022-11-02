import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Register from "./page/register/Register";
import Login from "./page/login/Login";
import NavBar from "./component/navBar/NavBar";
import LeftBar from "./component/leftBar/LeftBar";
import RightBar from "./component/rightBar/RightBar";
import Home from "./page/home/Home";
import UserProfile from "./page/profile/UserProfile";
import './styles.scss';
import { useContext } from "react";
import { DarkModeContext } from "./themeContext/darkModeContext";
import { AuthContext } from "./themeContext/authContext";

function App() {
  const {currentUser} = useContext(AuthContext);

  const {darkMode} = useContext(DarkModeContext);
  console.log(darkMode);


  const Layout = () =>{
    return(
      <div className={`theme-${darkMode ? "dark " : "light"}`}>
        <NavBar/>
        <div style={{display: "flex"}}>
          <LeftBar/>
         <div style={{flex: 6}}>
         <Outlet/>
         </div>
          <RightBar/>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ( {children} ) =>{
    
    if (!currentUser){
      return <Navigate to='/login'/>
    }

    return children

  }



  const router = createBrowserRouter([
    {
      path: "/",
      element: 
           <ProtectedRoute>
              <Layout/>
           </ProtectedRoute>,
      children: [
        {
          path: '/',
          element: <Home/>,
        },
        {
          path: 'profile/:id',
          element:<UserProfile/>,
        }
      ]
    },
    {
      path: "/login",
      element:<Login/>,
    },
    {
      path: "/register",
      element:<Register/>,
    },
  ]);

 
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
