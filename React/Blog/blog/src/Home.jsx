import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    // ! title
    const title = "All Blogs";

    // call data: "blogs" in this context
    const { data:blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (  
        <div className="home">

            {error && <div>{error}</div>}
            {!error && isPending && <div>Loading...</div>}

            {/* passing props */}
            <BlogList blogs={blogs} title={title}/>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" /> */}
        </div>
    );
}
 
export default Home;