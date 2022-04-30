import Comment from './Comments'

const Post = ({ title, body, id }) => {
  return <div style={{ textAlign: 'left', marginBottom: '12px'}}>
    <h3>
      {title}
    </h3>
    <p>{body}</p>
    <Comment comments={id}/>
  </div>
}

export default Post;
