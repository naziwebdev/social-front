import Header from "@/components/modules/Header";
import Sidebar from "@/components/modules/Sidebar";
import SmallSizeMenu from "@/components/modules/SmallSizeMenu";
import Footer from "@/components/modules/Footer";
import PostCard from "@/components/modules/PostCard";
import { authUser } from "@/utils/auth";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { data } from "autoprefixer";

export default async function Home() {
  const isAuth = await authUser();

  if (!isAuth) {
    redirect("/login");
  }

  const getSavesPost = async () => {
    const res = await fetch("http://localhost:4002/post/saves", {
      headers: {
        Cookie: cookies().toString(),
      },
    });

    const data = await res.json();
    return data;
  };

  const saves = await getSavesPost();

  return (
    <div className="relative">
      <Header />
      <main className="flex justify-between mt-6">
        <Sidebar />
        <div className="flex-1  px-6 flex flex-wrap gap-4">
          {saves.map((item) => (
            <PostCard key={item._id} post={item.post} avatar={isAuth.avatar} isSave={true}/>
          ))}
        </div>
      </main>
      <SmallSizeMenu isActiveLargeSize={false} />
      <Footer />
    </div>
  );
}
