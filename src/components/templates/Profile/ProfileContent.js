"use client";
import PostCard from "@/components/modules/PostCard";
import Image from "next/image";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { FaLock } from "react-icons/fa";
import Modal from "@/components/modules/Modal";

export default function profileContent({ pageID }) {
  const [pageInfo, setPageInfo] = useState({});
  const [openFollowModal, setOpenFollowModal] = useState(false);
  const [openUnfollowModal, setOpenUnfollowModal] = useState(false);

  const closeFollowModal = () => {
    setOpenFollowModal(false);
  };

  const closeUnfollowModal = () => {
    setOpenUnfollowModal(false);
  };

  const getpage = async () => {
    const res = await fetch(`http://localhost:4002/page/${pageID}`, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    setPageInfo(data);
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
      }).then((value) => {
        if (value) {
          location.reload();
        }
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
      swal({
        title: "با موفقیت آنفالو شد",
        icon: "success",
        buttons: "بستن",
      }).then((value) => {
        if (value) {
          location.reload();
        }
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
          {pageInfo.page?.avatar ? (
            <img
              src={`http://localhost:4002/${pageInfo.page?.avatar}`}
              alt="avatar"
              className="absolute left-6 -top-16 w-[110px] h-[105px] md:w-[120px] md:h-[115px] rounded-full object-cover"
            />
          ) : (
            <Image
              src="/images/avatar.png"
              alt="avatar"
              width={500}
              height={500}
              className="absolute left-6 -top-16 w-[110px] h-[105px] md:w-[130px] md:h-[120px] rounded-full object-cover"
            />
          )}
          <h2 className="font-poppins-bold text-xl 2xs:text-2xl pt-10 md:pt-12">
            {pageInfo.page?.name}
          </h2>
          <p className="font-poppins-regular text-stone-600 pt-1">
            @ {pageInfo.page?.name}
          </p>
        </div>
        <div className="flex justify-between items-center gap-x-5 lg:gap-x-36 p-5">
          <p className="md:text-lg text-stone-700 font-poppins-regular">
            {pageInfo?.page?.biogeraphy}
          </p>
          <div className="flex flex-wrap xs:flex-nowrap  items-center gap-2">
            {pageInfo?.ownPage && (
              <button className="bg-transparent h-10 md:h-12 w-24 md:w-28 border-2 border-purple-700 rounded-3xl text-purple-700 p-2 text-sm font-poppins-semiBold">
                Manage
              </button>
            )}
            {pageInfo.haveFollowed ? (
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
          <p
            onClick={() => setOpenFollowModal(true)}
            className="text-stone-600 md:text-lg cursor-pointer"
          >
            <span className="font-poppins-bold text-black md:text-xl">
              {pageInfo.followers?.length}
            </span>{" "}
            Followers
          </p>
          <p
            onClick={() => setOpenUnfollowModal(true)}
            className="text-stone-600 md:text-lg cursor-pointer"
          >
            <span className="font-poppins-bold text-black md:text-xl">
              {pageInfo.following?.length}
            </span>{" "}
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
      {pageInfo.hasAccessPage === true ? (
        <>
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
            {pageInfo.postsWithLikes?.map((item) => (
              <PostCard
                key={item._id}
                avatar={pageInfo.page?.avatar}
                post={item}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="flex gap-x-2 mb-28 items-center py-10 font-poppins-xBold text-xl justify-center my-6 p-5 bg-white ">
          the page is private
          <FaLock className="text-3xl -order-1" />
        </div>
      )}
      {openFollowModal && pageInfo.hasAccessPage && (
        <Modal onClose={closeFollowModal}>
          <h1 className="text-xl font-poppins-bold border-b-2 pb-2 border-black">
            followers list :
          </h1>

          {pageInfo.followers.length > 0 ? (
            pageInfo.followers.map((item) => (
              <Link
                href={`/profile/${item._id}`}
                className="flex items-center gap-x-4  pt-8"
              >
                {pageInfo.page?.avatar ? (
                  <img
                    src={`http://localhost:4002/${pageInfo.page?.avatar}`}
                    alt="avatar"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <Image
                    src="/images/avatar.png"
                    alt="avatar"
                    width={500}
                    height={500}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="text-xl font-poppins-medium">{item.name}</p>
                  <p className="">@{item.username}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center pt-8">yet no have followers</p>
          )}
        </Modal>
      )}
      {openUnfollowModal && pageInfo.hasAccessPage && (
        <Modal onClose={closeUnfollowModal}>
          <h1 className="text-xl font-poppins-bold border-b-2 pb-2 border-black">
            following list :
          </h1>

          {pageInfo.following.length > 0 ? (
            pageInfo.following.map((item) => (
              <Link
                href={`/profile/${item._id}`}
                className="flex items-center gap-x-4  pt-8"
              >
                {pageInfo.page?.avatar ? (
                  <img
                    src={`http://localhost:4002/${pageInfo.page?.avatar}`}
                    alt="avatar"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <Image
                    src="/images/avatar.png"
                    alt="avatar"
                    width={500}
                    height={500}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
                <div>
                  <p className="text-xl font-poppins-medium">{item.name}</p>
                  <p className="">@{item.username}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center pt-8">yet no have following</p>
          )}
        </Modal>
      )}
    </div>
  );
}
