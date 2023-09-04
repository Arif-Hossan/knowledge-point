import { useEffect, useState } from 'react';
import './Content.css';
import Blog from '../Blog/Blog';
import SpentTime from '../SpentTime/SpentTime';
import Bookmark from '../Bookmark/Bookmark';

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
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </section>
            <section className='bookmark-container'>
                <SpentTime></SpentTime>
                <Bookmark></Bookmark>
            </section>
        </div>
    );
};

export default Content;