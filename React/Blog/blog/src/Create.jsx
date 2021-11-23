import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form>
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

                <button>Add Blog</button>
                
                <h3>Preview: </h3>
                <p>{title} - @{author}</p>
                <p>{body}</p>
            </form>
        </div>
     );
}
 
export default Create;