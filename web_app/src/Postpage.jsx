import React from 'react'
import Feed from './Feed'
const Postpage = ({posts}) => {
  return (
    <main>
      {posts.length ? (
         <Feed posts={posts}/>
      ):(
        <p>NO POST HAS BEEN FOUND!</p>
    )}
    </main>
  )
}

export default Postpage