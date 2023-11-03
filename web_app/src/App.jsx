import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Newpost from "./Newpost";
import About from "./About";
import Post from "./Post";
import Postpage from "./Postpage";
// import Footer from "./Footer";
// import Header from "./Header";
// import Home from "./Home";
// import Missing from "./Missing";
// import Navbar from "./Navbar";
// import Postpage from "./Postpage";
function App() {
  return (
    <div className=" w-screen h-screen ">
      <nav className="flex justify-between h-16 w-screen">
          <div className="flex h-full w-1/3">
            <h1 className="my-auto ml-5 text-4xl">LOGO</h1>
          </div>
          <div className="w-1/2 flex">
            <ul className=" my-auto flex justify-evenly w-full">
              <li><Link to="Home" className="my-auto ">Home</Link></li>
              <li><Link to="newpost" className=" my-auto ">Newpost</Link></li>
              <li><Link to="about" className=" my-auto ">About</Link></li>
              <li><Link to="postpage" className=" my-auto ">Postpage</Link></li>
            </ul>
          </div>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/newpost" element={<Newpost/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Postpage" element={<Postpage/>}/>
        <Route path="/postpage/:id" element={<Post/>}/>
      </Routes>
      {/* <Header/>
      <Home/>
      <Navbar/>
      <Newpost/>
      <Postpage/>
      <About/>
      <Missing/>
      <Footer/> */}
     </div>
  );
}

export default App;
