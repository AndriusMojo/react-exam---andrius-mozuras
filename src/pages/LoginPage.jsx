import { useContext } from "react";
import Container from "../components/UI/Container";
import AuthContext from "../store/authContext";

function LoginPage() {
    const authCtx = useContext(AuthContext);

    function formHandler(e) {
        e.preventDefault();
        console.log('login')
        authCtx.login();
    }

  return (
    <Container>
        <h1>Login</h1>
        <form onSubmit={formHandler}>
            <input type="text" placeholder="email" />
            <input type="text" placeholder="password" />
            <button type='submit'>Login</button>
        </form>
    </Container>
  )
}

export default LoginPage;