import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './index.css';

function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/posts/${id}`)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.log("Error fetching post:", error);
            });
    }, [id]);

    return (
        <div className='container-postDetails'>
            {post ? (
                <>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </>
            ) : (
                <p className='parag'>Yuklanmoqda...</p>
            )}
        </div>
    );
}

export default PostDetails;
