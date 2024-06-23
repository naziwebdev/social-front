import Image from "next/image";

import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";

export default function PostCard() {
  return (
    <div className="w-full bg-white p-3 rounded-xl shadow-md shadow-zinc-200/50">
      <div className="flex items-center gap-x-5">
        <Image
          className="w-[40px] h-[40px] rounded-full"
          alt="avatar"
          width={60}
          height={55}
          src="/images/profile-2.jpg"
        />
        <div className="">
          <p className="font-poppins-medium">Lena Ms'Queen</p>
          <p className="text-xs text-zinc-500 pt-1">Dubai , 6 Minuts Ago</p>
        </div>
      </div>
      <Image
        className="w-full h-[400px] my-4 rounded-xl"
        alt="post"
        width={1000}
        height={1000}
        src="/images/feed-1.jpg"
      />
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-x-4">
          <FaRegHeart className="text-2xl cursor-pointer" />
          <FaRegComment className="text-2xl cursor-pointer" />
          <FiShare2 className="text-2xl cursor-pointer" />
        </div>
        <div className="flex items-center gap-x-4">
          <p className="flex items-center gap-x-1.5 text-zinc-700">
            <MdOutlineRemoveRedEye className="text-xl" />
            <span className="text-sm">29,428</span>
          </p>
          <div className="flex items-center gap-x-1.5 cursor-pointer px-2 py-1 rounded-md bg-purple-600 text-white ">
            <FaRegBookmark className="" />
            <span>save</span>
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-x-4">
        <div className="relative">
          <Image
            className="w-9 h-9 rounded-full border-[3.5px] border-white "
            alt="post"
            width={1000}
            height={1000}
            src="/images/profile-5.jpg"
          />
          <Image
            className="absolute left-4 top-0 z-10 w-9 h-9 rounded-full border-[3.5px] border-white "
            alt="post"
            width={1000}
            height={1000}
            src="/images/profile-17.jpg"
          />
          <Image
            className="absolute left-8 top-0 z-20 w-9 h-9 rounded-full border-[3.5px] border-white "
            alt="post"
            width={1000}
            height={1000}
            src="/images/profile-7.jpg"
          />
        </div>
        <p className="ms-6">
          Liked by <span className="font-poppins-bold">red_front</span>
          and <span className="font-poppins-bold">2,923 others</span>
        </p>
      </div>
      <p className="font-poppins-semiBold mt-4">Lena Ms'Queen</p>
      <p className="text-zinc-700 mt-2">
        description place lorem ipsum text for test
      </p>
      <p className="text-stone-400 mt-1.5 text-sm cursor-pointer">
        View all 270 comments ...
      </p>
    </div>
  );
}
