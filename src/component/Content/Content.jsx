import { useEffect, useState } from 'react';
import './Content.css';
import Blog from '../Blog/Blog';

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
            <section>
                <h4>Bookmark Container</h4>
            </section>
        </div>
    );
};

export default Content;