import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({addBookmarks}) => {
    const [blogs,setblogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setblogs(data)
        )
    },[])
    return (
        <div className="md:w-2/3">
            <h2>blogs:{blogs.length}</h2>
            <div>
                {
                    blogs.map(blog =><Blog 
                        key={blog.id} 
                        blog={blog}
                        addBookmarks={addBookmarks}></Blog>)
                }
            </div>
        </div>
    );
};
Blogs.propTypes= {
    addBookmarks : PropTypes.func
}
export default Blogs;