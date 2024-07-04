import Header from "@/components/modules/Header"
import Sidebar from "@/components/modules/Sidebar"
import BookmarkBox from "@/components/templates/Bookmarks/BookmarkBox"
import SmallSizeMenu from "@/components/modules/SmallSizeMenu"
import Footer from "@/components/modules/Footer"


export default function Home() {
  return (
   <div className="relative">
   <Header/>
    <main className="flex justify-between mt-6">
     <Sidebar/>
     <div className="flex-1  px-6 flex flex-wrap gap-4">
     <BookmarkBox imgSrc={'/images/feed-5.jpg'}/>
     <BookmarkBox imgSrc={'/images/feed-1.jpg'}/>
     <BookmarkBox imgSrc={'/images/feed-2.jpg'}/>
     <BookmarkBox imgSrc={'/images/feed-3.jpg'}/>
     <BookmarkBox imgSrc={'/images/feed-4.jpg'}/>
     <BookmarkBox imgSrc={'/images/feed-6.jpg'}/>
     <BookmarkBox imgSrc={'/images/feed-7.jpg'}/>
     <BookmarkBox imgSrc={'/images/feed-8.jpg'}/>
     <BookmarkBox imgSrc={'/images/feed-9.jpg'}/>
     </div>
    </main>
    <SmallSizeMenu isActiveLargeSize={false}/>
    <Footer/>
   </div>
  )
}
