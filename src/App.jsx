import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
       <div className='w-8/12 mx-auto'>
       <Header></Header>
        <div className='md:flex justify-between'>
            <Blogs></Blogs>
            <Bookmarks></Bookmarks>
        </div>
       </div>
    </>
  )
}

export default App
