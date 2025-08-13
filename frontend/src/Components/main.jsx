import LatestBlog from "./latestBlogs";
import { NavLink } from "react-router";
import Testimonials from '../Components/testimonials';
import Footer from "./common/footer";


function Main() {



    return (
        <>
        {/* main  */}
            <div>
                
                <div className=" mt-20 text-center">

                    {/* heading */}
                    <h2 className="text-5xl font-bold tracking-wide">Everyone has a story to tell</h2>

                    {/* sub-heading */}
                    <p className="w-120 mx-auto mt-5 text-gray-500 font-semibold">Paper & Pixels is a calm and beautiful platform where anyone can share stories and ideas. It removes the need for a big following, focuses on meaningful content, and helps connect writers with the right readers.</p>
                </div>

                {/* latest blogs */}
                <LatestBlog />

                {/* 2nd heading with image */}
                <div className="grid grid-cols-2 ">
                    <div className=" flex justify-center">

                        {/* img */}
                        <img src="./Images/girl with books.png" alt="img" className="h-120 w-120 object-contain" />
                    </div>

                    {/* caption */}
                    <div className=" flex flex-col justify-center ">
                        <h3 className="text-3xl font-bold">Your voice matters.</h3>
                    
                        <p className="text-gray-500 font-semibold">Somewhere, someone needs to hear your story, your lesson, your idea.
                            Start writing — not to impress, but to express.
                            The world is waiting for your words.</p>

                        {/* call-to-action */}
                        <NavLink className=" text-white text-center w-40 py-3 bg-black rounded-3xl mt-5  font-semibold skeleton">Get Started</NavLink>
                    </div>
                </div>

                {/* testimonials */}
                    <Testimonials/>

                
            </div>
        
        </>
    )
}

export default Main;