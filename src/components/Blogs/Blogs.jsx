import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmarks, handleReading}) => {
    const [blogs, setBlogs] = useState([]);
    // console.log(blogs)
    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <>
         <main className=" md:w-2/3 space-y-6">
             {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleBookmarks={handleBookmarks}
                    handleReading={handleReading}></Blog>)
             }
         </main>
                    
        </>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropTypes.func.isRequired,
    handleReading: PropTypes.func.isRequired,
}

export default Blogs;