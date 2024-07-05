import Header from "@/components/modules/Header";
import UtilsSidebar from "@/components/templates/Profile/UtilsSidebar";
import ProfileContent from "@/components/templates/Profile/ProfileContent";
import SmallSizeMenu from "@/components/modules/SmallSizeMenu";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main className="flex justify-between gap-x-3 px-1 pb-6 mt-6">
        <ProfileContent />
        <UtilsSidebar/>
      </main>
      <SmallSizeMenu isActiveLargeSize={false} />
    </div>
  );
}
