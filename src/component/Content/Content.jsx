import { useEffect, useState } from 'react';
import './Content.css';
import Blog from '../Blog/Blog';
import SpentTime from '../SpentTime/SpentTime';
import Bookmark from '../Bookmark/Bookmark';

const Content = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    const [spentTime, setSpentTime] = useState([]);

    const handleSpentReadTime = (blog) => {
        const readTime = blog.read_time;
        const newSpentTime = [...spentTime,readTime];
        // const newSpentTime = newSpentTimeArray.reduce((initial,current)=>initial+current,0);
        setSpentTime(newSpentTime)

    }

    return (
        <div className='content-container'>
            <section className='blog-container'>
                {
                    blogs.map(blog =>
                        <Blog
                            key={blog.id}
                            blog={blog}
                            handleSpentReadTime={handleSpentReadTime}
                        ></Blog>)
                }
            </section>
            <section className='bookmark-container'>
                <SpentTime spentTime={spentTime}></SpentTime>
                <Bookmark></Bookmark>
            </section>
        </div>
    );
};

export default Content;