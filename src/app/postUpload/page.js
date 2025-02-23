"use client";

import { FaUpload } from "react-icons/fa";
import SmallSizeMenu from "@/components/modules/SmallSizeMenu";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import postValidator from "@/validations/post";
import swal from "sweetalert";
import { useEffect, useState } from "react";
import { userInfo } from "@/utils/userInfo";

export default function page() {
  
  const getUserInfo = async () => {
    const info = await userInfo();
    setUser(info);
  };

  const [user, setUser] = useState({});

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      description: "",
      hashtags: "",
      media: {},
    },
    resolver: yupResolver(postValidator),
  });

  useEffect(() => {
    getUserInfo();
  }, []);

  const postHandler = async (data, event) => {
    event.preventDefault();

    const formData = new FormData();

    const tags = data.hashtags.split(",");

    formData.append("description", data.description);
    formData.append("hashtags", tags);
    formData.append("media", data.media);

    fetch("http://localhost:4002/post", {
      method: "POST",
      body: formData,
      credentials: "include",
    }).then((res) => {
      if (res.status === 201) {
        res.json();
        swal({
          title: "پست با موفقیت افزوده شد",
          icon: "success",
          buttons: "بستن",
        }).then((value) => {
          if (value) {
            reset();
          }
        });
      } else if (res.status === 403) {
        swal({
          title: "ابتدا اکانت خود را وریفای کنید",
          icon: "warning",
          buttons: "بستن",
        });
      } else {
        swal({
          title: "عملیات با شکست روبرو شد",
          icon: "error",
          buttons: "بستن",
        });
      }
    });

    // reset();
  };

  return (
    <form
      onSubmit={handleSubmit(postHandler)}
      className="flex flex-col xs:flex-row justify-between gap-10 lg:gap-32 p-6 sm:p-10 w-full bg-white"
    >
      <div className="w-full xs:w-1/3">
        <h2 className="text-3xl lg:text-5xl pb-5 lg:pb-10 font-poppins-medium text-indigo-400">
          File upload
        </h2>
        <div className="flex flex-col justify-center items-center gap-y-5 p-5 lg:p-10 py-16 w-full border-[3px] border-dashed border-indigo-500 rounded-xl bg-indigo-50">
          <FaUpload className="text-8xl text-indigo-400" />
          <p className="font-poppins-regular text-3xl text-indigo-400 p-2">
            Upload a file
          </p>
          <div className="relative w-full lg:w-2/3 h-14 rounded-xl bg-indigo-400">
            <label
              htmlFor="files"
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 cursor-pointer text-white font-poppins-bold text-2xl py-3"
            >
              Browse file
            </label>
            <Controller
              control={control}
              name={"media"}
              render={({ field: { value, onChange, ...field } }) => {
                return (
                  <input
                    {...field}
                    className="w-full h-full opacity-0 "
                    onChange={(event) => {
                      onChange(event.target.files?.[0]);
                    }}
                    type="file"
                    id="files"
                  />
                );
              }}
            />
            <span className="pt-1.5 text-sm text-red-600">
              {errors.media && errors.media.message}
            </span>
          </div>
        </div>
      </div>
      <div className="flex-1 pb-10">
        <h2 className="text-3xl lg:text-5xl pb-5 lg:pb-8 font-poppins-medium text-indigo-400">
          Post details
        </h2>
        <div className="w-full">
          <label htmlFor="description" className=" text-gray-700 text-lg">
            Descreption <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register("description")}
            id="description"
            className="w-full h-44 border-2 border-gray-300 outline-none resize-none mt-4 rounded-md p-3 placeholder:text-gray-500 placeholder:font-poppins-regular placeholder:text-lg"
            placeholder="Add a description ..."
          ></textarea>
          <span className="pt-1.5 text-sm text-red-600">
            {errors.description && errors.description.message}
          </span>
        </div>
        <div className="w-full mt-8">
          <label htmlFor="hashtags" className=" text-gray-700 text-lg">
            Hashtags
          </label>
          <input
            {...register("hashtags")}
            type="text"
            id="hashtags"
            className="w-full  border-2 border-gray-300 outline-none resize-none mt-4 rounded-md p-3 placeholder:text-gray-500 placeholder:font-poppins-regular placeholder:text-lg"
            placeholder="beauty , travel , hobby ..."
          />
          <span className="pt-1.5 text-sm text-red-600">
            {errors.hashtags && errors.hashtags.message}
          </span>
        </div>
        <p className="pt-2 text-gray-600">Splite the hashtags with comma (,)</p>
        {user.isVerified === false && (
          <div className="flex justify-between items-center mt-6">
            <p className="text-red-500 text-lg">
              You need to verify your account
            </p>
            <button className="flex justify-center items-center p-2 bg-red-500 text-white rounded-lg ">
              send verification
            </button>
          </div>
        )}
        <button
          type="submit"
          className="ms-auto my-4 flex justify-center items-center p-3 bg-indigo-500 text-white rounded-lg"
        >
          Upload Post
        </button>
      </div>
      <SmallSizeMenu isActiveLargeSize={true} />
    </form>
  );
}
