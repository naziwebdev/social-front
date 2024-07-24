"use client";

import SmallSizeMenu from "@/components/modules/SmallSizeMenu";
import UserInfos from "@/components/templates/EditProfile/UserInfos";
import UserPassword from "@/components/templates/EditProfile/UserPassword";
import { useState } from "react";

export default function page() {
  const [activeTab, setActiveTab] = useState("info");
  return (
    <div className="overflow-hidden p-6 xs:p-12 mb-24 flex justify-center items-center">
      <div className="overflow-hidden w-full pb-6 px-4 xs:px-8 rounded-xl shadow-md shadow-zinc-200/50 bg-white">
        <div className="flex items-center flex-wrap 2xs:flex-nowrap gap-y-6 gap-x-4 xs:gap-x-16 mt-8 pb-3 border-b-2 border-zinc-100 text-sm xs:text-base">
          <span
            onClick={() => setActiveTab("info")}
            className={`relative  ${activeTab === 'info' ? 'marker-2' : ''}`}
          >
            Edit profile
          </span>
          <span className={`relative ${activeTab === 'pass' ? 'marker-2' : ''}`}
          onClick={() => setActiveTab("pass")} >
            Reset password
          </span>
        </div>
        {activeTab === "info" ? <UserInfos /> : <UserPassword />}
      </div>
      <SmallSizeMenu isActiveLargeSize={true} />
    </div>
  );
}
