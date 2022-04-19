import { useContext } from "react";
import { deleteFetch } from "../../components/utils/FetchHelper";
import AuthContext from "../../store/authContext";
import css from './SinglePostCard.module.css';



const SinglePostCard = (props) => {

    const authCtxValue = useContext(AuthContext);

    async function handleDelete() {
        console.log('delete', props.id);
        const delResult = await deleteFetch('content/skills', props.id);
        console.log('delResult ===', delResult);
        if (delResult.changes === 1) {
          // success delete
          console.log('success delete');
          props.onDelete();
        }
      }


    return (
        <div className={css.postCard}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={authCtxValue.logout} outline>Logout</button>
        </div>
        ) 
 } 
 
 export default SinglePostCard;