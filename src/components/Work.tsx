import Experience from "./Experience"
import Projects from "./Projects"

const Work = () => {
   return (
      <>
         <main className="flex flex-col items-center flex-grow">
            <Projects />
            <Experience />
         </main>
      </>
   )
}

export default Work