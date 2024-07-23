import Header from "@/components/modules/Header"
import SmallSizeMenu from "@/components/modules/SmallSizeMenu"
import MessageBox from "@/components/modules/MessageBox"
import { authUser } from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function page() {
  const isAuth = await authUser();

  if (!isAuth) {
    redirect("/login");
  }
  return (
    <div>
        <Header/>
        <MessageBox/>
        <SmallSizeMenu isActiveLargeSize={false}/>
    </div>
  )
}
