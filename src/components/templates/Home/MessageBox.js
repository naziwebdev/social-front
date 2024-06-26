import Image from "next/image";
import { FaPenToSquare } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

export default function MessageBox() {
  return (
    <div className="w-[370px] me-2 p-5 bg-white shadow-md shadow-zinc-200/50 rounded-lg">
      <div className="flex items-center justify-between">
        <p className="font-poppins-bold">Messages</p>
        <FaPenToSquare className="text-xl" />
      </div>
      <div className="w-full mt-7 flex items-center gap-x-1 p-3.5 rounded-3xl bg-zinc-100">
        <IoIosSearch className="text-xl text-gray-400" />
        <input
          className="w-full placeholder-neutral-500 outline-none text-[.6rem] xs:text-xs md:text-sm font-bold bg-zinc-100"
          type="text"
          placeholder="Search in Tick Social ..."
        />
      </div>
      <div className="flex items-center justify-around mt-8 pb-3 border-b-4 border-zinc-100 ">
        <span className="relative font-poppins-semiBold before:content-[''] before:absolute before:-left-5
        before:-bottom-4 before:w-28 before:h-1 before:z-10 before:bg-black cursor-pointer">Primary</span>
        <span className="cursor-pointer">Primary</span>
        <span className="text-indigo-500 cursor-pointer">Request(7)</span>
      </div>
      <div className="flex items-center gap-x-5 pt-5 cursor-pointer hover:bg-zinc-50 px-2">
          <Image
            className="w-[40px] h-[40px] xs:w-[60px] xs:h-[55px] rounded-full"
            alt="avatar"
            width={60}
            height={55}
            src="/images/profile-10.jpg"
          />
          <div className="">
            <p className="font-poppins-bold">Peyman Ahmadi</p>
            <p className="text-sm text-zinc-500">ok baby</p>
          </div>
        </div>
      <div className="flex items-center gap-x-5 pt-5 cursor-pointer hover:bg-zinc-50 px-2">
          <Image
            className="w-[40px] h-[40px] xs:w-[60px] xs:h-[55px] rounded-full"
            alt="avatar"
            width={60}
            height={55}
            src="/images/profile-6.jpg"
          />
          <div className="">
            <p className="font-poppins-bold">Peyman Ahmadi</p>
            <p className="text-sm text-zinc-800">+2 new messages</p>
          </div>
        </div>
      <div className="flex items-center gap-x-5 pt-5 cursor-pointer hover:bg-zinc-50 px-2">
          <Image
            className="w-[40px] h-[40px] xs:w-[60px] xs:h-[55px] rounded-full"
            alt="avatar"
            width={60}
            height={55}
            src="/images/profile-4.jpg"
          />
          <div className="">
            <p className="font-poppins-bold">Peyman Ahmadi</p>
            <p className="text-sm text-zinc-500">hi good morning</p>
          </div>
        </div>
      <div className="flex items-center gap-x-5 pt-5 cursor-pointer hover:bg-zinc-50 px-2">
          <Image
            className="w-[40px] h-[40px] xs:w-[60px] xs:h-[55px] rounded-full"
            alt="avatar"
            width={60}
            height={55}
            src="/images/profile-2.jpg"
          />
          <div className="">
            <p className="font-poppins-bold">Peyman Ahmadi</p>
            <p className="text-sm text-zinc-500">see u later</p>
          </div>
        </div>
    </div>
  );
}
