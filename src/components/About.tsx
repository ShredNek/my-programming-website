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
          I am a passionate, dedicated, and zealous web designer. I am a TypeScript
          specialist, mainly working with front-end frameworks (React and Vue),
          formulating algorithms within Node.js, and leveraging styling languages
          such as Scss, Bootstrap and Headless UI, with a little bit of SapUI5 experience too.
        </p>
        <br />
        <p>
          I have a deep understanding of the foundations of web development, and I am now
          getting intimate with more advanced techniques within TypeScript and beyond.
        </p>
        <br />
        <p>
          As of {getCurrYear()}, I have over {getCurrExperience()} years of
          experience as a developer. Please see my portfolio below to view all
          of my work.
        </p>
      </div>
    </section>
  );
}
