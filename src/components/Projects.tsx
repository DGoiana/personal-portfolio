import Project from "./Project"
import { ProjectType } from "../types/Project"
import { use } from "react"

interface ProjectsProps {
   projectsPromise: Promise<ProjectType[]>
}

const Projects = ({ projectsPromise }: ProjectsProps) => {
   const projects = use(projectsPromise)

   return (
      <section className="flex flex-col items-center">
         <h1 className="mb-5 font-semibold text-lg underline">projects</h1>
         <div className="flex flex-wrap gap-3 justify-center max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
            {
               projects.map((project: any, index: number) => (
                  <Project key={index} title={project.title} description={project.description} lang={project.lang} url={project.url} favorite={project.favorite}/>
               ))
            }
         </div>
      </section>
   )
}

export default Projects