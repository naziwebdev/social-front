import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex items-center justify-center w-full h-[100px] font-poppins-medium bg-zinc-100">
      <p className="hidden lg:block">Tick Social Developed By</p>
      <Link href={"https://github.com/naziwebdev"}
      className="ps-1 font-poppins-bold text-indigo-600">@naziwebdev</Link>
    </div>
  );
}
