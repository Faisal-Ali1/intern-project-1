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

  const { isAuthenticated, loading} = useSelector((state)=> state.auth);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(checkAuth());
  }, []);

  // add loading when data is loading
  if(loading){
        return(
            <>
            <div className=' flex items-center justify-center text-5xl h-[100vh]'>
                <span className="loading loading-spinner loading-xs"></span>
            </div>
            </>
        )
    }
  
  return (
    <>
      
    
        <Navbar/>

        <Routes>
          <Route path="/" element={<HomePage />}></Route>

          <Route path="/login" element={isAuthenticated? <Navigate to={'/'}/>:<LoginPage />}></Route>

          <Route path="/signup" element={isAuthenticated? <Navigate to={'/'}/>: <SignUpPage />}></Route>

          <Route path="/blog" element={<BlogPage/>}></Route>

          <Route path="/createblog" element={isAuthenticated? <CreateBlog/> : <Navigate to={'/login'}/>}></Route>
          
          <Route path="/blogdetails/:blogId" element={<Blog_details/>}></Route>
        </Routes>
      <Footer />

    </>
  )
}

export default App;