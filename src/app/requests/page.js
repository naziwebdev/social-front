import Header from "@/components/modules/Header";
import SmallSizeMenu from "@/components/modules/SmallSizeMenu";
import RequestsBox from "@/components/modules/RequestsBox";

export default function page() {
  return (
    <div className="pb-32">
      <Header />
      <div className="px-5 sm:px-10">
        <RequestsBox />
      </div>
      <SmallSizeMenu />
    </div>
  );
}
