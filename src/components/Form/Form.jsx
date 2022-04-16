import css from './Form.module.css';
function Form(props) {
  return (
    <div className={css.formWrapper}>   
        <h1>{props.title}</h1>
        <form onSubmit={props.formHandler}>
            <input size={40} type="text" placeholder="Enter you email here" />
            <input size={40} type="text" placeholder="Enter your password here" />
            <button className={css.formBtn}>{props.btnTitle}</button>
        </form>
    </div>
  )
}

export default Form