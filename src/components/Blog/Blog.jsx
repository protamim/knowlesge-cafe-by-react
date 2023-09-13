import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({blog, handleBookmarks, handleReading}) => {
    // console.log(blog);
    const {id, author_img, author_name, cover_img, posted_date, reading_time, post_title, hashtag} = blog;
    return (
        <div className=' space-y-5 border-b-2 pb-5'>
            <div>
                 <img className=' w-full' src={cover_img} alt="" />
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-3'>
                    <div className='w-14'>
                        <img className='rounded-full h-14 w-14 object-cover'
                         src={author_img} alt="" />
                    </div>
                    <div>
                        <h4 className='text-lg font-bold text-slate-600'>{author_name}</h4>
                        <span className='text-sm text-gray-400'>{posted_date}</span>
                    </div>
                </div>
                <div className=' flex gap-2 items-center'>
                    <span>{reading_time} mins read</span>
                    <button onClick={() => handleBookmarks({blog})} className=' hover:text-gray-400 transition-all'>
                        <FaRegBookmark></FaRegBookmark>
                        </button>
                </div>
            </div>
            <div>
                <h2 className='text-2xl'>{post_title}</h2>
            </div>
            <div className=' flex gap-2'>
                {
                    hashtag.map((hash, index) => <span 
                    key={index}>
                        <a href='#' className=' text-gray-500'>
                            {hash}</a>
                        </span>)
                }
            </div>
            <button onClick={() => handleReading(reading_time, id)}
            className=' text-blue-600 underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleReading: PropTypes.func.isRequired,
}

export default Blog;