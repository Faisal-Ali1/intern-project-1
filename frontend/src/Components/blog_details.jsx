import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosClient from "../Utils/axiosClient";
import { useLocation } from "react-router";

function Blog_details() {

    const [blogData , setBlogData] = useState(null);
    const { blogId } = useParams();
    // console.log(blogId);
    const location = useLocation()
    // console.log(location.pathname);
    

    // fetching blog detail
    useEffect(() => {

        async function fetchData() {
            try {
                const {data} = await axiosClient.get(`/blog/getblog/${blogId}`);
                setBlogData(data);
            }
            catch (err) {
                console.log('Error: ', err.message);
            }
        }

        fetchData();
    }, [blogId]);

// console.log(blogData);


    return (
        <>
            <div className="">

                <h2 className="text-5xl font-bold">{blogData?.title}</h2>
                <img src='./Images/boyWithBook.png' alt="img" />
            </div>
        </>
    )
}

export default Blog_details;