import React from 'react'
import Feed from './Feed'
const Postpage = ({posts}) => {
  return (
    <main className='min-h-screen w-screen max-h-full '>
      {posts.length ? (
         <Feed posts={posts}/>
      ):(
        <p className='mx-auto my-auto text-6xl'>NO POST HAS BEEN FOUND!</p>
    )}
    </main>
  )
}

export default Postpage