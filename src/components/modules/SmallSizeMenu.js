import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { BsSearchHeartFill } from "react-icons/bs";

export default function SmallSizeMenu({ isActiveLargeSize }) {
  return (
    <div
      className={`fixed ${
        isActiveLargeSize ? "block" : "lg:hidden"
      } bottom-2  z-50 left-1/2 -translate-x-1/2  w-[95%] bg-white h-14 xs:h-16 rounded-3xl shadow-purple-400 shadow-2xl`}
    >
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 xs:w-28 h-10 xs:h-14 bg-white rounded-t-full  shadow-purple-600 shadow-inner"></span>
      <ul className="w-full h-full flex items-center justify-around">
        <li>
          <Link href={"/requests"}>
            <FaUserFriends className="text-2xl 2xs:text-3xl" />
          </Link>
        </li>
        <li>
          <Link href={"/messages"}>
            <AiFillMessage className="text-2xl 2xs:text-3xl" />
          </Link>
        </li>
        <li className="absolute -top-5 ">
          <Link href={"/"}>
            <GoHomeFill className="text-3xl 2xs:text-4xl text-purple-600" />
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <BsSearchHeartFill className="text-2xl 2xs:text-3xl" />
          </Link>
        </li>
        <li>
          <Link href={"/"}>
            <MdAccountCircle className="text-2xl 2xs:text-3xl" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
