import { useEffect, useState } from 'react';
import './Content.css';
import Blog from '../Blog/Blog.jsx';
import SpentTime from '../SpentTime/SpentTime';

const Content = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className='content-container'>
            <section className='blog-container'>
                <h4>Blog Container :{blogs.length}</h4>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </section>
            <section className='bookmark-container'>
                <h4>Bookmark Container</h4>
                <SpentTime></SpentTime>
                
            </section>
        </div>
    );
};

export default Content;