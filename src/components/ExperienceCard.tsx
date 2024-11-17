import { CalendarDays } from "lucide-react"

interface ExperienceCardProps {
   role: string,
   company: string,
   timestamp: string,
   description: string,
   image: string,
}

const ExperienceCard = ({ role, company, timestamp, description, image }: ExperienceCardProps) => {
   return (
      <div className="flex flex-col gap-2">
         <div className="flex gap-2">
            <img src={image} width={50} className="rounded-full" />
            <div className="flex flex-col">
               <h1 className="font-semibold ">{role}</h1>
               <h2 className="text-sm text-textgray">{company}</h2>
            </div>
         </div>
         <h2>
            <div className="flex text-sm text-textgray items-center gap-1 font-light">
               <CalendarDays size={15} />
               {timestamp}
            </div>
         </h2>
         <h2 className="text-sm">{description}</h2>
      </div>
   )
}

export default ExperienceCard