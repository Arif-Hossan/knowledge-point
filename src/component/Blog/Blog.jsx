import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const { id, blog_cover, blog_title, blog, author_name, author_img,published_date, read_time } = props.blog;
    const handleSpentReadTime = props.handleSpentReadTime;
    // console.log(props.blog);
    // get how many days of publishing the bolg from current date
    const currentDate = new Date();
    const publishedDate = new Date(published_date)
    const publishedDay = publishedDate.getDay() - currentDate.getDay();
    
    return (
        <div className='single-blog'>
            <img className='blog-cover' src={blog_cover} alt="" />
            <section className='blog-top'>
                <div className='author-info'>
                    <img src={author_img} alt="" />
                    <div>
                        <p>{author_name}</p>
                        <p>{publishedDay} Days ago</p>
                    </div>
                </div>
                <div className='reading-time'>
                    <p>{read_time} min read</p>
                    <button><FontAwesomeIcon icon={faBookmark} /></button>
                </div>
            </section>
            <section>
                <h2 className='blog-title'>{blog_title}</h2>
                <button onClick={()=>handleSpentReadTime(props.blog)} className='markRead'>Mark as read</button>
            </section>
        </div>
    );
};

export default Blog;
