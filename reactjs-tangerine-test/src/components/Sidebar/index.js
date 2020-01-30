import React, { useState, useEffect } from 'react';
import './style.css';
import Card from '../UI/Card';


import { NavLink } from 'react-router-dom';

/**
* @author
* @function Sidebar
**/

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // const posts = blogPost.data;
        // setPosts(posts);

        fetch('http://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(data => setPosts(data));
    }, [posts]);

    return (
        <div className="sidebarContainer" style={{
            width: props.width
        }}>
            <Card style={{ marginBottom: '20px', padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Album</span>
                </div>

                <div className="recentPosts">
                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.id}`}>
                                    <div className="recentPost">
                                        <h3>{post.title}</h3>
                                    
                                    </div>
                                </NavLink>

                            );
                        })
                    }
                </div>

            </Card>
        </div>

    )

}

export default Sidebar