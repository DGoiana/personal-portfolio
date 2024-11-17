import ExperienceCard from "./ExperienceCard"
import yariLabsLogo from "../assets/yarilabs_logo.jpg"
import niLogo from "../assets/ni_icon.png"

const Experience = () => {
   return (
      <section className="flex flex-col my-10">
         <h1 className="mb-4 font-semibold text-xl">Work Experience</h1>
         <div className="border-gray border-solid border rounded-lg shadow-sm p-6 flex flex-col" style={{ maxWidth: '652px' }}>
            <ExperienceCard role="Frontend Mobile Developer Intern" company="Yari Labs" timestamp="2024 Jun - 2024 Jul" image={yariLabsLogo} description="Developed a web-based game, Dharma Immortals, using Flutter and the Flame Engine. Collaborated with the backend team to integrate real-time features using WebSockets and Elixir." />
            <hr className="mt-6 mb-5 border-top border-solid border-gray-300 w-96 h-1 self-center"></hr>
            <ExperienceCard role="Project Manager" company="NIAEFEUP" timestamp="2024 Jun - Present" image={niLogo} description="Leader of a development team dedicated to enhancing students' academic experiences through a mobile application called UNI. Currently utilizing Flutter for cross-platform development, with the primary goal of improving the application's quality and usability across the entire university." />
         </div>
      </section >
   )
}

export default Experience