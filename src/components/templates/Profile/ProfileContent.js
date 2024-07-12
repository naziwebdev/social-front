"use client";
import PostCard from "@/components/modules/PostCard";
import Image from "next/image";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import swal from "sweetalert";

export default function profileContent({ pageID }) {
  const [pageInfo, setPageInfo] = useState({});


  const getpage = async () => {
    const res = await fetch(`http://localhost:4002/page/${pageID}`, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    if (res.status === 200) {
      setPageInfo(data);
    }
  };

  useEffect(() => {
    getpage();
  }, []);

  const followHandler = async () => {
    const res = await fetch(`http://localhost:4002/page/${pageID}/follow`, {
      method: "POST",
      credentials: "include",
    });
    if (res.status === 201) {
      swal({
        title: "با موفقیت فالو شد",
        icon: "success",
        buttons: "بستن",
      });
    } else {
      swal({
        title: await res.json(),
        icon: "error",
        buttons: "تلاش دوباره",
      });
    }
  };

  const unfollowHandler = async () => {
    const res = await fetch(`http://localhost:4002/page/${pageID}/unfollow`, {
      method: "POST",
      credentials: "include",
    });
    if (res.status === 200) {
      setISFollow(true);
      swal({
        title: "با موفقیت آنفالو شد",
        icon: "success",
        buttons: "بستن",
      });
    } else {
      swal({
        title: await res.json(),
        icon: "error",
        buttons: "تلاش دوباره",
      });
    }
  };

  return (
    <div className="w-full sm:w-[65%]">
      <div className="bg-white rounded-xl pb-8 shadow-md shadow-zinc-200/50">
        <Image
          src="/images/feed-3.jpg"
          alt="background"
          width={1000}
          height={1000}
          className="w-full h-[280px] rounded-t-xl object-cover"
        />
        <div className="relative p-5">
          <Image
            src="/images/profile-10.jpg"
            alt="avatar"
            width={500}
            height={500}
            className="absolute left-6 -top-16 w-[110px] h-[105px] md:w-[120px] md:h-[115px] rounded-full"
          />
          <h2 className="font-poppins-bold text-xl 2xs:text-2xl pt-10 md:pt-12">
            Nazi Rastegar
          </h2>
          <p className="font-poppins-regular text-stone-600 pt-1">@nazi777</p>
        </div>
        <div className="flex justify-between items-center gap-x-5 lg:gap-x-36 p-5">
          <p className="md:text-lg text-stone-700 font-poppins-regular">
            Lorem ipsum dolor sit amet, consectetur{" "}
            <span className="font-poppins-semiBold text-purple-700">
              @nazi777
            </span>{" "}
            elit . Est sint molestias eligendi.
          </p>
          <div className="flex flex-wrap xs:flex-nowrap  items-center gap-2">
            <button className="bg-transparent h-10 md:h-12 w-24 md:w-28 border-2 border-purple-700 rounded-3xl text-purple-700 p-2 text-sm font-poppins-semiBold">
              Manage
            </button>
            {pageInfo.hasAccess ? (
              <button
                onClick={unfollowHandler}
                className="bg-blue-400 h-10 md:h-12 w-24 md:w-28 rounded-3xl text-white p-2  text-sm font-poppins-semiBold"
              >
                unfollow
              </button>
            ) : (
              <button
                onClick={followHandler}
                className="bg-blue-400 h-10 md:h-12 w-24 md:w-28 rounded-3xl text-white p-2  text-sm font-poppins-semiBold"
              >
                follow
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center gap-x-1.5 px-5">
          <TbWorld className="text-xl" />
          <Link href={"/"} className="font-poppins-semiBold text-purple-700">
            https://social-media.com
          </Link>
        </div>
        <div className="p-5 flex items-center gap-x-5">
          <p className="text-stone-600 md:text-lg">
            <span className="font-poppins-bold text-black md:text-xl">49</span>{" "}
            Followers
          </p>
          <p className="text-stone-600 md:text-lg">
            <span className="font-poppins-bold text-black md:text-xl">49</span>{" "}
            Following
          </p>
        </div>
        <div className="flex justify-between gap-x-4 items-center mx-5 bg-red-50 p-3">
          <p className="text-red-500 font-poppins-regular text-sm md:text-base">
            This account nedd to get verificated
          </p>
          <button className="bg-red-500 rounded-md text-xs lg:text-base text-white flex justify-center items-center p-2">
            Send verification
          </button>
        </div>
      </div>
      <div className="flex items-center justify-around bg-white my-6 pt-3 pb-3 border-b-[6px] border-zinc-300 rounded-xl shadow-md shadow-zinc-200/50 ">
        <span
          className="relative font-poppins-semiBold before:content-[''] before:absolute before:-left-3 2xs:before:-left-10 lg:before:-left-20
        before:-bottom-4 before:w-14 2xs:before:w-28 lg:before:w-48 before:h-1 before:z-10 before:bg-purple-600 cursor-pointer"
        >
          Post
        </span>
        <span className="cursor-pointer">Reels</span>
        <span className="cursor-pointer">Repsts</span>
      </div>

      <div className="overflow-hidden flex flex-col items-center gap-y-4 mt-5">
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
