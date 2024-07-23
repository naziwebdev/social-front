"use client";
import PostCard from "@/components/modules/PostCard";
import Image from "next/image";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { FaLock } from "react-icons/fa";
import Modal from "@/components/modules/Modal";
import Reels from "@/components/modules/Reels";

export default function profileContent({ pageID }) {
  const [pageInfo, setPageInfo] = useState({});
  const [openFollowModal, setOpenFollowModal] = useState(false);
  const [openUnfollowModal, setOpenUnfollowModal] = useState(false);
  const [btnShowContent, setBtnShowContent] = useState("post");

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
            {pageInfo?.ownPage ? (
              <Link
                href={`/profileUpdate/${pageInfo.pageID}`}
                className="flex justify-center items-center bg-transparent h-10 md:h-12 w-24 md:w-28 border-2 border-purple-700 rounded-3xl text-purple-700 p-2 text-sm font-poppins-semiBold"
              >
                Manage
              </Link>
            ) : pageInfo.haveFollowed ? (
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
        {pageInfo.page?.isVerified === false && pageInfo.ownPage === true && (
          <div className="flex justify-between gap-x-4 items-center mx-5 bg-red-50 p-3">
            <p className="text-red-500 font-poppins-regular text-sm md:text-base">
              This account nedd to get verificated
            </p>
            <button className="bg-red-500 rounded-md text-xs lg:text-base text-white flex justify-center items-center p-2">
              Send verification
            </button>
          </div>
        )}
      </div>
      {pageInfo.hasAccessPage === true ? (
        <>
          <div className="flex items-center justify-around bg-white my-6 pt-3 pb-3 border-b-[6px] border-zinc-300 rounded-xl shadow-md shadow-zinc-200/50 ">
            <span
              onClick={() => setBtnShowContent("post")}
              className={`cursor-pointer ${
                btnShowContent === "post" && "marker"
              }`}
            >
              Post
            </span>
            <span
              onClick={() => setBtnShowContent("reels")}
              className={`cursor-pointer ${
                btnShowContent === "reels" && "marker"
              }`}
            >
              Reels
            </span>
            <span
              onClick={() => setBtnShowContent("repost")}
              className={`cursor-pointer ${
                btnShowContent === "repost" && "marker"
              }`}
            >
              Repsts
            </span>
          </div>

          <div className="overflow-hidden flex flex-col items-center gap-y-4 mt-5">
            {btnShowContent === "post" ? (
              pageInfo.posts?.map((item) => (
                <PostCard
                  key={item._id}
                  avatar={pageInfo.page?.avatar}
                  post={item}
                />
              ))
            ) : btnShowContent === "reels" ? (
              <div className="flex justify-center flex-wrap gap-4">
                <Reels imgSrc={"/images/feed-1.jpg"} />
                <Reels imgSrc={"/images/feed-2.jpg"} />
                <Reels imgSrc={"/images/feed-3.jpg"} />
                <Reels imgSrc={"/images/feed-4.jpg"} />
              </div>
            ) : (
              <div className="">develope commig soon ...</div>
            )}
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
