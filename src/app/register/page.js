"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerValidator from "@/validations/register";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

export default function page() {

  const router = useRouter()

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(registerValidator),
  });

  const registerHandle = async (data, event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:4002/auth/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        username: data.username,
        email: data.email,
        password: data.password,
      }),
       credentials: 'include'
    });

    if (res.status === 201) {
      await res.json();

      swal({
        title: "با موفقیت ثبت نام شد",
        icon: "success",
        buttons: "خانه",
      }).then((value) => {
        if (value) {
          reset();
          router.replace("/");
        }
      });
    } else {
      swal({
        title: "   ثبت نام با شکست روبرو شد",
        icon: "error",
        buttons: "بستن",
      });
      console.log(await res);
    }
  };

  return (
    <div className="relative flex justify-between h-dvh">
      <div className="w-full 2xs:w-[80%] absolute left-1/2 -translate-x-1/2 xs:static xs:left-0 xs:-translate-x-0  xs:flex-1 p-6 sm:p-10 xl:p-14">
        <h2 className="font-poppins-bold text-center xs:text-start text-xl xs:text-3xl md:text-4xl text-white xs:text-gray-900 pb-1 md:pb-3">
          Get started now
        </h2>
        <p className="font-poppins-regular text-center xs:text-start text-white xs:text-gray-700">
          Have an account?{" "}
          <Link
            href="/login"
            className="text-sky-500 xs:text-indigo-800 font-poppins-bold"
          >
            Login
          </Link>
        </p>
        <form
          onSubmit={handleSubmit(registerHandle)}
          className="w-full rounded-2xl  mt-4 xs:mt-8 lg:mt-12 flex flex-col gap-y-4 bg-white/40 p-4 2xs:p-6 xs:bg-transparent xs:p-0"
        >
          <div className="flex flex-col gap-y-2">
            <label htmlFor="name" className="font-poppins-medium text-lg">
              Full name
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              placeholder="enter the your fullname"
              className="w-full md:w-3/4 p-2.5 rounded-lg bg-indigo-200 border-2 border-black placeholder:text-zinc-500 placeholder:font-poppins-semiBold placeholder:text-sm"
            />
            <span className="pt-1.5 text-sm text-red-600">
              {errors.name && errors.name.message}
            </span>
          </div>
          <div className="flex flex-col gap-y-1.5">
            <label htmlFor="username" className="font-poppins-medium text-lg">
              Username
            </label>
            <input
              {...register("username")}
              type="text"
              id="username"
              placeholder="enter the your username "
              className="w-full md:w-3/4 p-2.5 rounded-lg bg-indigo-200 border-2 border-black placeholder:text-zinc-500 placeholder:font-poppins-semiBold placeholder:text-sm"
            />
            <span className="pt-1.5 text-sm text-red-600">
              {errors.username && errors.username.message}
            </span>
          </div>
          <div className="flex flex-col gap-y-1.5">
            <label htmlFor="email" className="font-poppins-medium text-lg">
              Email address
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              placeholder="enter the your email"
              className="w-full md:w-3/4 p-2.5 rounded-lg bg-indigo-200 border-2 border-black placeholder:text-zinc-500 placeholder:font-poppins-semiBold placeholder:text-sm"
            />
            <span className="pt-1.5 text-sm text-red-600">
              {errors.email && errors.email.message}
            </span>
          </div>
          <div className="flex flex-col gap-y-1.5">
            <label htmlFor="password" className="font-poppins-medium text-lg">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              id="password"
              placeholder="enter the your password"
              className="w-full md:w-3/4 p-2.5 rounded-lg bg-indigo-200 border-2 border-black placeholder:text-zinc-500 placeholder:font-poppins-semiBold placeholder:text-sm"
            />
            <span className="pt-1.5 text-sm text-red-600">
              {errors.password && errors.password.message}
            </span>
          </div>
          <button className="w-full md:w-3/4 mt-4 p-3 flex items-center justify-center rounded-md bg-indigo-600 text-white">
            Continue
          </button>
        </form>
      </div>
      <div className="w-full xs:w-1/2 h-dvh">
        <Image
          className="w-full h-full"
          alt="register-pic"
          width={1000}
          height={1000}
          src="/images/bg.jpg"
        />
      </div>
    </div>
  );
}
