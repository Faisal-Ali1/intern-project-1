import { NavLink } from "react-router";

function Navbar(){
    return(
        
            <div className=" flex justify-between items-center">

                {/* logo */}
                <img src="./Images/logo.png" alt="logo"
                className="h-30"/>

                {/* Navbar-links */}
                <div className=" w-100 flex text-[#333333] bg-blue-200 font-sans justify-between items-center text-xl rounded-2xl px-10 pb-2 ">
                    <a href="" className="hover:text-white">Home</a>
                    <a href="" className="hover:text-white bg-orange-300 px-4 py-2 rounded-b-3xl">Blogs</a>
                    <a href="" className="hover:text-white ">CreateBlog</a>
                    
                </div>

                {/* login/profile */}
                <div className="font-semibold">
                    <NavLink className="hover:text-red-500">Login</NavLink>
                    <NavLink className="bg-gray-700 text-white px-5 py-3 hover:bg-black rounded-3xl ml-4">Get Started</NavLink>
                </div>
            </div>
        
    )
}

export default Navbar;