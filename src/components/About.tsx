import DanImage from "../assets/media/DanStands_V4.jpg";

const getCurrYear = () => {
  return new Date().getFullYear();
};

const getCurrExperience = () => {
  const theYearItBegan = 2021;
  return getCurrYear() - theYearItBegan;
};

export default function About() {
  return (
    <section id="about-me">
      <div>
        <div className="img-overlay"></div>
        <div className="img-overlay vertical"></div>
        <img src={DanImage}></img>
      </div>
      <div className="bio">
        <h1>
          <span>Who</span> I am.
        </h1>
        <p>
          I am a passionate, dedicated, and zealous web designer. I specialise
          in UX/UI design and working with front-end frameworks, such as React,
          TypeScript, Scss, and many other tools.
        </p>
        <br />
        <p>
          I am no stranger to back-end projects either, as I have complete
          numerous projects involving the processing of data from controllers
          and then performing CRUD operations, for example.
        </p>
        <br />
        <p>
          As of {getCurrYear()}, I have had {getCurrExperience()} years of
          experience as a developer. Please see my portfolio below to view all
          of my work.
        </p>
      </div>
    </section>
  );
}
