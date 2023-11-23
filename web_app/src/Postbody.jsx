import React from 'react'
import { useParams} from 'react-router-dom'
const Postbody = ({posts}) => {
const { id }=useParams();
const post=posts.find(post => (post.id).toString() === id)
  return (
  <main>
    {post &&
    <>
     <h2>WELL DOWN!...</h2>
    </>
          }{!post &&
    <>
        <h1>POST NOT FOUND!</h1>
    </>
      }
    </main>
  )
}

export default Postbody