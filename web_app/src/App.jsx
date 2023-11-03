import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Newpost from "./Newpost";
import About from "./About";
import Post from "./Post";
import Postpage from "./Postpage";
import Navbar from "./Navbar";
import Missing from "./Missing";
// import Footer from "./Footer";
// import Header from "./Header";
// import Home from "./Home";
// import Postpage from "./Postpage";
function App() {
  return (
    <div className=" w-screen h-screen bg-white text-black dark:bg-black dark:text-white">
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/newpost" element={<Newpost/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/postpage">
          <Route index element={<Postpage/>}/>
          <Route path=":id" element={<Post/>}/>
          <Route path="Newpost" element={<Newpost/>}/>
        </Route>
        <Route path="*" element={<Missing/>}/>
      </Routes>
      {/* <Header/>
      <Home/>
      <Newpost/>
      <Postpage/>
      <About/>
      <Missing/>
      <Footer/> */}
     </div>
  );
}

export default App;
