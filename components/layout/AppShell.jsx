import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import MobileBottomNav from "./MobileBottomNav";

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl grid-cols-1 gap-6 px-4 py-6 lg:grid-cols-[260px_minmax(0,1fr)_320px]">
        <LeftSidebar />
        <main className="min-w-0">{children}</main>
        <RightSidebar />
      </div>
      <MobileBottomNav />
    </div>
  );
}
