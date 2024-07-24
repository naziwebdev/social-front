"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordValidator } from "../../../validations/userInfo";
import swal from "sweetalert";

export default function UserPassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(passwordValidator),
  });

  const passwordUpdateHandler = async (data, event) => {
    event.preventDefault();


    const res = await fetch("http://localhost:4002/user/edit-password", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        password: data.password,
        confirmPassword: data.confirmPassword,
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
       reset()
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

  return (
    <div className="w-full mt-6 flex justify-between flex-wrap xs:flex-nowrap gap-6 md:gap-14">
      <form
        onSubmit={handleSubmit(passwordUpdateHandler)}
        className="w-full rounded-2xl  flex flex-col items-center gap-y-4 "
      >
        <div className="w-full sm:w-2/3 flex flex-col gap-y-2">
          <label htmlFor="password" className="font-poppins-medium text-lg">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            placeholder="enter the your fullname"
            className="w-full  p-2.5 rounded-lg bg-indigo-200 border-2 border-black placeholder:text-zinc-500 placeholder:font-poppins-semiBold placeholder:text-sm"
          />
        </div>
        <div className="w-full sm:w-2/3 flex flex-col gap-y-2">
          <label
            htmlFor="confirm-password"
            className="font-poppins-medium text-lg"
          >
            Confirm Password
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            id="confirm-password"
            placeholder="enter the your fullname"
            className="w-full  p-2.5 rounded-lg bg-indigo-200 border-2 border-black placeholder:text-zinc-500 placeholder:font-poppins-semiBold placeholder:text-sm"
          />
        </div>
        <button className="mt-4 p-3 px-8 flex items-center justify-center rounded-md bg-indigo-600 text-white">
          Reset
        </button>
      </form>
    </div>
  );
}
