import React, { useState } from 'react';
import { useHistory } from 'react-router';
import "../Static/Styles/WriteBlog.css";

function WriteBlog() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const blog = { title, body, author };
        setIsPending(true);

        fetch("http://localhost:4000/app/create",{
            method:"POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(blog)
        }).then(() => {
            console.log("Data added");
            setIsPending(false);
            history.push("./blog");
        })
    }

    return (
        <div className="blog-writting-body">
        <div className="input-body">
        <form onSubmit={handleSubmit}>
            <h2>Add New Blog</h2>
            <label>Blog Title :</label>
            <input 
            required
            type="text"
            value = {title}
            onChange ={(e) => setTitle(e.target.value)}
            />
            <label>Blog Message :</label>
            <textarea
            required
            value={body}
            onChange = {(e) => setBody(e.target.value)}
            ></textarea>
            <label>Author Name :</label>
            <input
            required
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            />
            {isPending && <button type="submit" disabled>Adding Blog.......</button>}
            {!isPending && <button type="submit">Add Blog</button>}
        </form>
        </div>
        <div className="output-body">
            <h2>Blog Preview</h2>
            <br></br>
            <h2>Blog Title : {title}</h2>
            <br></br>
            <div>Article : {body}</div>
            <br></br>
            <h4>Author Name : {author}</h4>
        </div>
            
        </div>
    )
}

export default WriteBlog
