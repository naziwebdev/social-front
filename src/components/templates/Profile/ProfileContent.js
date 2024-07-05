import PostCard from "@/components/modules/PostCard";
import Image from "next/image";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";

export default function () {
  return (
    <div className="w-[70%] ps-2.5">
      <div className="bg-white rounded-xl pb-8 shadow-md shadow-zinc-200/50">
        <Image
          src="/images/feed-3.jpg"
          alt="background"
          width={1000}
          height={1000}
          className="w-full h-[280px] rounded-t-xl object-cover"
        />
        <div className="relative p-5">
          <Image
            src="/images/profile-10.jpg"
            alt="avatar"
            width={500}
            height={500}
            className="absolute left-6 -top-16 w-[120px] h-[115px] rounded-full"
          />
          <h2 className="font-poppins-bold text-2xl pt-12">Nazi Rastegar</h2>
          <p className="font-poppins-regular text-stone-600 pt-1">@nazi777</p>
        </div>
        <div className="flex justify-between items-center gap-x-36 p-5">
          <p className="text-lg text-stone-700 font-poppins-regular">
            Lorem ipsum dolor sit amet, consectetur{" "}
            <span className="font-poppins-semiBold text-purple-700">
              @nazi777
            </span>{" "}
            elit . Est sint molestias eligendi.
          </p>
          <div className="flex items-center gap-x-2">
            <button className="bg-transparent border-2 border-purple-700 rounded-3xl text-purple-700 p-2 w-28 h-12 text-sm font-poppins-semiBold">
              Manage
            </button>
            <button className="bg-blue-400 h-12 rounded-3xl text-white p-2 w-28 text-sm font-poppins-semiBold">
              Unfollow
            </button>
          </div>
        </div>
        <div className="flex items-center gap-x-1.5 px-5">
          <TbWorld className="text-xl" />
          <Link href={"/"} className="font-poppins-semiBold text-purple-700">
            https://social-media.com
          </Link>
        </div>
        <div className="p-5 flex items-center gap-x-5">
          <p className="text-stone-600 text-lg">
            <span className="font-poppins-bold text-black text-xl">49</span>{" "}
            Followers
          </p>
          <p className="text-stone-600 text-lg">
            <span className="font-poppins-bold text-black text-xl">49</span>{" "}
            Following
          </p>
        </div>
        <div className="flex justify-between items-center mx-5 bg-red-50 p-3">
          <p className="text-red-500 font-poppins-regular">
            This account nedd to get verificated
          </p>
          <button className="bg-red-500 text-white flex justify-center items-center p-2">
            Send verification
          </button>
        </div>
      </div>
      <div className="flex items-center justify-around bg-white my-6 pt-3 pb-3 border-b-[6px] border-zinc-300 rounded-xl shadow-md shadow-zinc-200/50 ">
        <span className="relative font-poppins-semiBold before:content-[''] before:absolute before:-left-24
        before:-bottom-4 before:w-60 before:h-1 before:z-10 before:bg-purple-600 cursor-pointer">Post</span>
        <span className="cursor-pointer">Reels</span>
        <span className="cursor-pointer">Repsts</span>
      </div>

      <div className="overflow-hidden flex flex-col items-center gap-y-4 mt-5">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}
