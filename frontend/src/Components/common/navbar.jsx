import { useState } from "react";
import { NavLink, useLocation } from "react-router";
import { useSelector } from "react-redux";
import ProfileHover from "../profileHover";

function Navbar() {

    const location = useLocation()
    const [currentTab, setCurrentTab] = useState(location.pathname || '/');
    // console.log(currentTab);

    const { isAuthenticated, user } = useSelector((state) => state.auth);
    // console.log('user: ', user);


    return (
        <>
            {
                // if user has logged in then show navbar else not
                isAuthenticated ?
                    (
                        <div className=" flex justify-between items-center px-20 border">

                            {/* logo */}
                            <img src="./Images/logo.png" alt="logo"
                                className="h-30" />

                            {/* Navbar-links */}
                            <div className=" w-150 flex text-[#333333] bg-blue-200 font-sans justify-between items-center text-xl rounded-2xl px-10 pb-2 ">

                                {/* Home */}
                                <NavLink to={'/'} className={`hover:text-white  w-40 text-center font-semibold ${currentTab === '/' ? "bg-orange-300 px-4 py-2 rounded-b-3xl text-white" : ""}`}><button onClick={() => setCurrentTab(location?.pathname)}>Home</button></NavLink>

                                {/* Blogs */}
                                <NavLink to={'/blog'} className={`hover:text-white  w-40 text-center font-semibold ${currentTab === '/blog' ? "bg-orange-300 px-4 py-2 rounded-b-3xl text-white" : ""}`}><button onClick={() => setCurrentTab(location?.pathname)}>Blogs</button></NavLink>

                                {/* createBlog */}
                                <NavLink to={'/createblog'} className={`hover:text-white w-40 text-center font-semibold ${currentTab === '/createblog' ? "bg-orange-300 px-4 py-2 rounded-b-3xl text-white" : ""}`}><button onClick={() => setCurrentTab(location?.pathname)}>CreateBlog</button></NavLink>

                            </div>

                            {/* login/profile */}
                            {
                                isAuthenticated ? (<button onClick={() => console.log('hllo world')}> <ProfileHover /> </button>)
                                    : (
                                        <div className="font-semibold border">
                                            <NavLink to='/login' className="hover:text-red-500">Login</NavLink>
                                            <NavLink to='/signup' className="bg-gray-700 text-white px-5 py-3 hover:bg-black rounded-3xl ml-4">Get Started</NavLink>
                                        </div>
                                    )
                            }
                        </div>
                    ) : ''
            }

        </>
    )
}

export default Navbar;