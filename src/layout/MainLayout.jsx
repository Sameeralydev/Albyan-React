import { Outlet } from "react-router-dom";
import HeroNavbar from "./navbar/HeroNavbar";
import Footer from "./footer/Footer";

export default function MainLayout() {
  return (
    <div className="h-auto flex flex-col">
      <HeroNavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
