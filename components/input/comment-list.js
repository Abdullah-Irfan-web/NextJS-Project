import classes from './comment-list.module.css';

function CommentList(props) {
  const {items}=props
  return (
    <ul className={classes.comments}>
      {items.map((item)=>(
        <li key={items.id}>
                <p>My comment is amazing!</p>
        <div>
          By <address>Maximilian</address>
        </div>
      </li>
     
      
      ))}
              
     
        
    </ul>
  );
}

export default CommentList;
