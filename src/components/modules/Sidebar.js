import Link from "next/link";

import { HiOutlineHome } from "react-icons/hi";
import { TbBell } from "react-icons/tb";
import { BiEnvelope } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { TbSettings } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { authUser } from "@/utils/auth";
 

export default async  function Sidebar() {
  const user = await authUser()
  return (
    <div className="sticky left-0 top-5 w-[80px] xs:w-[200px] md:w-[280px] xl:w-[360px] px-2 h-full">
      <nav className="bg-white shadow-md shadow-zinc-200/50 rounded-lg">
        <div className="flex items-center justify-center gap-x-2 md:gap-x-5 py-3  xs:p-3 md:p-5">
          <img
            className="w-[30px] h-[30px] xs:w-[60px] xs:h-[55px] rounded-full object-cover"
            alt="avatar"
            width={60}
            height={55}
            src={`http://localhost:4002/${user.avatar}`}
          />
          <div className="hidden xs:block">
            <p className="font-poppins-bold text-sm md:text-base">
              {user.name}
            </p>
            <p className="text-xs md:text-sm text-zinc-500 pt-1">{user.username}</p>
          </div>
        </div>
        <ul className="text-sm md:text-lg text-gray-600 [&>*]:cursor-pointer">
          <li className="flex gap-x-4 items-center justify-center xs:justify-normal  xs:ps-3.5 md:ps-20 py-3 bg-zinc-100 text-purple-700 border-s-4 xs:border-s-8 rounded-s-md border-purple-700">
            <HiOutlineHome className="text-2xl" />
            <Link href="/" className="hidden xs:block">
              Home
            </Link>
          </li>
          <li className="flex gap-x-4 items-center justify-center xs:justify-normal  xs:ps-5 md:ps-20 py-3 hover:bg-zinc-100">
            <TbBell className="text-2xl" />
            <Link href="/requests" className="hidden xs:block">
              Notifications
            </Link>
          </li>
          <li className="flex gap-x-4 items-center justify-center xs:justify-normal xs:ps-5 md:ps-20 py-3 hover:bg-zinc-100">
            <BiEnvelope className="text-2xl" />
            <Link href="/messages" className="hidden xs:block">
              Messages
            </Link>
          </li>
          <li className="flex gap-x-4 items-center justify-center xs:justify-normal xs:ps-5 md:ps-20 py-3 hover:bg-zinc-100">
            <BiBookmark className="text-2xl" />
            <Link href="/bookmarks" className="hidden xs:block">
              Bookmarks
            </Link>
          </li>
          <li className="flex gap-x-4 items-center justify-center xs:justify-normal xs:ps-5 md:ps-20 py-3 hover:bg-zinc-100">
            <CgProfile className="text-2xl" />
            <Link  href={`/profile/${user._id}`} className="hidden xs:block">
             Profile
            </Link>
          </li>
          <li className="flex gap-x-4 items-center justify-center xs:justify-normal xs:ps-5 md:ps-20 py-3 hover:bg-zinc-100">
            <TbSettings className="text-2xl" />
            <Link href={`/profileUpdate/${user._id}`} className="hidden xs:block">
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      <button className="flex justify-center items-center mt-4 bg-indigo-500 text-white w-full h-8 p-0.5 xs:h-11 text-xs xs:text-base md:text-lg  rounded-3xl">
        <Link href={'/postUpload'} className="hidden xs:block">Create Post</Link>
        <Link href={'/postUpload'} className="xs:hidden">+Post</Link>
      </button>
    </div>
  );
}
