const Post = ({post}) => {
  return (
    <article className="mx-auto my-auto">
      <div className="border-4 rounded-xl h-44 flex flex-col w-80 justify-center mx-auto my-5">
        <div className="w-full h-full flex flex-col justify-center">
          <div className="mx-auto my-auto">
            <h1 className="text-4xl font-semibold my-4">{post.title}</h1>
            <p className="">{(post.notes).length <=25 ? 
            post.notes
            : `${(post.notes).slice(0,25)}...`}</p>
            <p className="text-xs">{post.datetime}</p>
          </div>
        </div>  

      </div>
    </article>
  )
}

export default Post