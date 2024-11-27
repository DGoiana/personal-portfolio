import { ExternalLink } from "lucide-react"
import Experience from "./Experience"
import Projects from "./Projects"

const Work = () => {
   return (
      <>
         <main className="flex flex-col items-center flex-grow">
            <Projects />
            <div className="border-gray border-solid border flex items-center justify-between rounded-lg shadow-sm p-6 gap-5 w-80 mt-3">
               <div className="flex items-center gap-3">
                  <div className={"bg-purple-950 rounded-full w-4 h-4"} ></div>
                  <h1 className="font-semibold">Cork Contributor</h1>
               </div>

               <a href="https://github.com/buresdv/Cork">
                  <ExternalLink size={13} />
               </a>
            </div>
            <Experience />
         </main >
      </>
   )
}

export default Work