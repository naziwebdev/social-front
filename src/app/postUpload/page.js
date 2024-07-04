import { FaUpload } from "react-icons/fa";
import SmallSizeMenu from "@/components/modules/SmallSizeMenu";

export default function page() {
  return (
    <div className="flex justify-between items-center gap-32 p-10 w-full h-dvh bg-white">
      <div className="w-1/3">
        <h2 className="text-5xl pb-10 font-poppins-medium text-indigo-400">
          File upload
        </h2>
        <div className="flex flex-col justify-center items-center gap-y-5 p-10 py-16 w-full border-[3px] border-dashed border-indigo-500 rounded-xl bg-indigo-50">
          <FaUpload className="text-8xl text-indigo-400" />
          <p className="font-poppins-regular text-3xl text-indigo-400">
            Upload a file
          </p>
          <div className="relative w-2/3 h-14 rounded-xl bg-indigo-400">
            <label
              htmlFor="files"
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-20 text-white font-poppins-bold text-2xl "
            >
              Browse file
            </label>
            <input
              type="file"
              id="files"
              className="w-full h-full opacity-0 "
            />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-5xl pb-8 font-poppins-medium text-indigo-400">
          Post details
        </h2>
        <div className="w-full">
          <label htmlFor="description" className=" text-gray-700 text-lg">
            Descreption <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            className="w-full h-44 border-2 border-gray-300 outline-none resize-none mt-4 rounded-md p-3 placeholder:text-gray-500 placeholder:font-poppins-regular placeholder:text-lg"
            placeholder="Add a description ..."
          ></textarea>
        </div>
        <div className="w-full mt-8">
          <label htmlFor="hashtags" className=" text-gray-700 text-lg">
            Hashtags <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="hashtags"
            className="w-full  border-2 border-gray-300 outline-none resize-none mt-4 rounded-md p-3 placeholder:text-gray-500 placeholder:font-poppins-regular placeholder:text-lg"
            placeholder="beauty , travel , hobby ..."
          />
        </div>
        <p className="pt-2 text-gray-600">Splite the hashtags with comma (,)</p>
        <div className="flex justify-between items-center mt-6">
          <p className="text-red-500 text-lg">
            You need to verify your account
          </p>
          <button className="flex justify-center items-center p-2 bg-red-500 text-white rounded-lg ">
            send verification
          </button>
        </div>
        <button className="ms-auto my-4 flex justify-center items-center p-3 bg-indigo-500 text-white rounded-lg">
          Upload Post
        </button>
      </div>
      <SmallSizeMenu isActiveLargeSize={true} />
    </div>
  );
}
