
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
   const {post_title} = bookmark;
    
    return (
        <div className=' bg-slate-100 m-4 p-3 rounded-md'>
            <h4>{post_title}</h4>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
};

export default Bookmark;