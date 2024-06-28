import Header from "@/components/modules/Header"
import Sidebar from "@/components/modules/Sidebar"
import UtilsSidebar from "@/components/templates/Home/UtilsSidebar"
import HomeContent from "@/components/templates/Home/HomeContent"
import SmallSizeMenu from "@/components/modules/SmallSizeMenu"
import Footer from "@/components/modules/Footer"


export default function Home() {
  return (
   <div className="relative">
   <Header/>
    <main className="flex justify-between mt-6">
     <Sidebar/>
     <HomeContent/>
     <UtilsSidebar/>
    </main>
    <SmallSizeMenu/>
    <Footer/>
   </div>
  )
}
