import PortfolioVisualiser from "../assets/media/ProgrammerPortfolioVisualiser.mp4";
import { useState } from "react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  return (
    <section id="hero">
      <div className="overlay--hero">
        <div className={isLoaded ? "text loaded" : "text blackened"}>
          <h1 className="typewriter">I am Daniel Lee.</h1>
          <h2 className="fade-in">Your friendly neighborhood programmer.</h2>
        </div>
      </div>
      <video
        src={PortfolioVisualiser}
        typeof="video/mp4"
        autoPlay
        loop
        muted
        onLoadedData={handleLoadedData}
      ></video>
    </section>
  );
}
