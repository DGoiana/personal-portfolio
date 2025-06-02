import { Suspense } from "react"
import Layout from "../components/Layout"
import Work from "../components/Work"
import { ProjectType } from "../types/Project";

const fetchProjects = (): Promise<ProjectType[]> => {
   return fetch('projects.json').then(res => res.json());
}


const WorkPage = () => {
   const projectsPromise = fetchProjects();

   return (
      <Layout child={
         <Suspense fallback={<div>Loading projects...</div>}>
            <Work projectsPromise={projectsPromise}/>
         </Suspense>
      } />
   )
}

export default WorkPage