import Image from "next/image";
export default function PopularePost() {
  return (
    <div className="w-full mt-10 p-5 bg-white shadow-md shadow-zinc-200/50 rounded-lg">
      <p className="font-poppins-bold">Populare Post</p>
      <div className="flex items-center gap-x-5 pt-5 cursor-pointer hover:bg-zinc-50 px-2">
        <Image
          className="w-[70px] h-[70px] object-cover rounded-md"
          alt="avatar"
          width={500}
          height={500}
          src="/images/feed-3.jpg"
        />
        <div className="">
          <p className="font-poppins-medium text-sm">
            lorem ipsume , dolor sit amet content display elit...
          </p>
          <p className="text-sm text-zinc-500">28 march 2024</p>
        </div>
      </div>
      <div className="flex items-center gap-x-5 pt-5 cursor-pointer hover:bg-zinc-50 px-2">
        <Image
          className="w-[110px] h-[70px] object-cover rounded-md"
          alt="avatar"
          width={500}
          height={500}
          src="/images/feed-9.jpg"
        />
        <div className="">
          <p className="font-poppins-medium text-sm">
            lorem ipsume , dolor sit amet content display elit...
          </p>
          <p className="text-sm text-zinc-500">28 march 2024</p>
        </div>
      </div>
      <div className="flex items-center gap-x-5 pt-5 cursor-pointer hover:bg-zinc-50 px-2">
        <Image
          className="w-[70px] h-[70px] object-cover rounded-md"
          alt="avatar"
          width={500}
          height={500}
          src="/images/feed-4.jpg"
        />
        <div className="">
          <p className="font-poppins-medium text-sm">
            lorem ipsume , dolor sit amet content display elit...
          </p>
          <p className="text-sm text-zinc-500">28 march 2024</p>
        </div>
      </div>
      <div className="flex items-center gap-x-5 pt-5 cursor-pointer hover:bg-zinc-50 px-2">
        <Image
          className="w-[70px] h-[70px] object-cover rounded-md"
          alt="avatar"
          width={500}
          height={500}
          src="/images/feed-2.jpg"
        />
        <div className="">
          <p className="font-poppins-medium text-sm">
            lorem ipsume , dolor sit amet content display elit...
          </p>
          <p className="text-sm text-zinc-500">28 march 2024</p>
        </div>
      </div>
    </div>
  );
}
