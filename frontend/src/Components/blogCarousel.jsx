import React, { useState, useEffect } from "react";
import axiosClient from "../Utils/axiosClient";
import { motion, AnimatePresence } from "framer-motion";
import Blog_details from "./blog_details";
import { NavLink } from "react-router";


export default function BlogCarousel() {
  const [blogs, setBlogs] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev

  useEffect(() => {
    axiosClient.get('/blog/latestblog')
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err));
  }, []);

  const nextSlide = () => {
    if (startIndex + 3 < blogs.length) {
      setDirection(1);
      setStartIndex(startIndex + 3);
    }
  };

  const prevSlide = () => {
    if (startIndex - 3 >= 0) {
      setDirection(-1);
      setStartIndex(startIndex - 3);
    }
  };

  return (
    <div style={{ width: "80%", margin: "auto", textAlign: "center" }}>


      <div style={{ position: "relative", height: "300px", overflow: "hidden" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={startIndex} // triggers animation when index changes
            style={{
              display: "flex",
              gap: "1rem",
              position: "absolute",
              width: "100%",
              justifyContent:"center"
            }}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {blogs.slice(startIndex, startIndex + 3).map(blog => (

              // Blog-Card
              <NavLink to={`/blogdetails/${blog._id}`} key={blog._id} className=' p-5 rounded-2xl bg-[#fff] cursor-pointer flex-1 border border-[#ccc]'>
                <div 
                  

                >
                  <img src={'./Images/man-with-laptop.png'} alt={blog.title} style={{ width: "100%", borderRadius: "8px" }} className="object-contain h-50" />
                  <h3 className="font-bold">{blog.title}</h3>
                  
                </div>
               </NavLink>

            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div style={{ marginTop: "1rem", display: "flex" }} className=" relative h-12 items-center">

        {
          startIndex !== 0 ? (
            <button onClick={prevSlide} disabled={startIndex === 0} className="bg-blue-400 py-2 px-10 rounded-2xl absolute left-0 cursor-pointer hover:brightness-75 active:brightness-100">Prev</button>
          ) : ''
        }
        {
          startIndex < blogs.length - 1 ? (
            <button onClick={nextSlide} disabled={startIndex + 3 >= blogs.length} className="bg-blue-400 absolute right-0 py-2 px-10 rounded-2xl cursor-pointer hover:brightness-75 active:brightness-100">Next</button>
          ) : ''
        }
      </div>
    </div>
  );
}
