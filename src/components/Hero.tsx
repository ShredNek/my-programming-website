import PortfolioVisualiser from "../assets/media/ProgrammerPortfolioVisualiser.mp4";

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="overlay--hero">
        <div className="text ">
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
      ></video>
    </section>
  );
}
