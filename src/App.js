import { useState } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AddPostPage from './pages/AddPostPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Welcome from './pages/Welcome';
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
          <Route path={'/'}>
            <Welcome />
          </Route>
          <Route path={'/login'}>
            <LoginPage />
          </Route>
          <Route path={'/register'}>
            <RegisterPage />
          </Route>
          <Route path={'/home'}>
            <HomePage />
          </Route>
          <Route path={'/add-post'}>
            <AddPostPage />
          </Route>
          <Route path={'*'}>
            <h1>Page not found</h1>
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
