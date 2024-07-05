import PeapleToFollow from "./PeapleToFollow"
import TrendingBox from "./TrendingBox"
import Happening from "./Happening"

export default function UtilsSidebar() {
  return (
    <div className='flex-1'>
        <PeapleToFollow/>
        <TrendingBox/>
        <Happening/>
    </div>
  )
}
