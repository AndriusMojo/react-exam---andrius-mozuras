import css from './Header.module.css';
import Container from '../UI/Container';
import { useContext } from 'react';
import AuthContext from '../store/authContext';
import { NavLink } from 'react-router-dom';

function Header() {
  const authCtx = useContext(AuthContext);

  function logoutHandler(e) {
      e.preventDefault();
      authCtx.logout();
  }
  
  return (
    <div>
        <Container>
            <img src="/postsIcon.png" alt="" />
            <nav>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
              <Link to='/home'>Home</Link>
              <Link to='/add-post'>Add Post</Link>
              <Link onClick={logoutHandler} to='/login'>Logout</Link>
            {!authCtx.isUserLoggedIn && <NavLink to={'/login'}>Login</NavLink>}
            {!authCtx.isUserLoggedIn && <NavLink to={'/register'}>Vip</NavLink> }
            {authCtx.isUserLoggedIn && <NavLink to={'/home'}>Home</NavLink>}
            {authCtx.isUserLoggedIn && <NavLink to='/add-post'>Add Post</NavLink>}
            {authCtx.isUserLoggedIn && <NavLink onClick={logoutHandler} to={'/login'}>Logout</NavLink>  }
            </nav>
        </Container>
    </div>
  )
}

export default Header;