import Header from "@/components/modules/Header"
import Sidebar from "@/components/modules/Sidebar"
import HomeContent from "@/components/templates/Home/HomeContent"

export default function Home() {
  return (
   <div>
   <Header/>
    <main className="flex justify-between mt-6">
     <Sidebar/>
     <HomeContent/>
     <Sidebar/>
    </main>
   </div>
  )
}
