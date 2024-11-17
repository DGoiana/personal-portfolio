import resume from "../assets/resume.pdf"

const Header = () => {
   return (
      <section className="py-5 px-16 text-black flex justify-between font-semibold">
         <div>
            <a href="/">&lt;/me&gt;</a>
         </div>
         <div className="flex gap-10">
            <a href="/about" className="hover:underline">about</a>
            <a href="/work" className="hover:underline">work</a>
            <a href={resume} download className="hover:underline">resume</a>
            <a className="hover:underline" href="mailto:diogogoianam@gmail.com">contact</a>
         </div>
      </section >
   )
}

export default Header