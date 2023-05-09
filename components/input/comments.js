import { useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const[comment,setcommnts]=useState([])
useEffect(()=>{
  if(showComments){
    fetch('/api/comment/'+eventId)
    .then(res=>{
      return res.json();
    })
    .then(data=>{
      console.log(data)
      setcommnts(data)
    })
  }
},[showComments])
  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    // send data to API
    
    fetch('/api/comment/'+eventId,{
      method:'POST',
      body:JSON.stringify(commentData),
      headers:{
        "Content-Type":"application/json"
      }
      
    })
    .then(res=>{
      return res.json()
    })
    .then(dataval=>{
      console.log(dataval)
      console.log(commentData)
    })
    
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comment}/>}
    </section>
  );
}

export default Comments;
