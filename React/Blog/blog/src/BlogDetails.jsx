import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    // grab route parameters
    const { id } = useParams();

    const { data: blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`);

    return ( 
        <div className="blog-details">
            {error && <div>{error}</div>}
            {!error && isPending && <div>Loading...</div>}
            
            <article>
            <h2>{blog.title} - {id}</h2>
            <p>Written by @{blog.author}</p>
            <div>{blog.body}</div>
            </article>

        </div>
     );
}
 
export default BlogDetails;