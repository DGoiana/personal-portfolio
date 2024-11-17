import { useState } from 'react';
import resume from "../assets/resume.pdf";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <section className="py-5 px-16 text-black flex justify-between items-center font-semibold">
         <div>
            <a href="/">&lt;/me&gt;</a>
         </div>
         <div className="hidden md:flex gap-10">
            <a href="/about" className="hover:underline">about</a>
            <a href="/work" className="hover:underline">work</a>
            <a href={resume} download className="hover:underline">resume</a>
            <a className="hover:underline" href="mailto:diogogoianam@gmail.com">contact</a>
         </div>
         <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
               </svg>
            </button>
         </div>
         {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-mainbg flex flex-col items-center gap-4 py-5 md:hidden max-h-screen overflow-y-auto">
               <a href="/about" className="hover:underline">about</a>
               <a href="/work" className="hover:underline">work</a>
               <a href={resume} download className="hover:underline">resume</a>
               <a className="hover:underline" href="mailto:diogogoianam@gmail.com">contact</a>
            </div>
         )}
      </section>
   );
};

export default Header;