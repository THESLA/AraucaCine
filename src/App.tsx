import { useEffect, useState } from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Programs from "./components/Programs"
import Gallery from "./components/Gallery"
import Videos from "./components/Videos"
import Help from "./components/Help"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(t)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Videos />
      <Help />
      <Contact />
      <Footer />
    </>
  )
}
