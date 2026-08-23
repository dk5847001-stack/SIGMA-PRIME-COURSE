import Container from "./Container"
import Price from "./Price"
import Example from "./Dashboard"
import PageNotFound from "./PageNotFound"
import Hero from "./Hero"
import Hero2 from "./Hero2"
import Product from "./Product"
import Navbar from "./Navbar"
import Work from "./Work"
import Footer from "./Footer"
function App() {

  return (
    <div className="bg-slate-900">
      <Navbar />
      <Example />
      <Work />
      <Hero />
      <hr /><Hero2/>
      {/* <Product /> */}
      <hr /><Price />
      <hr /><PageNotFound />
            <Container /><br />
      <hr className="text-white" /><Footer />
    </div>
  )
}

export default App
