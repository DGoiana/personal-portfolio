import { ExternalLink } from "lucide-react"

interface ProjectProps {
   title: string,
   description: string,
   lang: string,
   url: string,
}

const langColors: { [key: string]: string } = {
   'Dart': 'bg-teal-700',
   'Java': 'bg-lime-700',
   'C': 'bg-red-900',
   'Python': 'bg-yellow-500',
   'TypeScript': 'bg-rose-500'
}

const Project = ({ title, description, lang, url }: ProjectProps) => {
   return (
      <div className="border-gray border-solid border flex flex-col justify-between rounded-lg shadow-sm p-6 gap-5 w-80">
         <div className="flex flex-col flex-wrap">
            <h1 className="font-semibold">{title}</h1>
            <h2 className="text-sm text-textgray">{description}</h2>
         </div>


         <div className="flex justify-between text-xs">
            <div className="flex items-center gap-2">
               <div className={`${langColors[lang]} rounded-full w-4 h-4`} ></div>
               <label>{lang}</label>
            </div>
            <a href={url}>
               <div className="flex items-center gap-1">
                  <h3>View Project</h3>
                  <ExternalLink size={13} />
               </div>
            </a>
         </div>
      </div>
   )
}

export default Project