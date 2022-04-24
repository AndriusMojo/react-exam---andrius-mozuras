import css from './Btn.module.css'


const Btn = (props) => {

    const btnClass = props.dark ? css.btnDark : css.btnLight

    return (
        <button className={btnClass}>{props.children}</button>
    )
}
export default Btn;