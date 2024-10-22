import Bookmark from "../Bookmark/Bookmark";
import PropTypes from "prop-types";
const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks);
    
    return (
        <div className="md: w-1/3">
           <h4>bookmarks:{bookmarks.length}</h4>
           {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
           }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks : PropTypes.object
}
export default Bookmarks;