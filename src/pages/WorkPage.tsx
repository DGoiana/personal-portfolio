import { Suspense } from "react"
import Layout from "../components/Layout"
import Work from "../components/Work"
import { ProjectType } from "../types/Project";
import projects from "../assets/projects.json"

const fetchProjects = (): Promise<ProjectType[]> => {
   return Promise.resolve(projects as ProjectType[])
}


const WorkPage = () => {
   const projectsPromise = fetchProjects();

   return (
      <Layout child={
         <Suspense fallback={<></>}>
            <Work projectsPromise={projectsPromise}/>
         </Suspense>
      } />
   )
}

export default WorkPage