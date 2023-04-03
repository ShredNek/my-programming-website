import { AiFillHome, AiFillFolder } from "react-icons/ai";
import { BsFillPersonFill, BsFillEnvelopeAtFill } from "react-icons/bs";

export default function Nav() {
  console.log();
  return (
    <nav id="nav">
      <ul className="large-medium-screen">
        <a href="#hero">
          <li>Home</li>
        </a>
        <a href="#about-me">
          <li>About</li>
        </a>
        <a href="#portfolio">
          <li>Portfolio</li>
        </a>
        <a href="#contact-me">
          <li>Contact me</li>
        </a>
      </ul>
      <ul className="small-screen">
        <a href="#hero">
          <li>
            <div className="svg-background" />
            <AiFillHome />
          </li>
        </a>
        <a href="#about-me">
          <li>
            <div className="svg-background" />
            <BsFillPersonFill />
          </li>
        </a>
        <a href="#portfolio">
          <li>
            <div className="svg-background" />
            <AiFillFolder />
          </li>
        </a>
        <a href="#contact-me">
          <li>
            <div className="svg-background" />
            <BsFillEnvelopeAtFill />
          </li>
        </a>
      </ul>
    </nav>
  );
}
