import StoryBox from "./StoryBox";
import PostWrapper from "./PostWrapper";
import { authUser } from "@/utils/auth";

export default async function HomeContent() {
  const user = await authUser();
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
        <img
          className="w-[40px] h-[40px] object-cover rounded-full"
          alt="avatar"
          src={`http://localhost:4002/${user.avatar}`}
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
      <PostWrapper />
    </div>
  );
}
