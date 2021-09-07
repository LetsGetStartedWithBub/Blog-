import React from 'react';
import { useHistory, useParams } from 'react-router';
import useFetch from "../Hooks/useFetch";
import "../Static/Styles/ReadBlogs.css";
import "../Static/Styles/Detail.css";

function Detail() {
    const { id } = useParams();
    const { data:blog , isPending , error} = useFetch("http://localhost:4000/app/detail/" + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch("http://localhost:4000/app/delete/"+blog.data._id, {
            method:'DELETE',
        }).then(() => {
            history.push('/blog');
        }) 
    }

    return (
        <div className="blog-body-element-container" >
            <div className="blog-body">
            
            {error && <div>{ error }</div>}
            {isPending && <div>Loading.........</div>}
            {blog && console.log(blog) }
            {blog && 
            <div>
                <h3>Blog Title : { blog.data.title }</h3>
                <br></br>
                <p>{blog.data.body}</p>
                <br></br>
                <h4>Written by : {blog.data.author}</h4>
                <br></br>
                <h6 style={{textAlign:'right'}}>Publish Date : {blog.data.date}</h6>
                <button onClick={handleDelete}>Delete</button>
            </div>}
            </div>

        </div>
    )
}

export default Detail
