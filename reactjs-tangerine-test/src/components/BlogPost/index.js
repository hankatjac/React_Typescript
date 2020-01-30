import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';

/**
* @author
* @function BlogPost
**/

const BlogPost = (props) => {

    const [post, setPost] = useState({
        title: "",
        url: "",
        thumbnailUrl: "",
    });
    const [id, setid] = useState('');


    useEffect(() => {
        const id = props.match.params.id;
        fetch('http://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => setPost(data.find(post => post.id == id)));
        setid(id)
    }, [post, id]);

    // if(post.thumbnailUrl == "") return null;

    return (
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">

                    <h1 className="postTitle">{post.title}</h1>

                </div>

                <div className="postImageContainer">
                    <img src={post.url} alt="Post Image" />

                </div>
            </Card>
        </div>
    )

}

export default BlogPost