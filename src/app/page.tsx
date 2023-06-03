import Profile from "./Components/About me/profile";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Bio from "./Components/Profile/aboutme";
import Projects from "./Components/Projects/Projects";
import Sidebar from "./Components/Sidebar/sidebar";
import Skills from "./Components/Skills/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <Sidebar />
      <Navbar />
      <Profile />
      <Projects />
      <Skills />
      <Bio />
      <Contacts />
      <Footer />
      <div>
        <div className="absolute box-border left-[1284px] top-[672px]">
          <Image
            src="/backrect1.png"
            width={91}
            height={91}
            alt="background image"
          />
        </div>
        <div className="absolute box-border left-[1298px] top-[1160px]">
          <Image
            src="/backrect2.png"
            width={155}
            height={155}
            alt="background image 2"
          />
        </div>
        <div className="absolute box-border -left-[77px] top-[2125px]">
          <Image
            src="/backrect3.png"
            width={155}
            height={155}
            alt="background image"
          />
        </div>
        <div className="flex flex-col justify-between items-start p-2 gap-4 absolute w-[83px] h-[103px] left-[1266px] top-[2294px] overflow-hidden">
          <Image src="/dot1.png" alt="dots 1" width={83} height={4} />
          <Image src="/dot2.png" alt="dots 1" width={83} height={4} />
          <Image src="/dot3.png" alt="dots 1" width={83} height={4} />
          <Image src="/dot4.png" alt="dots 1" width={83} height={4} />
          <Image src="/dot5.png" alt="dots 1" width={83} height={4} />
        </div>

        <div className="flex flex-col justify-between items-start p-0 gap-4 absolute w-[103px] h-[103px] -left-[51px] top-[2705px] overflow-hidden">
          <Image src="/dot1.png" alt="dots 1" width={83} height={4} />
          <Image src="/dot2.png" alt="dots 1" width={83} height={4} />
          <Image src="/dot3.png" alt="dots 1" width={83} height={4} />
          <Image src="/dot4.png" alt="dots 1" width={83} height={4} />
          <Image src="/dot5.png" alt="dots 1" width={83} height={4} />
        </div>
      </div>
    </main>
  );
}
