import Header from "@/components/modules/Header"
import SmallSizeMenu from "@/components/modules/SmallSizeMenu"
import MessageBox from "@/components/modules/MessageBox"

export default function page() {
  return (
    <div>
        <Header/>
        <MessageBox/>
        <SmallSizeMenu isActiveLargeSize={false}/>
    </div>
  )
}
