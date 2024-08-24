import About from "./Components/About"
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import { HeroHighlight } from "./Components/ui/hero-highlight"

function App() {

  return (
    <>
      <NavBar />
      <HeroHighlight containerClassName="h-[91vh] bg-fixed items-center" className="w-[100vw] h-full">
        <Home />
        <About />
      </HeroHighlight>
    </>
  )
}

export default App
