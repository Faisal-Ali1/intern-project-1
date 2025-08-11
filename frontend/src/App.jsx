import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./Pages/login";
import SignUpPage from "./Pages/signup";
import HomePage from "./Pages/home";
import BlogPage from "./Pages/blogPage";
import CreateBlog from "./Pages/createBlogPage";
import Navbar from "./Components/common/navbar";
import Footer from "./Components/common/footer";


function App() {
  return (
    <>

      
      

      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/blog" element={<BlogPage/>}></Route>
          <Route path="/createblog" element={<CreateBlog/>}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  )
}

export default App;