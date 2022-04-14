import css from './Btn.module.css'

const Btn = (props) => {
    return (
        <button className={css.btn}>{props.children}</button>
    )
}
export default Btn;