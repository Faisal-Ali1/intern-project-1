import axios from 'axios';
import axiosClient from '../Utils/axiosClient';
import {useState, useEffect} from 'react';

function BlogPage(){

    const [ blog , setBlog ] = useState(null);
    console.log(blog);
    
    useEffect(()=>{

        async function fetchBlogs(){
            
        try{
            const {data} = await axiosClient.get('/blog/getallblogs');
            setBlog(data);
            
        }
        catch(err){
            console.log('Error: ', err.message);
        }
    }
        fetchBlogs();
    
    } , [])

    return(
        <>
        <div className='mt-10 mb-30'>
            <div>
                <h1 className="text-5xl text-center font-bold mb-10">All Blogs</h1>
            </div>

            <div className='flex flex-wrap gap-2 justify-center'>
                {
                    blog?.map( (item , idx )=> (
                       <div className='border rounded-2xl p-2 flex-none'>
                        <img src="/Images/boyWithBook.png" className='h-50' alt="" />
                             <h2>{item?.title}</h2>
                             <p>{item?.blog_body}</p>
                       </div>
                    ))
                }
            </div>
            </div>
        </>
    )
}

export default BlogPage;