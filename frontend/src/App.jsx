import { Navigate, Route, Routes } from "react-router";
import LoginPage from "./Pages/login";
import SignUpPage from "./Pages/signup";
import HomePage from "./Pages/home";
import BlogPage from "./Pages/blogPage";
import CreateBlog from "./Pages/createBlogPage";
import Navbar from "./Components/common/navbar";
import Footer from "./Components/common/footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkAuth } from "./authSlice";
import Blog_details from "./Components/blog_details";


function App() {

  const { isAuthenticated} = useSelector((state)=> state.auth);
  // console.log('HideNavbar: ', hideNavBar);


  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(checkAuth());
  }, []);
  

  return (
    <>
      
      
       {isAuthenticated &&  <Navbar/>}

        <Routes>
          <Route path="/" element={ isAuthenticated ? <HomePage /> : <Navigate to={'/login'}/>}></Route>

          <Route path="/login" element={isAuthenticated? <Navigate to={'/'}/>:<LoginPage />}></Route>

          <Route path="/signup" element={isAuthenticated? <Navigate to={'/'}/>: <SignUpPage />}></Route>

          <Route path="/blog" element={ isAuthenticated? <BlogPage/>: <Navigate to={'/login'}/>}></Route>

          <Route path="/createblog" element={isAuthenticated? <CreateBlog/> : <Navigate to={'/login'}/>}></Route>
          
          <Route path="/blogdetails/:blogId" element={<Blog_details/>}></Route>
        </Routes>
      <Footer />

    </>
  )
}

export default App;