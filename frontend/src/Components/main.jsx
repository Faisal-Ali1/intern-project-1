import LatestBlog from "./latestBlogs";

function Main() {

    

    return (
        <>
            <div>
                <div className="border mt-10 text-center">
                    <h2 className="text-3xl font-bold tracking-wide">Everyone has a story to tell</h2>
                    <p className="w-120 mx-auto mt-5 text-gray-500 font-semibold">Paper & Pixels is a calm and beautiful platform where anyone can share stories and ideas. It removes the need for a big following, focuses on meaningful content, and helps connect writers with the right readers.</p>
                </div>

                {/* latest blogs */}
                <LatestBlog/>

                {/* 2nd heading with image */}
                <div className="grid grid-col-2">
                    <div className="border">
                        <img src="./Images/man-with-laptop.png" alt="img" className="h-120" />
                    </div>
                    <div className="border"></div>
                </div>
            </div>
        </>
    )
}

export default Main;