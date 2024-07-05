import PeapleToFollow from "./PeapleToFollow"
import TrendingBox from "./TrendingBox"
import Happening from "./Happening"

export default function UtilsSidebar() {
  return (
    <div className='flex-1 hidden sm:block'>
        <PeapleToFollow/>
        <TrendingBox/>
        <Happening/>
    </div>
  )
}
