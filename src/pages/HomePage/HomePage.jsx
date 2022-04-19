import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../../components/UI/Container";
import { getFetch } from "../../components/utils/FetchHelper";
import css from './HomePage.module.css'
import PostsCardList from "./PostsList";


const Posts = (props) => {

    const [postsArr, setPostsArr] = useState([]);

    useEffect(() => {
      getPosts();
    }, [])
    
    async function getPosts() {
        const postsFromDb = await getFetch('content/skills');
        console.log('postsFromDb ===', postsFromDb);
        setPostsArr(postsFromDb);
      }

    return (
    <Container>
        <div>
            <div className={css.flex}>
                <h1>Posts List</h1>
                <Link to={'/add-posts'}>
                <button>Add post</button>
                </Link>
            </div>
            <PostsCardList onDelete={getPosts} items={postsArr} />
        </div>
    </Container>
   )
}

export default Posts;