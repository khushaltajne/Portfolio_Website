'use client'
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProfileSummary from "./components/ProfileSummary";
import Projects from "./components/Projects";
import ThreeDBackground from "./components/ThreeDBackground";
import ThreeDScrollSection from "./components/ThreeDScrollSection";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ThreeDBackground />
          <Navbar/>
          
          <Header/>
          
          <ThreeDScrollSection>
            <ProfileSummary/>
          </ThreeDScrollSection>
          
          <ThreeDScrollSection>
            <About/>
          </ThreeDScrollSection>
          
          <ThreeDScrollSection>
            <Education/>
          </ThreeDScrollSection>
          
          <ThreeDScrollSection>
            <Experience/>
          </ThreeDScrollSection>
          
          <ThreeDScrollSection>
            <Projects />
          </ThreeDScrollSection>
          
          <ThreeDScrollSection>
            <Contact/>
          </ThreeDScrollSection>
          
          <Footer/>
        </>
      )}
    </>
  );
}
