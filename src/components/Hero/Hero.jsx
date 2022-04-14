import { NavLink } from 'react-router-dom';
import Btn from '../UI/Btn';
import Container from '../UI/Container';
import css from './Hero.module.css';
function Hero() {
  return (
    <div className={css.hero}>
      <Container>
        <div className={css.text}>
            <h1>Welcome to Pre'POST'erous!</h1>
            <h4>Worlds number 1# webpage of preposterous posts</h4>
            <h5>To start the journey choose to:</h5>
        </div>
        <nav className={css.nav}>
          <NavLink to={'/login'}>
            <Btn dark>Login</Btn>
          </NavLink>
          <span>or</span>
          <NavLink to={'/register'}>
            <Btn>Register</Btn>
          </NavLink>
        </nav>
      </Container>
    </div>
  )
}

export default Hero;