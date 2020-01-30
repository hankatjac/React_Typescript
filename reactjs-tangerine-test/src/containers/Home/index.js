import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidebar';


import blogData from '../../data/blog.json';
import Layout from '../../components/Layout';



const Home = props => {


    const imgAr = blogData.data.map(post => post.blogImage)
    return (
        <div>

            <Layout />


        </div>
    );
}

export default Home;