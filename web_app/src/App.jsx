import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Newpost from "./Newpost";
import About from "./About";
// import Footer from "./Footer";
// import Header from "./Header";
// import Home from "./Home";
// import Missing from "./Missing";
// import Navbar from "./Navbar";
// import Postpage from "./Postpage";
function App() {
  return (
    <div className=" w-screen h-screen ">
      <nav>
          <ul>
            <li><Link to="Home">Home</Link></li>
            <li><Link to="newpost">Newpost</Link></li>
            <li><Link to="about">About</Link></li>
          </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newpost" element={<Newpost/>}/>
        <Route path="/about" element={<About/>}/>

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
