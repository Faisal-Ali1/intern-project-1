import axios from 'axios';
import axiosClient from '../Utils/axiosClient';
import { useState, useEffect } from 'react';
import Blog_details from '../Components/blog_details';

function BlogPage() {

    const [blog, setBlog] = useState(null);
    const [page, setPage] = useState(1);
    // console.log(blog );
    // console.log(page);


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
                window.scrollTo({ top: 150 , behavior:'smooth'})
                setPage((prev) => prev + 1)
                
            }

            if (data === 'decr' && page != 0){
                window.scrollTo({ top: 150 , behavior:'smooth'})
                setPage((prev) => prev - 1)
                
            }
                

        }
        catch (err) {
            console.log('Error: ', err.message);

        }
    }

    return (
        <>
            <div className='mt-10 mb-30'>
                
                {/* title */}
                <div>
                    <h1 className="text-5xl text-center font-bold mb-10">All Blogs</h1>
                </div>

                {/* displaying blogs on the screen */}
                <div className='flex flex-wrap gap-2 justify-center border'>
                    {
                        blog?.map((item, idx) => (
                            <div key={idx} className='border rounded-2xl p-2 flex-none bg-amber-200 cursor-pointer'>
                                <div className='border rounded-t-2xl bg-white overflow-hidden'>
                                <img src="/Images/boyWithBook.png" className='h-50' alt="" />
                                </div>
                                <h2 className='font-bold text-xl'>{item?.title}</h2>
                                <p>{item?.blog_body}</p>
                                <button className='text-blue-600'>Read more...</button>
                            </div>
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

                    {/* Next button */}
                    <button
                        className='btn btn-primary'
                        onClick={() => handlePage('incr')}
                        disabled={(blog?.length < 10 ? true : false )}>
                        next
                    </button>
                </div>
            </div>
        </>
    )
}

export default BlogPage;