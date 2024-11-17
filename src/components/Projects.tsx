import Project from "./Project"

const Projects = () => {
   return (
      <section className="flex flex-col">
         <h1 className="mb-4 font-semibold text-xl text-center md:text-left">Bigger Projects</h1>
         <div className="flex flex-wrap gap-3 justify-center max-w-full mx-auto" style={{ maxWidth: '652px' }}>
            <Project title="UNI" description="Mobile app designed to help students of the University of Porto to manage their academic life." lang="Dart" url="https://github.com/NIAEFEUP/uni" />
            <Project title="Pagepal" description="Tinder like application to trade books based on your location." lang="Dart" url="https://github.com/DGoiana/pagepal" />
            <Project title="Simple Tomb of the Mask" description="Simple replica of Tomb of the Mask." lang="Java" url="https://github.com/DGoiana/feup-ldts" />
            <Project title="File Transfer" description="Two layered protocol to facilitate reliable file transfer between computers over RS-232 serial connections." lang="C" url="https://github.com/DGoiana/feup-rcom" />
            <Project title="NBA stats" description="Webapp that scrapes data from a NBA API made with the purpose of finishing CS50's Harvard University Course." lang="Python" url="https://github.com/DGoiana/cs50-final-project" />
            <Project title="College SA Website" description="Website for the students association of my college." lang="TypeScript" url="https://github.com/NIAEFEUP/website-ae" />
         </div>
      </section>
   )
}

export default Projects