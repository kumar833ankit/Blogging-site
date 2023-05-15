import './App.css';
import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from 'react';
import { signOut } from 'firebase/auth';
//import {useNavigate} from 'react-router-dom'
import {auth} from './firebase-config'

function App() {
  const [isAuth, setIsAuth] = useState(false)

//  let navigate = useNavigate();
  const signUserOut = () => { 
    signOut(auth).then(() => {
    localStorage.clear()
    setIsAuth(false)
    //navigate("/login")
    window.location.pathname = "/login";

  })

  };
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        {!isAuth ? (
        <Link to="/login"> Login </Link> ):(
          <>
                    <Link to="/createpost"> CreatePost </Link>

          <button class="lgout" onClick={signUserOut}> Log out </button>
          </>
          ) }
          
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}/>}/>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}  />}/>

      </Routes>
    </Router>
  );
}

export default App;
