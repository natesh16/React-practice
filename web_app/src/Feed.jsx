import Post from "./Post"
const Feed = ({posts}) => {
  return ( 
    <div className="flex flex-col md:grid md:grid-cols-2 min-h-20 max-h-full w-full mx-auto my-auto ">
        {posts.map (post => (
          <Post key={post.id} post={post}/>
      ))} 
    </div>
  )
}

export default Feed