import css from './RegisterPage.module.css';
import { useEffect, useState } from "react";
import Container from "../../components/UI/Container";
import { sendFetch } from "../../components/utils/FetchHelper";
import { useHistory } from 'react-router-dom';
const REG_LOCATION = 'https://autumn-delicate-wilderness.glitch.me/v1/auth/register';

const initErrors = {
  email: '',
  password: '',
}

function RegisterPage() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword ] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorObj, setErrorObj] = useState(initErrors);

  useEffect(() => {
    const isErrorEmpty = Object.values(errorObj).every((el) => el === '')
    if (!isErrorEmpty) {
        setIsError(true);
    }
}, [email, password, errorObj])
async function sendFetch() {
  const loginObj = {
    email: email,
    password: password,
  };
  const resp = await fetch(REG_LOCATION, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginObj),
  })
  if (resp.status === 200) {
    const atsInJs = await resp.json();
    console.log('atsInJs ===', atsInJs);
    history.push('/login');
    return atsInJs;
    }
    if (resp.status === 400) {
    console.log(`err: 'Incorrect email or password'`);
    return false;
    }
}

  async function registerHandler(e) {
    setIsError(false);
    setErrorObj(initErrors);
    e.preventDefault();
    sendFetch();
    if (email.trim() === '') {
      setErrorObj(prevState => ({...prevState, name: 'Email input can`t be blank' }));
    }
    if (password.trim() === '') {
      setErrorObj(prevState => ({...prevState, name: 'Password input can`t be blank' }));
    }
    if (isError) {
      return
  }
  }

  return (
    <div className="bgiClass">
    <Container>
      <div className={css.formWrapper}>   
          <h1>Register</h1>
          <form onSubmit={registerHandler}>
              {isError && <h3 className={css.err}>Please check the form</h3>} 
              <input onChange={(e) => setEmail(e.target.value)} value={email} size={40} type="text" placeholder="Enter you email here" />
              {errorObj.email && <p>{errorObj.email}</p>}
              <input onChange={(e) => setPassword(e.target.value)} value={password} size={40} type="text" placeholder="Enter your password here" />
              {errorObj.password && <p>{errorObj.password}</p>}
              <button className={css.formBtn} type='submit'>Sign Up</button>
          </form>
      </div>
    </Container>
    </div>
  )
}
export default RegisterPage;