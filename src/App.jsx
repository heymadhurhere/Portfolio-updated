import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/next';
import Navbar from "./scenes/Navbar"
import useMediaQuery from './hooks/useMediaQuery';
import DotGroup from "./scenes/DotGroup";
import Landing from './scenes/Landing';
import LineGradeint from './components/LineGradient';
import MySkills from './scenes/MySkills';
import Education from './scenes/Education';
import Projects from './scenes/Projects';
import Coding from './scenes/coding';
import Contact from './scenes/Contact';
import Footer from './scenes/footer';

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setisTopofPage] = useState(true);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setisTopofPage(true);
      else setisTopofPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full mb-24">
        {isAboveMediumScreen && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradeint />
      <div className="w-5/6 mx-auto md:h-full md:mb-20">
        <MySkills setSelectedPage={setSelectedPage}/>
      </div>
      <div className="w-5/6 mx-auto mb-5">
        <Education setSelectedPage={setSelectedPage}/>
      </div>
      <LineGradeint />
      <div className="w-5/6 mx-auto">
        <Projects setSelectedPage={setSelectedPage}/>
      </div>
      <LineGradeint />
      <div className="w-5/6 mx-auto">
        <Coding setSelectedPage={setSelectedPage}/>
      </div>
      <LineGradeint />
      <div className="w-5/6 mx-auto">
        <Contact setSelectedPage={setSelectedPage}/>
      </div>
      <Footer />
      <Analytics />
    </div>
  )
}

export default App
