
import HeroSection from "../components/HeroSection"
import PriceSection from "../components/PriceSection"
import Team from "../components/Team"
import Testimonials from "../components/Testimonials"
import Banner from "../components/Banner"
import BentoGrids from "../components/BentoGrids"
import Blog from "../components/Blog"
import Contact from "../components/Contact"


export default function Home() {
    return (
        <div className="bg-gray-900">

            <HeroSection />
            <BentoGrids />
            <Testimonials />
            <PriceSection />
            <Blog />
            <Team />
            <Contact />
            <Banner />
        </div>
    )
}
