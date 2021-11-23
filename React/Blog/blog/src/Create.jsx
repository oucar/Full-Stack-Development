import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);

    // programmatic redirects
    const history = useNavigate();


    const handleSubmit = (e) => {
        // prevent page refreshing
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        // json api
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            console.log("new blog has been added!");
            setIsPending(false);
            // history(-1);
            history('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}>
                </textarea>

                <label>Author:</label>
                <select 
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="onur">onur</option>
                </select>

                
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding a Blog</button>}
                
                <h3>Preview: </h3>
                <p>{title} - @{author}</p>
                <p>{body}</p>
            </form>
        </div>
     );
}
 
export default Create;