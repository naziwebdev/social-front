import Image from "next/image";
import Link from "next/link";

import { HiOutlineHome } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import { TbBell } from "react-icons/tb";
import { BiEnvelope } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi";
import { PiChartLineUpBold } from "react-icons/pi";
import { BiPaint } from "react-icons/bi";
import { TbSettings } from "react-icons/tb";

export default function Sidebar() {
  return (
    <div className="sticky left-0 top-5 w-[370px] px-2 h-full">
      <nav className="bg-white shadow-md shadow-zinc-200/50 rounded-lg">
        <div className="flex items-center gap-x-5 p-5">
          <Image
            className="w-[40px] h-[40px] xs:w-[60px] xs:h-[55px] rounded-full"
            alt="avatar"
            width={60}
            height={55}
            src="/images/profile-8.jpg"
          />
          <div className="">
            <p className="font-poppins-bold">Peyman Ahmadi</p>
            <p className="text-sm text-zinc-500 pt-1">@peyman7dev</p>
          </div>
        </div>
        <ul className="text-lg text-gray-600 [&>*]:cursor-pointer">
          <li className="flex gap-x-4 items-center ps-20 py-3 bg-zinc-100 text-purple-700 border-s-8 rounded-s-md border-purple-700">
            <HiOutlineHome className="text-2xl" />
            <Link href="/">Home</Link>
          </li>
          <li className="flex gap-x-4 items-center ps-20 py-3 hover:bg-zinc-100">
            <TbWorld className="text-2xl" />
            <Link href="/">Explore</Link>
          </li>
          <li className="flex gap-x-4 items-center ps-20 py-3 hover:bg-zinc-100">
            <TbBell className="text-2xl" />
            <Link href="/">Notifications</Link>
          </li>
          <li className="flex gap-x-4 items-center ps-20 py-3 hover:bg-zinc-100">
            <BiEnvelope className="text-2xl" />
            <Link href="/">Messages</Link>
          </li>
          <li className="flex gap-x-4 items-center ps-20 py-3 hover:bg-zinc-100">
            <BiBookmark className="text-2xl" />
            <Link href="/">Bookmarks</Link>
          </li>
          <li className="flex gap-x-4 items-center ps-20 py-3 hover:bg-zinc-100">
            <PiChartLineUpBold className="text-2xl" />
            <Link href="/">Analysts</Link>
          </li>
          <li className="flex gap-x-4 items-center ps-20 py-3 hover:bg-zinc-100">
            <BiPaint className="text-2xl" />
            <Link href="/">Theme</Link>
          </li>
          <li className="flex gap-x-4 items-center ps-20 py-3 hover:bg-zinc-100">
            <TbSettings className="text-2xl" />
            <Link href="/">Settings</Link>
          </li>
        </ul>
      </nav>
      <button className="flex justify-center items-center mt-4 bg-indigo-500 text-white w-full h-11 text-base md:text-lg  rounded-3xl">
        Create Post
      </button>
    </div>
  );
}
