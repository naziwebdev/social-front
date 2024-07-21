"use client";

import Image from "next/image";
import SmallSizeMenu from "@/components/modules/SmallSizeMenu";
import { FaPen } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import userValidator from "@/validations/userInfo";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

export default function page() {
  const [user, setUser] = useState({});
  const [avatar, setAvatar] = useState({});

  const router = useRouter();

  const getme = async () => {
    const res = await fetch("http://localhost:4002/auth/me", {
      credentials: "include",
    });
    const data = await res.json();

    if (res.status === 200) {
      setUser(data);
    }
  };

  useEffect(() => {
    getme();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user.name,
      username: user.username,
      email: user.email,
    },
    resolver: yupResolver(userValidator),
  });

  const userUpdateHandler = async (data, event) => {
    event.preventDefault();

    const userEmail = data.email || user.email;

    const res = await fetch("http://localhost:4002/user/edit-user", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        username: data.username,
        email: userEmail,
      }),
      credentials: "include",
    });

    if (res.status === 200) {
      await res.json();

      swal({
        title: "با موفقیت  آپدیت شد",
        icon: "success",
        buttons: "بستن",
      }).then((value) => {
        if (value) {
          router.refresh();
        }
      });
    } else {
      swal({
        title: "عملیات با شکست روبرو شد",
        icon: "error",
        buttons: "بستن",
      });
      console.log(await res);
    }
  };

  console.log(user)

  const avatarHandler = async (event) => {
    event.preventDefault();

    let formData = new FormData();

    formData.append("avatar", avatar);

    if (avatar) {
      const res = await fetch("http://localhost:4002/user/edit-avatar", {
        method: "PUT",
        body: formData,
        credentials: "include",
      });

      if (res.status === 200) {
        await res.json();

        swal({
          title: "با موفقیت  آپلود شد",
          icon: "success",
          buttons: "بستن",
        }).then((value) => {
          if (value) {
            location.reload();
          }
        });
      } else {
        swal({
          title: "عملیات با شکست روبرو شد",
          icon: "error",
          buttons: "بستن",
        });
        console.log(await res);
      }
    }
  };

  return (
    <div className="overflow-hidden p-6 xs:p-12 mb-24 flex justify-center items-center">
      <div className="overflow-hidden w-full pb-6 px-4 xs:px-8 rounded-xl shadow-md shadow-zinc-200/50 bg-white">
        <div className="flex items-center flex-wrap 2xs:flex-nowrap gap-y-6 gap-x-4 xs:gap-x-16 mt-8 pb-3 border-b-2 border-zinc-100 text-sm xs:text-base">
          <span
            className="relative text-purple-700 font-poppins-semiBold before:content-[''] before:absolute before:-left-1.5
        before:-bottom-4 before:w-24 before:h-1 before:z-10 before:bg-purple-700 cursor-pointer"
          >
            Edit profile
          </span>
          <span className="cursor-pointer">Preferences</span>
          <span className="cursor-pointer">security</span>
        </div>
        <div className="w-full mt-6 flex justify-between flex-wrap xs:flex-nowrap gap-6 md:gap-14">
          <div className="relative w-[130px] h-[130px] mx-auto xs:mx-0  xs:w-[150px] xs:h-[125px] rounded-full">
            {user.avatar ? (
              <img
                src={`http://localhost:4002/${user?.avatar}`}
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            ) : (
              <Image
                src="/images/avatar.png"
                alt="avatar"
                width={500}
                height={500}
                className="w-full h-full rounded-full object-cover"
              />
            )}
            <form className="relative">
              <label
                htmlFor="files"
                className="absolute top-[16%] -translate-y-1/2 left-1/2 -translate-x-1/2 z-20  "
              >
                <FaPen className="absolute w-10 h-10 bottom-0 cursor-pointer p-2 text-4xl bg-indigo-500 rounded-full text-white" />
              </label>
              <input
                type="file"
                id="files"
                onChange={(event) => setAvatar(event.target.files[0])}
                className="w-full h-full opacity-0 "
              />
              <button
                onClick={avatarHandler}
                type="submit"
                className="w-20  py-2 bg-black text-white rounded-xl"
              >
                upload
              </button>
            </form>
          </div>
          <form
            onSubmit={handleSubmit(userUpdateHandler)}
            className="w-full rounded-2xl  flex flex-col gap-y-4 "
          >
            <div className="flex flex-col gap-y-2">
              <label htmlFor="name" className="font-poppins-medium text-lg">
                Full name
              </label>
              <input
                {...register("name")}
                defaultValue={user.name}
                type="text"
                id="name"
                placeholder="enter the your fullname"
                className="w-full  p-2.5 rounded-lg bg-indigo-200 border-2 border-black placeholder:text-zinc-500 placeholder:font-poppins-semiBold placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-y-1.5">
              <label htmlFor="username" className="font-poppins-medium text-lg">
                Username
              </label>
              <input
                {...register("username")}
                defaultValue={user.username}
                type="text"
                id="username"
                placeholder="enter the your username "
                className="w-full p-2.5 rounded-lg bg-indigo-200 border-2 border-black placeholder:text-zinc-500 placeholder:font-poppins-semiBold placeholder:text-sm"
              />
            </div>
            <div className="flex flex-col gap-y-1.5">
              <label htmlFor="email" className="font-poppins-medium text-lg">
                Email address
              </label>
              <input
                {...register("email")}
                defaultValue={user.email}
                type="email"
                id="email"
                placeholder="enter the your email"
                className="w-full p-2.5 rounded-lg bg-indigo-200 border-2 border-black placeholder:text-zinc-500 placeholder:font-poppins-semiBold placeholder:text-sm"
              />
            </div>
            <button className="w-full  mt-4 p-3 flex items-center justify-center rounded-md bg-indigo-600 text-white">
              Save change
            </button>
          </form>
        </div>
      </div>
      <SmallSizeMenu isActiveLargeSize={true} />
    </div>
  );
}
