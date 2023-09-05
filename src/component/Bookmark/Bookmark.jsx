import "./Bookmark.css";

const Bookmark = ({ bookmarkBlog }) => {
    // console.log(bookmarkBlog);
    return (
        <div className="bookmark">
            <h4>Bookmarked Blogs : {bookmarkBlog.length}</h4>
            {
                bookmarkBlog.map((singleBookmark, idx) => <div key={idx} className="bookmarkBlogHeader">
                    <p>{singleBookmark.blog_title}</p>
                </div>)
            }


        </div>
    );
};

export default Bookmark;