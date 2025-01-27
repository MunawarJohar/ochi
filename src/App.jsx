import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marqee from './components/Marqee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isTransitioned, setIsTransitioned] = useState(false);

  useEffect(() => {
    // Simulate the loading process (e.g., API calls)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  useEffect(() => {
    if (loading) {
      // Animate progress from 0 to 100%
      const progressTimer = setInterval(() => {
        setProgress((prev) => {
          if (prev < 100) {
            return prev + 5; // Increase progress by 5% every 140ms
          } else {
            clearInterval(progressTimer);
            return 100;
          }
        });
      }, 140); // Update progress every 140ms

      // Initial animation to show the loading screen's size (80%)
      gsap.to('.loading-screen', {
        width: '80%',
        height: '80%',
        duration: 2,
      });

      // After 1.8 seconds, expand the loading screen to full width and height (100%)
      setTimeout(() => {
        // Remove margin and change background/text color
        gsap.to('.loading-screen', {
          width: '100%', // Transition to full width
          height: '100%', // Transition to full height
          margin: 0, // Remove margin
          duration: 0.2, // Last 0.2s for expanding to full size
          onStart: () => {
            // Change background and text color at the same time
            setIsTransitioned(true);
          }
        });
      }, 1800); // Trigger expansion after 1.8 seconds

    } else {
      // Fade out the loading screen after it completes
      gsap.to('.loading-screen', {
        opacity: 0,
        duration: 1,
        onComplete: () => {
          document.querySelector('.loading-screen').style.display = 'none';
        },
      });
    }
  }, [loading]);

  return (
    <div className="w-full min-h-screen text-white bg-zinc-900">
      {loading ? (
        // Show the loading animation while loading
        <div className={`loading-screen w-4/5 h-4/5 mt-[70px] ml-[120px] absolute top-0 left-0 z-50  ${isTransitioned ? 'bg-white text-black' : 'bg-white text-black'}`}>
          <div className="flex flex-col h-full justify-between items-center">
            {/* Text section */}
            <div className="textstructure mt-42 px-8">
              {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
                <div className="masker" key={index}>
                  <div className="w-fit flex items-center">
                    <h1 className="uppercase text-8xl -leading-[6vw] tracking-tighter font-['Founders_Grotesk'] font-medium">
                      {item}
                    </h1>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom loading section */}
            <div className="bottom w-full px-[4px] flex items-center justify-between text-center">
              <div>
                <h1 className="font-semibold">Loading...</h1>
              </div>
              <div>
                <h1 className="uppercase text-5xl -leading-[6vw] tracking-tighter font-['Founders_Grotesk'] font-medium">{progress}%</h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Main content will be shown after the loading screen is hidden
        <>
          <Navbar />
          <LandingPage />
          <Marqee />
          <About />
          <Eyes />
          <Featured />
          <Cards />
          <Footer />
        </>
      )}

      {/* Inline styles for loader and spinner */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .loader {
          width: 60px;
          height: 60px;
          border: 5px solid #fff;
          border-top: 5px solid transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .loading-screen {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80%;  /* Initially set to 80% width */
          height: 80%;  /* Initially set to 80% height */
          border-radius: 10px;
          text-align: center;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 50;
          transition: all 0.2s ease-in-out; /* Smooth transition for final change */
        }

        .loading-screen p {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
        }
      `}</style>
    </div>
  );
}

export default App;
