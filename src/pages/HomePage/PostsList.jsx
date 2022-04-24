import Grid from '../../components/UI/Grid';
import SinglePostCard from './SinglePostCard';

function PostsCardList(props) {
  return (
    <Grid>
      {props.items.map((pObj) => (
        <SinglePostCard
          cardType={props.cardType}
          onDelete={props.onDelete}
          key={pObj.id}
          {...pObj}
        />
      ))}
    </Grid>
  );
}

export default PostsCardList;