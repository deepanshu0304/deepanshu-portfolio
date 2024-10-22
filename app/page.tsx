import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Alegreya:wght@400;600;700;800;900&display=swap"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap" rel="stylesheet"></link>
      </Head>
    <main className="flex flex-col items-center">
      <Intro />
      <div className="flex flex-col items-center px-4">
        {/* <SectionDivider /> */}
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
    </main>
    </>
  );
}
