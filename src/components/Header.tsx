const Header = () => {
   return (
      <section className="py-5 px-16 text-black flex justify-between font-semibold">
         <div>
            <a href="/">&lt;/me&gt;</a>
         </div>
         <div className="flex gap-10">
            <a href="/about">about</a>
            <a href="/work">work</a>
            <a>resume</a>
            <a>contact</a>
         </div>
      </section >
   )
}

export default Header