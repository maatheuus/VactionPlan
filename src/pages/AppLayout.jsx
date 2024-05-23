import { Outlet } from "react-router-dom";

import SideBar from "../ui/SideBar";
import Header from "../ui/Header";

function AppLayout() {
  return (
    <div className="flex h-screen bg-zinc-950 p-2">
      <SideBar />
      <main className="flex-1 bg-zinc-50 rounded-xl overflow-y-scroll">
        <Header />
        <div className="max-w-7xl my-0 mx-auto flex flex-col gap-10 py-10 px-4 small:p-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
