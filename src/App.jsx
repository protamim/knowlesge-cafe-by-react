import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"

function App() {

const [bookmarks, setBookmarks] = useState([]);
const [reading_time, setReadingTime] = useState(0);
const [prevId, setPrevId] = useState([])

const handleBookmarks = ({blog}) => {
  const matchData = bookmarks.find(bookmark => bookmark.id === blog.id);
  console.log(matchData)
  if(matchData){
    alert('already exist it!')
  }else {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark)
  }

}

const handleReading = (time, id) => {
  const newId = [...prevId, id];
  setPrevId(newId); 
  const exist = prevId.find(value => value === id);
  console.log(exist)
  if(exist){
    alert('Exist it!')
  }else{
    const newReadTime = reading_time + time;
    setReadingTime(newReadTime);

  }

  // Remove the bookmarked posts when click the user 'Mark as read' on that post
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
  setBookmarks(remainingBookmarks)
}

  return (
    <>
    {/* header */}
      <header>
          <div className='container mx-auto px-5'>
            <Header></Header>
          </div>
       </header>
       {/* Main */}
      <div className=" container mx-auto px-5 my-6">
        <div className=" flex flex-col gap-4 md:flex-row">
          <Blogs handleBookmarks={handleBookmarks}
           handleReading={handleReading}
           ></Blogs>
          <Bookmarks bookmarks={bookmarks}
          readTime={reading_time}></Bookmarks>
        </div>
      </div>

    </>
  )
}

export default App
