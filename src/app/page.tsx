import { Fira_Code } from "next/font/google";
import Profile from "./Components/About me/profile";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/sidebar";

export default function Home() {
  return (
    <main className="relative">
      <Sidebar />
      <Navbar />
      <Profile />
    </main>
  );
}
