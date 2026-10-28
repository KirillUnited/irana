import {About, Hero, Process, Projects, Skills, WebsiteTypes} from "@/components/shared";


export default function Home() {
  return (
    <main className="flex-1">
        <Hero/>
        <Projects/>
        <About/>
        <Skills/>
        <Process/>
        <WebsiteTypes/>
    </main>
  );
}
