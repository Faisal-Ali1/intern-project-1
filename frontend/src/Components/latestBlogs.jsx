import BlogCarousel from "./blogCarousel";

function LatestBlog() {

    return (
        <>
            <div className="my-30">

                {/* heading */}
                <h2 className="text-5xl font-bold mb-10 text-center">Latest blogs</h2>

                {/* blogs-Carousel */}
                <div className="  flex overflow-x-auto gap-3">
                    <BlogCarousel/>
                </div>
            </div>
        </>
    )
}

export default LatestBlog;