const Post = ({Post}) => {
  return (
    <article className="">
      <p>{Post.title}</p>
      <p>{(Post.notes).length >=25 ? 
      Post.notes
      : `${(Post.notes).slice(0.25)}`}</p>
    </article>
  )
}

export default Post