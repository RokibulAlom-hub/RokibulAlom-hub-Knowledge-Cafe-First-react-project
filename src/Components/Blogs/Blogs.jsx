import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
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
                        blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;