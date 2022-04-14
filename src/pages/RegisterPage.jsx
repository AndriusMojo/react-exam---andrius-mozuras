import Container from "../components/UI/Container";


function RegisterPage() {

    function formHandler(e) {
        e.preventDefault();

    }
  return (
    <Container>
        <h1>Register</h1>
        <form onSubmit={formHandler}>
            <input type="text" placeholder="email" />
            <input type="text" placeholder="password" />
            <button>Register</button>
        </form>
    </Container>
  )
}
export default RegisterPage;