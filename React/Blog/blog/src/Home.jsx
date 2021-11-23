import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    // ! blogs
    // ? will be passed using Props (you can pass data to your child --> <BlogList/>)
    const [blogs, setBlogs] = useState([]);

    // ! title
    const title = "All Blogs";

    // ! loading screen
    const [isPending, setIsPending] = useState(true);

    // fires on every render
    // ? [] -> only runs in the first render
    // ? [total] -> only runs if the total changes 
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                // parses json into js
                return res.json();
            })
            .then((data) => {
                // console.log(data);
                setBlogs(data);
                setIsPending(false);
            })

        console.log("Use effect!")
    }, [])


    return (  
        <div className="home">

            { isPending && <div>Loading...</div>}

            {/* passing props */}
            <BlogList blogs={blogs} title={title}/>
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" /> */}
        </div>
    );
}
 
export default Home;