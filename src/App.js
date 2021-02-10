import React, { useEffect } from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import { auth } from './firebase';
import NewWorkout from './pages/NewWorkout';
import About from './pages/About';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Switch>
          // if user is logged in show Login, else show homepage
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Register} />
          <Route exact path='/about' component={About} />
          <Route exact path='/' component={Homepage} />
          <Route exact path='/newworkout' component={NewWorkout} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
