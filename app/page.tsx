import AboutMe from "./components/sections/aboutme/AboutMe";
import GetInTouch from "./components/sections/getintouch/GetInTouch";
import Intro from "./components/sections/intro/Intro";
import Projects from "./components/sections/projects/Projects";

export default function Home() {
  return (
    <main className=" bg-primary-1 text-secondary dark:bg-primary-dark-3 dark:text-secondary-dark">

      <Intro />
      <AboutMe />
      <Projects />
      <GetInTouch />

    </main>
  )
}
