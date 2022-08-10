
import CarsSection from "./CarsSection"
import './MainSection.css'
import Titulo from "./Titulo"


const MainSection = () => {
  return (
    <>
      <div className="Container">
        <Titulo />
        <CarsSection />
      </div>
    </>
  )
}

export default MainSection
