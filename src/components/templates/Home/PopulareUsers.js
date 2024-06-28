import Image from "next/image"

export default function PopulareUsers() {
  return (
    <div className="w-full mt-10 p-5 bg-white shadow-md shadow-zinc-200/50 rounded-lg">
    <p className="font-poppins-bold">Populare Users</p>
    <div className="flex items-center gap-x-5 p-5">
          <Image
            className="w-[40px] h-[40px] xs:w-[60px] xs:h-[55px] rounded-full"
            alt="avatar"
            width={60}
            height={55}
            src="/images/profile-3.jpg"
          />
          <div className="">
            <p className="font-poppins-bold">Peyman Ahmadi</p>
            <p className="text-sm text-zinc-500 pt-1">1200 followers</p>
          </div>
        </div>
    <div className="flex items-center gap-x-5 p-5">
          <Image
            className="w-[40px] h-[40px] xs:w-[60px] xs:h-[55px] rounded-full"
            alt="avatar"
            width={60}
            height={55}
            src="/images/profile-17.jpg"
          />
          <div className="">
            <p className="font-poppins-bold">Peyman Ahmadi</p>
            <p className="text-sm text-zinc-500 pt-1">1200 followers</p>
          </div>
        </div>
    <div className="flex items-center gap-x-5 p-5">
          <Image
            className="w-[40px] h-[40px] xs:w-[60px] xs:h-[55px] rounded-full"
            alt="avatar"
            width={60}
            height={55}
            src="/images/profile-16.jpg"
          />
          <div className="">
            <p className="font-poppins-bold">Peyman Ahmadi</p>
            <p className="text-sm text-zinc-500 pt-1">1200 followers</p>
          </div>
        </div>
    <div className="flex items-center gap-x-5 p-5">
          <Image
            className="w-[40px] h-[40px] xs:w-[60px] xs:h-[55px] rounded-full"
            alt="avatar"
            width={60}
            height={55}
            src="/images/profile-1.jpg"
          />
          <div className="">
            <p className="font-poppins-bold">Peyman Ahmadi</p>
            <p className="text-sm text-zinc-500 pt-1">1200 followers</p>
          </div>
        </div>
    </div>
  )
}
