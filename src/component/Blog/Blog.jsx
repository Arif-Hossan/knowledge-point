import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {
    const { id, blog_cover, blog_title, blog, author_name, author_img,published_date, read_time } = props.blog;
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
                <button className='markRead'>Mark as read</button>
            </section>
        </div>
    );
};

export default Blog;

// // "id": "64f4cc8718f71c67467bc340",
// "blog_cover": "http://placehold.it/32x32",
// "blog_title": "Without Data Loading what does useEffect do?",
// "blog": "Nostrud ea eu reprehenderit amet eiusmod id tempor. Occaecat elit duis dolor cupidatat ad eu est sint duis nisi. Velit aliqua culpa dolor laborum ullamco ad est esse Lorem.\r\n",
// "author_name": "Lorie Riley",
// "autor_img": "http://placebeard.it/480",
// "read_time