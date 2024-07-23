import Header from "@/components/modules/Header";
import SmallSizeMenu from "@/components/modules/SmallSizeMenu";
import RequestsBox from "@/components/modules/RequestsBox";
import { authUser } from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function page() {
  const isAuth = await authUser();

  if (!isAuth) {
    redirect("/login");
  }

  return (
    <div className="pb-32">
      <Header />
      <div className="px-5 sm:px-10">
        <RequestsBox />
      </div>
      <SmallSizeMenu isActiveLargeSize={false} />
    </div>
  );
}
