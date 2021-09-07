import React from 'react';
import BlogList from '../Components/BlogList';
import useFetch from '../Hooks/useFetch';
import "../Static/Styles/ReadBlogs.css"
function ReadBlogs() {
    const {data:blogs, isPending, error} = useFetch("http://localhost:4000/app/read"); 

    return (
        <div className="read-blog-body">
            <h2>Here are all the blogs</h2>
            {error && <div>{ error }</div>}
            {isPending && <div>Loading.........</div>}
            {blogs && console.log(blogs) }
            {blogs && <BlogList blogs = {blogs} />}
        </div>
    )
}

export default ReadBlogs
