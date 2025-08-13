import BlogCarousel from "./blogCarousel";

function LatestBlog() {

    return (
        <>
            <div className="my-30">

                {/* heading */}
                <h2 className="text-4xl font-bold mb-7 text-center">Latest blogs</h2>

                {/* blogs-Car */}
                <div className="  flex overflow-x-auto gap-3">
                    <BlogCarousel/>
                </div>
            </div>
        </>
    )
}

export default LatestBlog;