import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoginScreen from './screens/LoginScreen.js';
import { auth } from './datastore.js';
import { useDispatch } from 'react-redux';
import { login , logout, selectUser } from './features/userSlice.js';

function App() {
  const user =  selectUser;
  const dispatch = useDispatch();
  console.log(user, "hello");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( (userAuth) => {
      console.log("user onAuth", userAuth);
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else {
        dispatch(logout)
      }
    })

    return unsubscribe;
  },[]);

  return (
    <div className='app'>
      <Router>
        { !user ? ( <LoginScreen/> ) : 
          <Routes>
            <Route path='/profile' element={<ProfileScreen/>}></Route>
            <Route path="/" element={<HomeScreen/>}></Route>
          </Routes>
        }
      </Router>
    </div>
  );
}

export default App;
