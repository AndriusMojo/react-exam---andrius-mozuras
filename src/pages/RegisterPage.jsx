import Form from "../components/Form/Form";
import Container from "../components/UI/Container";


function RegisterPage() {

    function formHandler(e) {
        e.preventDefault();

    }
  return (
    <div className="bgiClass">
    <Container>
          <Form title='Register' btnTitle='Sign Up' />
    </Container>
    </div>
  )
}
export default RegisterPage;