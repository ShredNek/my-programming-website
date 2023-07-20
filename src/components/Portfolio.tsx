import PortfolioItem from "./PortfolioItem";
import StylaImg from "../assets/media/Styla.png";
import VoizerImg from "../assets/media/Voizer.png";
import KyberImg from "../assets/media/KyberCorp.png";
import MetronomeImg from "../assets/media/Metronome.png";
import PigLatinImg from "../assets/media/PigLatin.png";
import TetrisImg from "../assets/media/Tetris.png";
import RocImg from "../assets/media/COMING_SOON.png";
import RocMerchImg from "../assets/media/RocMerch.png";

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h1 className="heading">
        <span>What</span> I've done.
      </h1>
      <div className="grid-container rounded">
        <PortfolioItem
          className="showcase"
          image={RocMerchImg}
          projectName="Ripples Of Change™ - Merchandise"
          projectDescription="I created a feature-rich web application by 
          harnessing the power of Vue.js, Spring Boot, and MySQL. By utilizing 
          Typescript and Vue state management with Pinia, implementing a custom 
          RESTful API in Spring Boot, and integrating email functionality, I 
          successfully enhanced the user experience while optimizing business 
          operations.
          "
          projectLink="https://roc-merch-fullstack.web.app/"
        />
        <PortfolioItem
          className="sub-showcase-1"
          image={VoizerImg}
          projectName="Voizer"
          projectDescription="This project is my demonstration of using Bootstrap React Components as a tool to quickly and efficiently create an app. Put together within the span of a few weeks, I was able to put together a website that generates multiple invoices, via form input or JSON."
          projectLink="https://voizer-ea083.web.app/"
        />
        <PortfolioItem
          className="sub-showcase-2"
          image={RocImg}
          projectName="Daniel Lee™ Music"
          projectLink="https://daniel-lee-music-roc.web.app"
          projectDescription="Using ReactTS and TypeScript, I have put together a website to showcase my UX/UI skills - and my music - in a sleek, stylish and responsive way."
        />
        <div className="subtitle">
          <h2>Click on a project!</h2>
        </div>
        <PortfolioItem
          className="mini-1"
          image={StylaImg}
          projectName="Styla"
          projectLink="https://styla-landing-page.web.app/"
        />
        <PortfolioItem
          className="mini-2"
          image={MetronomeImg}
          projectLink="https://metronome-chi.vercel.app/"
          projectName="Metronome"
        />
        <PortfolioItem
          className="mini-3"
          image={KyberImg}
          projectLink="https://kyper-corp.firebaseapp.com/"
          projectName="Kyber Corp"
        />
        <PortfolioItem
          className="mini-4"
          image={PigLatinImg}
          projectLink="https://the-way-of-pig-latin.web.app/"
          projectName="The Way Of Pig Latin"
        />
        <PortfolioItem
          className="mini-5"
          image={TetrisImg}
          projectLink="https://typescript-tetris.web.app/"
          projectName="TypeScript Tetris"
        />
      </div>
    </section>
  );
}
