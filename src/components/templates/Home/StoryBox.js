import Image from "next/image";

export default function StoryBox({ href, avatar }) {
  return (
    <div className="relative w-full rounded-xl h-52 z-50">
      <Image
        src={href}
        width={100}
        height={100}
        alt="story"
        className="w-full h-full rounded-xl gradient"
      />
      <div className="absolute top-3 left-3 z-40 w-[50px]  h-[50px] rounded-full border-4 border-purple-600">
        <Image
          src={avatar}
          width={100}
          height={100}
          alt="story"
          className="w-full h-full rounded-full"
        />
      </div>
      <div className="w-full h-full flex items-end gradient  absolute bottom-0  rounded-b-xl left-0 z-30">
        <p className="text-white font-poppins-bold p-3">Elisabet Johnson</p>
      </div>
    </div>
  );
}
