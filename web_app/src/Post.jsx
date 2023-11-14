const Post = ({post}) => {
  return (
    <article className="mx-auto my-auto">
      <div className="border-4 rounded-xl h-36 w-72 md:h-44 md:w-80 flex flex-col justify-center  md:mx-auto my-3 mx-3">
        <div className="mx-auto my-auto">
            <h1 className="text-2xl md:text-4xl font-semibold  md:my-4">{post.title}</h1>
            <p className="">{(post.notes).length <=25 ? 
            post.notes
            : `${(post.notes).slice(0,25)}...`}</p>
            <p className="text-xs">{post.datetime}</p>
          </div>
      </div>
    </article>
  )
}

export default Post