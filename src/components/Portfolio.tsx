import PortfolioItem from "./PortfolioItem";
import StylaImg from "../assets/media/Styla.png";
import JacketImg from "../assets/media/DoINeedAJacket.png";
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
          image={StylaImg}
          projectName="Styla"
          projectDescription="This project is my demonstration of building a project from the ground up,
          creating sleek animations, hover and idle front-end effects, as well as
          demonstrating my fundamentals to layout a page in pure HTML and CSS."
          projectLink="https://styla-landing-page.web.app/"
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
          image={JacketImg}
          projectName="Do I Need A Jacket?"
          projectLink="https://do-i-need-a-jacket-2f8d2.web.app/"
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
