import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";
import AboutMeSection from "./components/AboutMeSection";
import SkillsShowcase from "./components/SkillsShowcase";
import LoadingScreen from "./components/LoadingScreen";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ErrorBoundary>
      <BrowserRouter>
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <ErrorBoundary>
              <Navbar />
            </ErrorBoundary>
            <ErrorBoundary>
              <Hero />
            </ErrorBoundary>
          </div>

          <ErrorBoundary>
            <AboutMeSection />
          </ErrorBoundary>

          <ErrorBoundary>
            <SkillsShowcase />
          </ErrorBoundary>

          <ErrorBoundary>
            <Experience />
          </ErrorBoundary>

          <ErrorBoundary>
            <Works />
          </ErrorBoundary>

          <ErrorBoundary>
            <Feedbacks />
          </ErrorBoundary>

          <div className='relative z-0'>
            <ErrorBoundary>
              <Contact />
            </ErrorBoundary>
            <ErrorBoundary>
              <StarsCanvas />
            </ErrorBoundary>
            <ErrorBoundary>
              <Footer/>
            </ErrorBoundary>
          </div>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
