import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Postbody from "./Postbody";
import About from "./About"; 
import Newpost from "./Newpost";
import Postpage from "./Postpage";
import Navbar from "./Navbar";
import Missing from "./Missing";
import { useEffect, useState } from "react";
import { format } from "date-fns";

function App() {
  const [posts, setpost] = useState([
    {
      id: 1,
      title: "First post",
      datetime: 'Jnue 01 ,2021 11:17:36 PM',
      notes: "Made with unique ideas"
    },
    {
      id: 2,
      title: " second post",
      datetime: ' Jnue 17 ,2021 12:06:06 PM',
      notes: " Have some think new"
    },
    {
      id: 3,
      title: "Third post",
      datetime: 'Jnue 01 ,2021 11:17:36 PM',
      notes: "Load your mood"
    },
    {
      id: 4,
      title: " Fourth post",
      datetime: ' Jnue 01 ,2021 11:17:36 PM',
      notes: "Think high fly above the sky lorem lorem lorem lorem lorem"
    }
  ])

  const [search,setsearch] = useState('');
  const [posttitle,setposttitem] = useState('');
  const [postbody,setpostbody] = useState('');
  const [searchresult,setsearchresult] = useState([]);
  
  const handellog=(e)=>{
    console.log("HELLO WORLD!")
  }

  useEffect(() => {
    const filteresult = posts.filter((post) =>
      ((post.notes).toLowerCase()).includes(search.toLowerCase()) ||
      ((post.title).toLowerCase()).includes(search.toLowerCase()));
   
      setsearchresult(filteresult.reverse());
  },[posts,search]);
  
  const handlesubmite = (e) => {
    e.preventdefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM DD,YYYY PP");
    const newpost = { id, title: posttitle, datetime:datetime, notes: postbody };
    const allPosts = [...posts, newpost];
    setpost(allPosts);
    setpostbody('');
    setposttitem('');
  }
  
  return (
    <div className=" w-screen min-h-screen max-h-full bg-red-600 text-black dark:bg-black dark:text-red-600 ">
      <Navbar
        title={"Nest.org"}
        search={search}
        setsearch={setsearch}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Missing />} />
        <Route path="/newpost" element={<Newpost />} />

       
        <Route path="/postpage">
           <Route index element={<Postpage posts={searchresult} 
          />}/>
        </Route>
        <Route path="/post">
            <Route index element={<Newpost
              postbody={postbody}
              posttitle={posttitle}
              setpostbody={setpostbody}
              setposttitem={setposttitem}
              handlesubmite={handlesubmite}
              />} />
            <Route path=":id" element={<Postbody
              posts={posts}
              />} />
        </Route>
      </Routes>
      {/* <Header/>
      <Newpost
        
      />
      <About/>
      <Home/>
      <Missing/>
      <Footer/> */}
    </div>
  );
}
export default App;
