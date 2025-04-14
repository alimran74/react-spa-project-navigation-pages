import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/posts/${id}`);
    }
    return (
        <div style={{border: '2px solid aqua', margin:'8px'}}>
            <h3>{title}</h3>
            <Link to={`/Posts/${id}`}>
            <button>Show Details</button></Link>
            <button onClick={handleNavigate}>Details of : {id}</button>
        </div>
    );
};

export default Post;