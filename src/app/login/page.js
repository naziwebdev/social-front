"use client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginValidator from "@/validations/login";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginValidator),
  });

  const loginHandle = async (data, event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:4002/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      credentials: "include",
    });

    if (res.status === 200) {
      await res.json();

      swal({
        title: "با موفقیت لاگین شد",
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
        title: "لاگین با شکست روبرو شد",
        icon: "error",
        buttons: "بستن",
      });
      console.log(await res);
    }
  };

  return (
    <div className="relative flex justify-between items-center  h-dvh">
      <div className="w-full 2xs:w-[80%] absolute left-1/2 -translate-x-1/2 xs:static xs:left-0 xs:-translate-x-0  xs:flex-1 p-6 sm:p-10 xl:p-14">
        <h2 className="font-poppins-bold text-center xs:text-start text-xl xs:text-3xl md:text-4xl text-white xs:text-gray-900 pb-1 md:pb-3">
          Welcome back
        </h2>

        <form
          onSubmit={handleSubmit(loginHandle)}
          className="w-full rounded-2xl  mt-4 xs:mt-8 lg:mt-12 flex flex-col gap-y-4 bg-white/40 p-4 2xs:p-6 xs:bg-transparent xs:p-0"
        >
          <div className="flex flex-col gap-y-1.5">
            <label htmlFor="identifier" className="font-poppins-medium text-lg">
              email
            </label>
            <input
              {...register("email")}
              type="email"
              id="identifier"
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
          <p className="font-poppins-regular text-center xs:text-start text-white xs:text-gray-700">
            Forget the password ?{" "}
            <Link
              href="/recovery"
              className="text-sky-500 xs:text-indigo-800 font-poppins-bold"
            >
              recovery
            </Link>
          </p>
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
