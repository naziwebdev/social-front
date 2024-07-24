import Link from "next/link";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { authUser } from "@/utils/auth";

export default async function Header() {
  const user = await authUser();
  return (
    <div className="flex justify-between items-center gap-5 p-4 xs:px-6 xs:py-8 w-full  bg-white shadow-md shadow-zinc-200/50">
      <Link href="/" className="font-poppins-black text-lg xs:text-2xl">
        TickSocial
      </Link>
      <div className="hidden 2xs:flex items-center gap-x-1 p-4 w-[40%] md:w-[27%] rounded-3xl bg-zinc-100">
        <IoIosSearch className="text-xl text-gray-400" />
        <input
          className="w-full placeholder-neutral-500 outline-none text-[.6rem] xs:text-xs md:text-sm font-bold bg-zinc-100"
          type="text"
          placeholder="Search in Tick Social ..."
        />
      </div>
      <div className="flex items-center gap-x-4">
        <button className="hidden md:flex justify-center items-center bg-indigo-500 text-white w-28 h-11 text-base md:text-lg  rounded-3xl">
          <Link href={"/postUpload"}>Create</Link>
        </button>
        <button className="flex md:hidden justify-center items-center bg-indigo-500 text-white w-7 h-7 xs:w-10 xs:h-10 text-xl xs:text-2xl  rounded-full">
          <Link href={"/postUpload"}>+</Link>
        </button>
        {user?.avatar ? (
          <img
            src={`http://localhost:4002/${user.avatar}`}
            alt="avatar"
            className="w-[40px] h-[40px] xs:w-[60px] xs:h-[55px] rounded-full object-cover"
            />
        ) : (
          <Image
            src="/images/avatar.png"
            alt="avatar"
            width={500}
            height={500}
            className="w-[40px] h-[40px] xs:w-[60px] xs:h-[55px] rounded-full object-cover"
            />
        )}
      </div>
    </div>
  );
}
