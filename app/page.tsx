
import Clients from "@/Components/Company";
import Footer from "@/Components/Footer";
import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import Plan from "@/Components/Plan";
import RecentProjects from "@/Components/RecentProjects";
import { FloatingNav } from "@/Components/ui/floating-navbar";
import WorkExperience from "@/Components/WorkExperience";

import { navItems } from "@/data";



export default function Home() {
  return (
    
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto  overflow-clip sm:px-10 px-5">
      <FloatingNav navItems={navItems}/>
      <div className="max-w-7xl w-full h-full">
        
        <p>Hi this is my portfolio</p>
        <Hero/>
        <Grid></Grid>
        <RecentProjects/>
        <WorkExperience/>
        <Clients/>
        <Plan></Plan>
        
        {/* <Approach/> */}
        <Footer/>
      </div>
    </main>
  );
}
