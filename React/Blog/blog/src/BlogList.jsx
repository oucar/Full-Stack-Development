// BlogList template -> easier to maintain and use across different places

const BlogList = ({blogs, title}) => {

    // const blogs = props.blogs;
    // const title = props.title;

    console.log(blogs, title);

    return ( 
        <div className="blog-list">
            {blogs.map((blog) => (
            // id must be unique! 
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by: @{blog.author}</p>
            </div>
            ))}
        </div>
     );
}
 
export default BlogList;