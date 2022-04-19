import { useState } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ProtectedRoute from './components/UI/ProtectedRoute';
import AddPostPage from './pages/AddPostPage/AddPostPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Welcome from './pages/WelcomePage/Welcome';

import AuthContext from './store/authContext';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] =
    useState(false);

  function login() {
    console.log('app.js login');
    setIsUserLoggedIn(true);
  }
  function logout() {
    console.log('app.js logout');
    setIsUserLoggedIn(false);
  }

  const ctxValue = {
    isUserLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={ctxValue}>
      <div className='App'>
        <Header />
        <Switch>
          <Route path={'/login'}>
            <LoginPage />
          </Route>
          <Route path={'/register'}>
            <RegisterPage />
          </Route>
          <Route path={'/'} exact>
            <Welcome />
          </Route>
          <ProtectedRoute path='/home' exact>
            <HomePage />
          </ProtectedRoute>
          <ProtectedRoute path='/add-posts' exact>
            <AddPostPage />
          </ProtectedRoute>
          <Route path={'*'}>
            <h1>Page not found</h1>
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
