import Image from "next/image";

export default function PeapleToFollow() {
  return (
    <div className="w-full p-4 bg-white shadow-md shadow-zinc-200/50 rounded-lg">
      <p className="font-poppins-bold text-lg pb-2">Populare Users</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-5 p-4">
          <Image
            className="w-[40px] h-[40px] xs:w-[60px] xs:h-[55px] rounded-full"
            alt="avatar"
            width={60}
            height={55}
            src="/images/profile-3.jpg"
          />
          <div className="">
            <p className="flex  items-center gap-x-2 font-poppins-bold">
              Peyman Ahmadi
              <Image
                className=" w-5 h-5 "
                alt="avatar"
                width={60}
                height={55}
                src="/images/verify.png"
              />
            </p>

            <p className="text-sm text-zinc-500 pt-1">@payman34</p>
          </div>
        </div>
        <button className="bg-transparent border-2 border-blue-700 rounded-3xl text-blue-700 p-2 w-24 h-10 text-sm font-poppins-semiBold">
          Follow
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-5 p-4">
          <Image
            className="w-[40px] h-[40px] xs:w-[60px] xs:h-[55px] rounded-full"
            alt="avatar"
            width={60}
            height={55}
            src="/images/profile-6.jpg"
          />
          <div className="">
            <p className="flex  items-center gap-x-2 font-poppins-bold">
              Peyman Ahmadi
              <Image
                className=" w-5 h-5 "
                alt="avatar"
                width={60}
                height={55}
                src="/images/verify.png"
              />
            </p>

            <p className="text-sm text-zinc-500 pt-1">@payman34</p>
          </div>
        </div>
        <button className="bg-transparent border-2 border-blue-700 rounded-3xl text-blue-700 p-2 w-24 h-10 text-sm font-poppins-semiBold">
          Follow
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-5 p-4">
          <Image
            className="w-[40px] h-[40px] xs:w-[60px] xs:h-[55px] rounded-full"
            alt="avatar"
            width={60}
            height={55}
            src="/images/profile-1.jpg"
          />
          <div className="">
            <p className="flex  items-center gap-x-2 font-poppins-bold">
              Peyman Ahmadi
              <Image
                className=" w-5 h-5 "
                alt="avatar"
                width={60}
                height={55}
                src="/images/verify.png"
              />
            </p>

            <p className="text-sm text-zinc-500 pt-1">@payman34</p>
          </div>
        </div>
        <button className="bg-transparent border-2 border-blue-700 rounded-3xl text-blue-700 p-2 w-24 h-10 text-sm font-poppins-semiBold">
          Follow
        </button>
      </div>
    </div>
  );
}
