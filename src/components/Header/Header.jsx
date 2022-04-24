import css from './Header.module.css';
import Container from '../UI/Container';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../store/authContext';

function Header() {
  const authCtx = useContext(AuthContext);

  function logoutHandler(e) {
      e.preventDefault();
      authCtx.logout();
  }
  
  return (
    <header className={css.head}>
        <Container className={css.header}>
            <nav>
              <NavLink onClick={logoutHandler} to={'/'} exact>
                <img src="/posterous-spaces.png" alt="" />
              </NavLink>
            </nav>
            <nav className={css.mainNav}>
              {!authCtx.isUserLoggedIn && <NavLink to={'/login'}>Login</NavLink>}
              {!authCtx.isUserLoggedIn && <NavLink to={'/register'}>Register</NavLink> }
              {authCtx.isUserLoggedIn && <NavLink to={'/home'}>Home</NavLink>}
              {authCtx.isUserLoggedIn && <NavLink to='/add-post'>Add Post</NavLink>}
              {authCtx.isUserLoggedIn && <NavLink onClick={logoutHandler} to={'/login'}>Logout</NavLink>}
            </nav>
        </Container>
    </header>
  )
}

export default Header;