import { Link } from "react-router-dom"
import Container from "../UI/Container";
import css from './NotLoggedIn.module.css';

function NotLoggedIn() {
  return (
    <Container>
        <h2>You are not logged in</h2>
          <p>Please login to see the content</p>
          <Link to='/login'>
            <button>Login</button>
          </Link>
    </Container>
  )
}

export default NotLoggedIn;