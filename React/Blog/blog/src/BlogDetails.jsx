import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {

    // grab route parameters
    const { id } = useParams();

    const { data: blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`);

    const history = useNavigate();

    const handleClick = () => {
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: "DELETE",
        }).then(() => {
            history('/');
        })

    }

    return ( 
        <div className="blog-details">
            {error && <div>{error}</div>}
            {!error && isPending && <div>Loading...</div>}
            
            <article>
            <h2>{blog.title} - {id}</h2>
            <p>Written by @{blog.author}</p>
            <div>{blog.body}</div>

            <button onClick={handleClick}>delete</button>
            </article>

        </div>
     );
}
 
export default BlogDetails;