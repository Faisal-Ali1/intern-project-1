import React, { useState, useEffect } from "react";
import axiosClient from "../Utils/axiosClient";
import { motion, AnimatePresence } from "framer-motion";

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
    <div style={{ width: "80%", margin: "auto", textAlign: "center"}}>
      

      <div style={{ position: "relative", height: "300px", overflow: "hidden"}}>
        <AnimatePresence mode="wait">
          <motion.div
            key={startIndex} // triggers animation when index changes
            style={{
              display: "flex",
              gap: "1rem",
              position: "absolute",
              width: "100%",
            }}
            initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {blogs.slice(startIndex, startIndex + 3).map(blog => (
              <div key={blog.id} style={{
                flex: "1",
                border: "1px solid #ccc",
                padding: "1rem",
                background: "#fff",
                borderRadius: "8px"
              }}>
                <img src={'./Images/man-with-laptop.png'} alt={blog.title} style={{ width: "100%", borderRadius: "8px" }} className="object-contain h-50" />
                <h3>{blog.title}</h3>
                <p>{blog.blog_body}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div style={{ marginTop: "1rem", display: "flex" }} className=" relative h-12 items-center">
        
        {
            startIndex !== 0 ? (
                <button onClick={prevSlide} disabled={startIndex === 0} className="bg-blue-400 py-2 px-10 rounded-2xl absolute left-0 cursor-pointer hover:brightness-75 active:brightness-100">Prev</button>
            ): ''
        }
        {
            startIndex < 7 ? (
                <button onClick={nextSlide} disabled={startIndex + 3 >= blogs.length} className="bg-blue-400 absolute right-0 py-2 px-10 rounded-2xl cursor-pointer hover:brightness-75 active:brightness-100">Next</button>
            ): ''
        }
      </div>
    </div>
  );
}
