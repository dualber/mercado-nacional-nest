import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen bg-bg">
      <Sidebar />
      <main className="w-full min-h-screen px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-16">
        <Outlet />
      </main>
    </div>
  );
}
