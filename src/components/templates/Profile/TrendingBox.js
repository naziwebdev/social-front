import { FaArrowTrendUp } from "react-icons/fa6";

export default function TrendingBox() {
  return (
    <div className="w-full p-4 bg-white shadow-md shadow-zinc-200/50 rounded-lg mt-5">
      <p className="font-poppins-bold text-lg pb-3">Trending now</p>
      <div className="flex items-center gap-x-2 p-3">
        <FaArrowTrendUp className="text-stone-500" />
        <p className="font-poppins-bold">#Developer</p>
      </div>
      <div className="flex items-center gap-x-2 p-3">
        <FaArrowTrendUp className="text-stone-500" />
        <p className="font-poppins-bold">#Travel</p>
      </div>
      <div className="flex items-center gap-x-2 p-3">
        <FaArrowTrendUp className="text-stone-500" />
        <p className="font-poppins-bold">#Beauty</p>
      </div>
      <div className="flex items-center gap-x-2 p-3">
        <FaArrowTrendUp className="text-stone-500" />
        <p className="font-poppins-bold">#Job</p>
      </div>
      <div className="flex items-center gap-x-2 p-3">
        <FaArrowTrendUp className="text-stone-500" />
        <p className="font-poppins-bold">#Hobby</p>
      </div>
    </div>
  );
}
