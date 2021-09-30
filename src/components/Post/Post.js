import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Post = (props) => {
    const { title, id } = props.post;
    const history = useHistory()

    const handleDetail = () => {
        history.push(`/posts/${id}`)
    };

    return (
        <div>
            <h3>Post of Id No: {id}</h3>
            <h4>Title: {title}</h4>
            <Link to={`/posts/${id}`}>Post Details</Link>
            <br />
            <button onClick={handleDetail}>See Details</button>
        </div>
    );
};

export default Post;