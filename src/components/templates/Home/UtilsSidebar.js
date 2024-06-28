import MessageBox from "../../modules/MessageBox"
import PopularePost from "./PopularePost"
import PopulareUsers from "./PopulareUsers"
import RequestsBox from "../../modules/RequestsBox"

export default function UtilsSidebar() {
  return (
    <div className="hidden lg:block w-[270px] xl:w-[370px] me-2">
        <MessageBox/>
        <PopularePost/>
        <PopulareUsers/>
        <RequestsBox/>
    </div>
  )
}
