import axiosClient from '../Utils/axiosClient';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';

function BlogPage() {

    const [blog, setBlog] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const { data } = await axiosClient.get(`/blog/getallblogs`, { params: { page: page, limit: 10 } });
                setBlog(data);
            }
            catch (err) {
                console.log('Error: ', err.message);
            }
        }
        fetchBlogs();

    }, [page])

    // handling pagination
    const handlePage = (data) => {
        try {
            if (data === 'incr') {
                window.scrollTo({ top: 150, behavior: 'smooth' })
                setPage((prev) => prev + 1)

            }

            if (data === 'decr' && page != 0) {
                window.scrollTo({ top: 150, behavior: 'smooth' })
                setPage((prev) => prev - 1)

            }


        }
        catch (err) {
            console.log('Error: ', err.message);

        }
    }

    return (
        <>
            <div className='pt-35 mb-30'>

                {/* title */}
                <div className='text-center mb-20'>
                    <h1 className="text-5xl  font-bold mb-2">Stories That Spark Ideas</h1>
                    <p className='text-gray-500 font-semibold'>From tech to travel, lifestyle to learning — find it all here</p>
                </div>

                {/* displaying blogs on the screen */}
                <div className='flex flex-wrap gap-6 justify-center'>
                    {
                        blog?.map((item, idx) => (
                            <NavLink to={`/blogdetails/${item._id}`} key={idx} className='shadow-sm rounded-2xl flex-none cursor-pointer pb-4 hover:shadow-2xl hover:translate-0.5 transition duration-300'>
                                <div className=' rounded-t-2xl bg-white overflow-hidden'>
                                    <img src="/Images/boyWithBook.png" className='h-80 w-90 object-cover' alt="" />
                                </div>
                                <h2 className='font-bold text-2xl text-center mt-3 mb-5'>{item?.title}</h2>


                                <button className='text-gray-500 font-semibold text-sm hover:text-blue-500 cursor-pointer ml-4'>Read more →</button>
                            </NavLink>
                        ))
                    }
                </div>

                {/* paginatoin buttons */}
                <div className='flex justify-center items-center gap-2 mt-10'>

                    {/* previous button */}
                    <button
                        className={`btn btn-primary`}
                        onClick={() => handlePage('decr')}
                        disabled={(page === 0 ? true : false)}>
                        prev
                    </button>
                    <p className='font-semibold'>Page-{page}</p>

                    {/* Next button */}
                    <button
                        className='btn btn-primary'
                        onClick={() => handlePage('incr')}
                        disabled={(blog?.length < 10 ? true : false)}>
                        next
                    </button>
                </div>
            </div>
        </>
    )
}

export default BlogPage;