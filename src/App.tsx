import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import About from "./components/About"
import Programs from "./components/Programs"
import Gallery from "./components/Gallery"
import Videos from "./components/Videos"
import Help from "./components/Help"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const News = lazy(() => import("./components/News"))

function MainPage() {
  return (
    <>
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

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/noticias" element={
          <Suspense fallback={
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
              <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
            </div>
          }>
            <News />
          </Suspense>
        } />
      </Routes>
    </>
  )
}
