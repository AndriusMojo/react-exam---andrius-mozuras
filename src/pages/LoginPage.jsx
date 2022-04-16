import { useContext } from "react";
import Form from "../components/Form/Form";
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
    <div className="bgiClass">
      <Container>
          <Form title='Login' btnTitle='Sign in' formHandler={formHandler} />
      </Container>
    </div>
  )
}

export default LoginPage;