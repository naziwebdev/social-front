import Image from "next/image";
import SmallSizeMenu from "@/components/modules/SmallSizeMenu";
import { FaPen } from "react-icons/fa";

export default function page() {
  return (
    <div className="overflow-hidden p-6 xs:p-12 mb-24 flex justify-center items-center">
      <div className="overflow-hidden w-full pb-6 px-4 xs:px-8 rounded-xl shadow-md shadow-zinc-200/50 bg-white">
        <div className="flex items-center flex-wrap 2xs:flex-nowrap gap-y-6 gap-x-4 xs:gap-x-16 mt-8 pb-3 border-b-2 border-zinc-100 text-sm xs:text-base">
          <span
            className="relative text-purple-700 font-poppins-semiBold before:content-[''] before:absolute before:-left-1.5
        before:-bottom-4 before:w-24 before:h-1 before:z-10 before:bg-purple-700 cursor-pointer"
          >
            Edit profile
          </span>
          <span className="cursor-pointer">Preferences</span>
          <span className="cursor-pointer">security</span>
        </div>
        <div className="w-full mt-6 flex justify-between flex-wrap xs:flex-nowrap gap-6 md:gap-14">
          <div className="relative w-[130px] h-[130px] mx-auto xs:mx-0  xs:w-[150px] xs:h-[125px] rounded-full">
            <Image
              className="w-full h-full rounded-full object-cover"
              alt="avatar"
              width={400}
              height={400}
              src="/images/profile-4.jpg"
            />
            <div className="relative">
              <label
                htmlFor="files"
                className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20  "
              >
                <FaPen className="absolute bottom-0 cursor-pointer p-2 text-4xl bg-indigo-500 rounded-full text-white" />
              </label>
              <input
                type="file"
                id="files"
                className="w-full h-full opacity-0 "
              />
            </div>
          </div>
          <form className="w-full rounded-2xl  flex flex-col gap-y-4 ">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="name" className="font-poppins-medium text-lg">
                Full name
              </label>
              <input
                type="text"
                id="name"
                placeholder="enter the your fullname"
                className="w-full  p-2.5 rounded-lg bg-indigo-200 border-2 border-black placeholder:text-zinc-500 placeholder:font-poppins-semiBold placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-y-1.5">
              <label htmlFor="username" className="font-poppins-medium text-lg">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="enter the your username "
                className="w-full p-2.5 rounded-lg bg-indigo-200 border-2 border-black placeholder:text-zinc-500 placeholder:font-poppins-semiBold placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-y-1.5">
              <label htmlFor="email" className="font-poppins-medium text-lg">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="enter the your email"
                className="w-full p-2.5 rounded-lg bg-indigo-200 border-2 border-black placeholder:text-zinc-500 placeholder:font-poppins-semiBold placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-y-1.5">
              <label htmlFor="password" className="font-poppins-medium text-lg">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="enter the your password"
                className="w-full p-2.5 rounded-lg bg-indigo-200 border-2 border-black placeholder:text-zinc-500 placeholder:font-poppins-semiBold placeholder:text-sm"
              />
            </div>
            <button className="w-full  mt-4 p-3 flex items-center justify-center rounded-md bg-indigo-600 text-white">
              Save change
            </button>
          </form>
        </div>
      </div>
      <SmallSizeMenu isActiveLargeSize={true} />
    </div>
  );
}
