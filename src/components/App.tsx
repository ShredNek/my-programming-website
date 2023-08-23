import { useState, useRef } from "react";
import "../styles.scss";
import Hero from "./Hero";
import About from "./About";
import Nav from "./Nav";
import Slider from "./Slider";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Principals from "./Principles";
import Footer from "./Footer";
import Certificates from "./Certificates";

export default function App() {
  // ? Component States
  const [sliderPercent, setSliderPercent] = useState<string>("0%");

  // ? Refs
  const globalDomRef = useRef<HTMLDivElement>(null);
  let clientWindowOffsetProgressThroughApp = () =>
    globalDomRef.current
      ? Math.abs(globalDomRef.current!.getBoundingClientRect().y)
      : 0;

  let spaTotalHeight = () => document.body.scrollHeight;

  let resolution = () => Math.abs(window.innerHeight);

  // ? Wheel Function
  function handleWheelCapture() {
    setSliderPercent(
      progressBarPercent(
        spaTotalHeight,
        resolution,
        clientWindowOffsetProgressThroughApp
      )
    );
  }

  // ? Progress Bar Percentage
  let progressBarPercent = (
    appH: () => number,
    res: () => number,
    userWindowProgress: () => number
  ) => {
    return `${Math.round((userWindowProgress() / (appH() - res())) * 100)}%`;
  };

  return (
    <main ref={globalDomRef} onWheelCapture={handleWheelCapture}>
      <Slider percentage={sliderPercent} />
      <Hero />
      <Nav />
      <About />
      <Principals />
      <Portfolio />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
