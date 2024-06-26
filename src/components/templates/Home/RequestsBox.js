import Image from "next/image";
export default function RequestsBox() {
  return (
    <div className="flex flex-col gap-y-3.5">
      <p className="font-poppins-bold text-stone-500 mt-10 text-lg">Requests</p>
      <div className="w-[370px] p-4 bg-white shadow-md shadow-zinc-200/50 rounded-lg">
        <div className="flex items-center gap-x-5">
          <Image
            className="w-[60px] h-[60px] rounded-full"
            alt="avatar"
            width={60}
            height={55}
            src="/images/profile-3.jpg"
          />
          <div className="">
            <p className="font-poppins-bold">Peyman Ahmadi</p>
            <p className="text-sm text-zinc-500 pt-0.5 font-poppins-light">
              12 Mutual friends
            </p>
          </div>
        </div>
        <div className="flex gap-x-2 items-center mt-2.5">
          <button className="flex justify-center items-center w-20 h-9 text-white bg-purple-600 rounded-lg">
            Accept
          </button>
          <button className="flex justify-center items-center w-20 h-9 text-gray-700 bg-transparent rounded-lg">
            Decline
          </button>
        </div>
      </div>
      <div className="w-[370px] p-4 bg-white shadow-md shadow-zinc-200/50 rounded-lg">
        <div className="flex items-center gap-x-5">
          <Image
            className="w-[60px] h-[60px] rounded-full"
            alt="avatar"
            width={60}
            height={55}
            src="/images/profile-3.jpg"
          />
          <div className="">
            <p className="font-poppins-bold">Peyman Ahmadi</p>
            <p className="text-sm text-zinc-500 pt-0.5 font-poppins-light">
              12 Mutual friends
            </p>
          </div>
        </div>
        <div className="flex gap-x-2 items-center mt-2.5">
          <button className="flex justify-center items-center w-20 h-9 text-white bg-purple-600 rounded-lg">
            Accept
          </button>
          <button className="flex justify-center items-center w-20 h-9 text-gray-700 bg-transparent rounded-lg">
            Decline
          </button>
        </div>
      </div>
      <div className="w-[370px] p-4 bg-white shadow-md shadow-zinc-200/50 rounded-lg">
        <div className="flex items-center gap-x-5">
          <Image
            className="w-[60px] h-[60px] rounded-full"
            alt="avatar"
            width={60}
            height={55}
            src="/images/profile-3.jpg"
          />
          <div className="">
            <p className="font-poppins-bold">Peyman Ahmadi</p>
            <p className="text-sm text-zinc-500 pt-0.5 font-poppins-light">
              12 Mutual friends
            </p>
          </div>
        </div>
        <div className="flex gap-x-2 items-center mt-2.5">
          <button className="flex justify-center items-center w-20 h-9 text-white bg-purple-600 rounded-lg">
            Accept
          </button>
          <button className="flex justify-center items-center w-20 h-9 text-gray-700 bg-transparent rounded-lg">
            Decline
          </button>
        </div>
      </div>
      <div className="w-[370px] p-4 bg-white shadow-md shadow-zinc-200/50 rounded-lg">
        <div className="flex items-center gap-x-5">
          <Image
            className="w-[60px] h-[60px] rounded-full"
            alt="avatar"
            width={60}
            height={55}
            src="/images/profile-3.jpg"
          />
          <div className="">
            <p className="font-poppins-bold">Peyman Ahmadi</p>
            <p className="text-sm text-zinc-500 pt-0.5 font-poppins-light">
              12 Mutual friends
            </p>
          </div>
        </div>
        <div className="flex gap-x-2 items-center mt-2.5">
          <button className="flex justify-center items-center w-20 h-9 text-white bg-purple-600 rounded-lg">
            Accept
          </button>
          <button className="flex justify-center items-center w-20 h-9 text-gray-700 bg-transparent rounded-lg">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
