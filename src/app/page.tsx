import Profile from "./Components/About me/profile";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Sidebar from "./Components/Sidebar/sidebar";
import Skills from "./Components/Skills/Skills";

export default function Home() {
  return (
    <main className="relative">
      <Sidebar />
      <Navbar />
      <Profile />
      <Projects />
      <Skills />
    </main>
  );
}
