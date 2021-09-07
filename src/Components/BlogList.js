import { Link } from "react-router-dom";
import "../Static/Styles/BlogList.css";

const BlogList = ({ blogs  }) => {
    return ( 
        <div className="blog-list-container">
            {blogs.data.map(blog => (
                <div className="blog-list-element"  key={blog._id}>
                <Link to={"/detail/"+String(`${blog._id}`)}>
                    <h3>{blog.title}</h3>
                    <p>Written by : {blog.author}</p>
                </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;