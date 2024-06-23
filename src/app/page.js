import Header from "@/components/modules/Header"
import Sidebar from "@/components/modules/Sidebar"

export default function Home() {
  return (
   <div>
   <Header/>
    <main className="flex justify-between gap-x-10 mt-6">
     <Sidebar/>
    </main>
   </div>
  )
}
