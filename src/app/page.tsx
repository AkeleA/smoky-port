import Image from "next/image";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/sidebar";

export default function Home() {
  return (
    <main className="relative">
      <Sidebar />
      <Navbar />
    </main>
  );
}
