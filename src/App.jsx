import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setbookmarks]=useState([]);

  const addBookmarks = blog =>{
     const newBookMarks = [...bookmarks,blog];
     setbookmarks(newBookMarks)
     
  }
  return (
    <>
       <div className='w-8/12 mx-auto'>
        <Header></Header>
        <div className='md:flex justify-between'>
            <Blogs addBookmarks={addBookmarks}></Blogs>
            <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
       </div>
    </>
  )
}

export default App
