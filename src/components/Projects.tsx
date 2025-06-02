import Project from "./Project"
import { ProjectType } from "../types/Project"
import { use } from "react"

interface ProjectsProps {
   projectsPromise: Promise<ProjectType[]>
}

const Projects = ({ projectsPromise }: ProjectsProps) => {
   const projects = use(projectsPromise)

   return (
      <section className="flex flex-col">
         <h1 className="mb-4 font-semibold text-xl text-center md:text-left">Bigger Projects</h1>
         <div className="flex flex-wrap gap-3 justify-center max-w-full mx-auto" style={{ maxWidth: '652px' }}>
            {
               projects.map((project: any, index: number) => (
                  <Project key={index} title={project.title} description={project.description} lang={project.lang} url={project.url} />
               ))
            }
         </div>
      </section>
   )
}

export default Projects