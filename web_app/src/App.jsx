import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Newpost from "./Newpost";
import About from "./About";
import Post from "./Post";
import Postpage from "./Postpage";
import Navbar from "./Navbar";
import Missing from "./Missing";
import Postlayout from "./Postlayout";
import { useState } from "react";
// import Footer from "./Footer";
// import Header from "./Header";
// import Home from "./Home";
// import Postpage from "./Postpage";
function App() {
  const [posts,setpost] = useState([
    // {
    //   id:1,
    //   title: "First post",
    //   datetime: 'Jnue 01 ,2021 11:17:36 PM',
    //   notes: "Made with unique ideas"
    // },
    // {
    //   id:2,
    //   title:" second post",
    //   datetime:' Jnue 17 ,2021 12:06:06 PM',
    //   notes:" Have some think new"
    // },
    // {
    //   id:3,
    //   title: "Third post",
    //   datetime: 'Jnue 01 ,2021 11:17:36 PM',
    //   notes: "Load your mood"
    // },
    // {
    //   id:4,
    //   title:" Fourth post",
    //   datetime:' Jnue 01 ,2021 11:17:36 PM',
    //   notes:"Think high fly above the sky lorem lorem lorem lorem lorem"
    // }
  ])
  const [search,setsearch] = useState('');
  const [posttitle,setposttitem] = useState('');
  const [postbody,setpostbody] =useState('');
  const handlesubmite=()=>{
    console.log("Submited!")
  }
  // const [searchresult,setsearchresult]=useState([])
  return (
    <div className=" w-screen min-h-screen max-h-full bg-red-600 text-black dark:bg-black dark:text-red-600 ">
      <Navbar 
        title={"Nest.org"}
        search={search}
        setsearch={setsearch}
        />
      <Postpage posts={posts}/>
      <Newpost 
        postbody={postbody}
        posttitle={posttitle}
        setpostbody={setpostbody}
        setposttitem={setposttitem}
        handlesubmite={handlesubmite}
      />
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/newpost" element={<Newpost/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/postpage" element={<Postlayout/>}>
          <Route index element={<Postpage/>}/>
          <Route path=":id" element={<Post/>}/>
          <Route path="Newpost" element={<Newpost/>}/>
        </Route>
        <Route path="*" element={<Missing/>}/>
      </Routes>
      {/* <Header/>
      <Home/>
      <About/>
      <Missing/>
      <Footer/> */}
     </div>
  );
}

export default App;
