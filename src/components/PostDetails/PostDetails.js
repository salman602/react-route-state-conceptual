import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const PostDetails = () => {
    const { postId } = useParams();
    const [singlePost, setSinglePost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSinglePost(data))
    }, [postId])
    return (
        <Container>
            <h2>Post Title: {singlePost?.title}</h2>
            <p>Body: {singlePost?.body}</p>

        </Container>
    );
};

export default PostDetails;