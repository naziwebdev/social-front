"use client";
import PostCard from "@/components/modules/PostCard";
import { useEffect, useState } from "react";

export default function () {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await fetch("http://localhost:4002/post");
    const data = await res.json();
    if (res.status === 200) {
      setPosts(data);
    }
  };


  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="overflow-hidden flex flex-col items-center gap-y-4 mt-8 ">
      {posts.map((item) => (
        <PostCard key={item._id} avatar={item.user.avatar} post={item} />
      ))}
    </div>
  );
}
