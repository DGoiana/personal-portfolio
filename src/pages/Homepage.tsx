import Home from "../components/Home"
import Layout from "../components/Layout"

const Homepage = () => {
   return (
      <>
         <Layout child={<Home />} />
      </>
   )
}

export default Homepage