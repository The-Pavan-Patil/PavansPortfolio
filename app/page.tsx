import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import RecentProjects from "@/Components/RecentProjects";
import { FloatingNav } from "@/Components/ui/floating-navbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full h-full">
        <FloatingNav navItems={[{name: 'Home', link: '/', icon: <FaHome/>}]}/>
        <p>Hi this is my portfolio</p>
        <Hero/>
        <Grid></Grid>
        <RecentProjects>
          <h1> A small</h1>
        </RecentProjects>
        </div>
    </main>
  );
}
