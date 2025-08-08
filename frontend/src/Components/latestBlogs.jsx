function LatestBlog(){

    const arr = new Array(10).fill(1);
    console.log(arr);

    return(
        <>
            <div className="my-30">

                {/* heading */}
                    <h2 className="text-3xl font-semibold mb-5">Latest blogs</h2>

                    {/* latest-blogs */}
                    <div className="  flex overflow-x-auto gap-3">
                        {
                            arr.map((item , idx) => (
                                <div className="h-50 w-50 skeleton flex-none" key={idx}></div>
                            ))
                        }
                    </div>
                </div>
        </>
    )
}

export default LatestBlog;