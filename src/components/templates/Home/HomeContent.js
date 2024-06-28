import StoryBox from "./StoryBox";
import Image from "next/image";
import PostCard from "@/components/modules/PostCard";

export default function HomeContent() {
  return (
    <div className="flex-1 xl:w-1/2  pe-2">
      <div className="flex flex-wrap xs:flex-nowrap items-center justify-center xs:justify-between gap-2 sm:gap-x-4">
        <StoryBox
          href={"/images/story-1.jpg"}
          avatar={"/images/profile-13.jpg"}
        />
        <StoryBox
          href={"/images/story-2.jpg"}
          avatar={"/images/profile-2.jpg"}
        />
        <StoryBox
          href={"/images/story-3.jpg"}
          avatar={"/images/profile-3.jpg"}
        />
        <StoryBox
          href={"/images/story-4.jpg"}
          avatar={"/images/profile-4.jpg"}
        />
        <StoryBox
          href={"/images/story-5.jpg"}
          avatar={"/images/profile-5.jpg"}
        />
      </div>
      <div className="flex items-center justify-between gap-x-5 mt-8 bg-white shadow-md shadow-zinc-200/50 rounded-2xl p-2">
        <Image
          className="w-[40px] h-[40px]  rounded-full"
          alt="avatar"
          width={60}
          height={55}
          src="/images/profile-8.jpg"
        />
        <input
          type="text"
          placeholder="what's on your mind, peyman ?"
          className="w-full outline-none"
        />
        <button className="flex justify-center items-center  bg-purple-700 text-white w-28 2xs:w-24 h-8 text-base md:text-lg  rounded-3xl">
          Post
        </button>
      </div>
      <div className="overflow-hidden flex flex-col items-center gap-y-4 mt-8 ">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
}
