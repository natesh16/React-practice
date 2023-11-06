const Post = ({post}) => {
  return (
    <article className="bg-black">
      <div className="border-4 h-36 flex flex-col w-80 justify-center mx-auto my-5">
        <div className="mx-auto my-auto">
          <h1 className="text-3xl">{post.title}</h1>
          <p>{post.datetime}</p>
          <p>{(post.notes).length <=25 ? 
          post.notes
          : `${(post.notes).slice(0.25)}...`}</p>
        </div>  
      </div>
    </article>
  )
}

export default Post