import PropTypes from 'prop-types'; // ES6
import { GoBookmark } from "react-icons/go";
const Blog = ({blog}) => {
  const {cover_img,title,author_img,author_name,
    reading_time,hashtags,posted_date
  } = blog;
    
    return (
        <div>
            <div>
                <img className='max-w-full' src={cover_img} alt="" />
                <h2>{title}</h2>
                <div className='flex justify-between items-center '>
                    <div className='md:flex justify-center items-center gap-3'>
                        <img className='h-9' src={author_img} alt="" />
                        <div>
                            <h3 className='text-2xl'>{author_name}</h3>
                            <span>{posted_date}</span>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <p>{reading_time}min read</p>
                        <button><GoBookmark /></button>
                    </div>
                    
                </div>
                <p className='space-x-3'>
                        {
                            hashtags.map((hash,idx)=> <span key={idx}><a href="">{hash}</a></span>)
                        }
                    </p>
                <a className=' text-violet-500' href="">Mark as Read</a>   
            </div>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isrequired
}
export default Blog;