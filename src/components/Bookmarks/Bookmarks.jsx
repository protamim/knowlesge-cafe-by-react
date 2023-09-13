import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readTime}) => {
    // console.log(bookmarks)
    return (
        <div className=" md:w-1/3">
            <div className=' p-4 mb-5 bg-slate-200 ring-2'>
                <h3 className=' text-xl text-green-600'>Spend time on read: {readTime} mins</h3>
            </div>
            <div className=' bg-slate-200 p-4'>
                <h2 className='m-4 text-xl'>Bookmarked Blogs: {bookmarks.length}</h2>
                {
                bookmarks.map((bookmark, index) => <Bookmark 
                    key={index}
                    bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readTime: PropTypes.number.isRequired,
}

export default Bookmarks;