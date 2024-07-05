import Image from "next/image";

export default function Happening() {
  return (
    <div className="w-full p-4 bg-white shadow-md shadow-zinc-200/50 rounded-lg mt-5">
      <p className="font-poppins-bold text-lg pb-5">What's happening</p>
      <div className="flex flex-wrap justify-center gap-2">

        <Image src='/images/feed-1.jpg' width={500} height={500} alt="post"
          className="w-[30%] h-20 rounded-lg object-cover" />
        <Image src='/images/feed-1.jpg' width={500} height={500} alt="post"
          className="w-[30%] h-20 rounded-lg object-cover" />
        <Image src='/images/feed-1.jpg' width={500} height={500} alt="post"
          className="w-[30%] h-20 rounded-lg object-cover" />
        <Image src='/images/feed-1.jpg' width={500} height={500} alt="post"
          className="w-[30%] h-20 rounded-lg object-cover" />
        <Image src='/images/feed-1.jpg' width={500} height={500} alt="post"
          className="w-[30%] h-20 rounded-lg object-cover" />
        <Image src='/images/feed-1.jpg' width={500} height={500} alt="post"
          className="w-[30%] h-20 rounded-lg object-cover" />

      </div>
    </div>
  );
}
