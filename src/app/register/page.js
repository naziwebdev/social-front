import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="relative flex justify-between h-dvh">
      <div className="w-full 2xs:w-[80%] absolute left-1/2 -translate-x-1/2 xs:static xs:left-0 xs:-translate-x-0  xs:flex-1 p-6 sm:p-10 xl:p-14">
        <h2 className="font-poppins-bold text-center xs:text-start text-xl xs:text-3xl md:text-4xl text-white xs:text-gray-900 pb-1 md:pb-3">Get started now</h2>
        <p className="font-poppins-regular text-center xs:text-start text-white xs:text-gray-700">
          Have an account? <Link href="/login" className="text-sky-500 xs:text-indigo-800 font-poppins-bold">Login</Link>
        </p>
        <form className="w-full rounded-2xl  mt-4 xs:mt-8 lg:mt-12 flex flex-col gap-y-4 bg-white/40 p-4 2xs:p-6 xs:bg-transparent xs:p-0">
            <div className="flex flex-col gap-y-2">
                <label htmlFor="name" className="font-poppins-medium text-lg">
                  Full name
                </label>
                <input type="text" id="name" placeholder="enter the your fullname"
                className="w-full md:w-3/4 p-2.5 rounded-lg bg-indigo-200 border-2 border-black placeholder:text-zinc-500 placeholder:font-poppins-semiBold placeholder:text-sm" />
            </div>
            <div className="flex flex-col gap-y-1.5">
                <label htmlFor="username" className="font-poppins-medium text-lg">
                  Username
                </label>
                <input type="text" id="username" placeholder="enter the your username "
                className="w-full md:w-3/4 p-2.5 rounded-lg bg-indigo-200 border-2 border-black placeholder:text-zinc-500 placeholder:font-poppins-semiBold placeholder:text-sm" />
            </div>
            <div className="flex flex-col gap-y-1.5">
                <label htmlFor="email" className="font-poppins-medium text-lg">
                  Email address
                </label>
                <input type="text" id="email" placeholder="enter the your email"
                className="w-full md:w-3/4 p-2.5 rounded-lg bg-indigo-200 border-2 border-black placeholder:text-zinc-500 placeholder:font-poppins-semiBold placeholder:text-sm" />
            </div>
            <div className="flex flex-col gap-y-1.5">
                <label htmlFor="password" className="font-poppins-medium text-lg">
                  Password
                </label>
                <input type="text" id="password" placeholder="enter the your password"
                className="w-full md:w-3/4 p-2.5 rounded-lg bg-indigo-200 border-2 border-black placeholder:text-zinc-500 placeholder:font-poppins-semiBold placeholder:text-sm" />
            </div>
            <button className="w-full md:w-3/4 mt-4 p-3 flex items-center justify-center rounded-md bg-indigo-600 text-white">
                Continue
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
