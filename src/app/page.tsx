import Profile from "./Components/About me/profile";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Sidebar from "./Components/Sidebar/sidebar";

export default function Home() {
  return (
    <main className="relative">
      <Sidebar />
      <Navbar />
      <Profile />
      <Projects />
    </main>
  );
}
