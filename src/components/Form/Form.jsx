import { useState } from 'react';
import css from './Form.module.css';
function Form(props) {
  // const [inputValue, setInputValue] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword ] = useState('');




  return (
    <div className={css.formWrapper}>   
        <h1>{props.title}</h1>
        <form onSubmit={`${props.submitPath}`}>
            <input onChange={(e) => setEmail(e.target.value)} size={40} type="text" placeholder="Enter you email here" name='email'/>
            <input onChange={(e) => setPassword(e.target.value)} size={40} type="text" placeholder="Enter your password here" name='password'/>
            <button className={css.formBtn} type='submit'>{props.btnTitle}</button>
        </form>
    </div>
  )
}

export default Form