import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ child }: { child: React.ReactNode }) => {
   return (
      <>
         <Header />
         {child}
         <Footer />
      </>
   )
}
export default Layout