"use client"

import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="relative flex justify-between items-center  h-dvh">
      <div className="w-full 2xs:w-[80%] absolute left-1/2 -translate-x-1/2 xs:static xs:left-0 xs:-translate-x-0  xs:flex-1 p-6 sm:p-10 xl:p-14">
        <h2 className="font-poppins-bold text-center xs:text-start text-xl xs:text-3xl md:text-4xl text-white xs:text-gray-900 pb-1 md:pb-3">
          Account recovery
        </h2>

        <form className="w-full rounded-2xl  mt-4 xs:mt-8 lg:mt-12 flex flex-col gap-y-4 bg-white/40 p-4 2xs:p-6 xs:bg-transparent xs:p-0">
          <div className="flex flex-col gap-y-1.5">
            <label htmlFor="identifier" className="font-poppins-medium text-lg">
              email
            </label>
            <input
              type="email"
              id="identifier"
              placeholder="enter the your email "
              className="w-full md:w-3/4 p-2.5 rounded-lg bg-indigo-200 border-2 border-black placeholder:text-zinc-500 placeholder:font-poppins-semiBold placeholder:text-sm"
            />
          </div>

          <button className="w-full md:w-3/4 mt-4 p-3 flex items-center justify-center rounded-md bg-indigo-600 text-white">
            send email
          </button>
        </form>
      </div>
      <div className="w-full xs:w-1/2 h-dvh">
        <Image
          className="w-full h-full"
          alt="register-pic"
          width={1000}
          height={1000}
          src="/images/bg.jpg"
        />
      </div>
    </div>
  );
}
