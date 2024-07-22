"use client";
import Image from "next/image";
import Link from "next/link";

import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Modal from "./Modal";
import { useState } from "react";


export default function PostCard({ post, avatar }) {
  const [openCommentModal, setOpenCommentModal] = useState(false);

  const handleCommentModal = () => setOpenCommentModal(false);

  const likeHandler = async (postID) => {
    const res = await fetch(`http://localhost:4002/post/like`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ postID }),
    });

    if (res.status === 201) {
      location.reload();
    }
  };

  const dislikeHandler = async (postID) => {
    const res = await fetch(`http://localhost:4002/post/dislike`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ postID }),
    });

    if (res.status === 200) {
      location.reload();
    }
  };

  return (
    <div className="overflow-hidden w-full bg-white p-3 rounded-xl shadow-md shadow-zinc-200/50">
      <div className="flex items-center gap-x-5">
        {avatar ? (
          <img
            src={`http://localhost:4002/${avatar}`}
            alt="avatar"
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
        ) : (
          <Image
            src="/images/avatar.png"
            alt="avatar"
            width={500}
            height={500}
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
        )}
        <div>
          <Link
            href={`/profile/${post?.user?._id}`}
            className="font-poppins-medium text-sm xs:text-base"
          >
            {post?.user?.name}
          </Link>
          <p className="text-[.65rem] xs:text-xs text-zinc-500 xs:pt-1">
            Dubai , 6 Minuts Ago
          </p>
        </div>
      </div>
      <img
        className="w-full h-[280px] 2xs:h-[300px] xs:h-[400px] my-4 rounded-xl object-cover"
        alt="post"
        src={`http://localhost:4002/${post?.media?.path}`}
      />
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-x-2 xs:gap-x-4">
          {!post?.hasLike ? (
            <FaRegHeart
              onClick={() => likeHandler(post._id)}
              className="text-xl xs:text-2xl cursor-pointer"
            />
          ) : (
            <FaHeart
              onClick={() => dislikeHandler(post._id)}
              className="text-xl xs:text-2xl cursor-pointer text-red-500"
            />
          )}
          <FaRegComment
            onClick={() => setOpenCommentModal(true)}
            className="text-xl xs:text-2xl cursor-pointer"
          />
          <FiShare2 className="text-xl xs:text-2xl cursor-pointer" />
        </div>
        <div className="flex items-center gap-x-2 xs:gap-x-4">
          <p className="hidden 2xs:flex items-center gap-x-1.5 text-zinc-700">
            <MdOutlineRemoveRedEye className=" text-lg xs:text-xl" />
            <span className="text-xs xs:text-sm">29,428</span>
          </p>
          <div className="cursor-pointer ">
            {post?.isSave ? (
              <FaBookmark className="text-2xl" />
            ) : (
              <FaRegBookmark className="text-2xl" />
            )}
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-x-4">
        <div className="relative">
          <Image
            className="w-10 h-7 xs:w-9 xs:h-9 rounded-full border-[3.5px] border-white "
            alt="post"
            width={1000}
            height={1000}
            src="/images/profile-5.jpg"
          />
          <Image
            className="absolute left-4 top-0 z-10 w-10 h-7 xs:w-9 xs:h-9 rounded-full border-[3.5px] border-white "
            alt="post"
            width={1000}
            height={1000}
            src="/images/profile-17.jpg"
          />
          <Image
            className="absolute left-8 top-0 z-20 w-10 h-7 xs:w-9 xs:h-9 rounded-full border-[3.5px] border-white "
            alt="post"
            width={1000}
            height={1000}
            src="/images/profile-7.jpg"
          />
        </div>
        <p className="ms-6 text-sm xs:text-base">
          Liked by <span className="font-poppins-bold">red_front</span>
          and <span className="font-poppins-bold">2,923 others</span>
        </p>
      </div>
      <p className="mt-4 text-sm xs:text-base text-blue-700">
        {post?.hashtags && post.hashtags.map((item) => `#${item}`)}
      </p>
      <p className="text-zinc-700 mt-2 text-sm xs:text-base">
        {post?.description}
      </p>
      <p
        onClick={() => setOpenCommentModal(true)}
        className="text-stone-400 mt-1.5 text-sm cursor-pointer"
      >
        {`View all ${
          post?.postComments ? post?.postComments?.length : 0
        } comments ...`}
      </p>
      {openCommentModal && (
        <Modal onClose={handleCommentModal}>
          <div>
            {post?.postComments?.length &&
              post.postComments.map((item) => (
                <div className="relative border-b-[1px] border-zinc-200 py-2">
                  <div className="flex items-center gap-x-2 ">
                    <img
                      src={`http://localhost:4002/${item.user.avatar}`}
                      alt="avatar"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-poppins-bold">{item.user.name}</span>
                  </div>
                  <p className="text-gray-900">{item.content}</p>
                  <RiDeleteBin6Fill className="absolute right-0 top-4 text-xl text-red-500 cursor-pointer" />
                </div>
              ))}

              <form className="flex flex-wrap 2xs:flex-nowrap justify-between items-center gap-2 mt-5">
                <textarea className="w-full 2xs:flex-1 resize-none outline-none border-2 border-purple-600 rounded-2xl p-2" placeholder="put a comment ..."></textarea>
                <button type="submit" className="flex justify-center items-center rounded-2xl outline-none h-12 w-16 bg-black text-white ">Add</button>
              </form>
          </div>
        </Modal>
      )}
    </div>
  );
}
