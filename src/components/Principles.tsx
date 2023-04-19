import General_BigScreen from "./principleComponents/General_BigScreen";
import General_MediumScreen from "./principleComponents/General_MediumScreen";
import General_TinyScreen from "./principleComponents/General_TinyScreen";
import FrontEnd_BigScreen from "./principleComponents/FrontEnd_BigScreen";
import FrontEnd_MediumScreen from "./principleComponents/FrontEnd_MediumScreen";
import FrontEnd_TinyScreen from "./principleComponents/FrontEnd_TinyScreen";
import { PRINCIPLES } from "../global/GLOBALS";

export default function Principals() {
  const funcApp = PRINCIPLES.programmingApproaches.functional;
  const oopApp = PRINCIPLES.programmingApproaches.oop;

  return (
    <section id="principles">
      <h1 className="heading">
        <span>Principals</span> I follow...
      </h1>
      <div id="principle-card-children">
        <h2>General principles</h2>
        <>
          <General_BigScreen />
          <General_MediumScreen />
          <General_TinyScreen />
        </>
        <h2>Front-end principles</h2>
        <>
          <FrontEnd_BigScreen />
          <FrontEnd_MediumScreen />
          <FrontEnd_TinyScreen />
        </>
        {/* <h2>Principles of Programming Approaches</h2>
        <>
           <div className="programming-approach-container">
            <div className="programming-approach">
              <h3>{funcApp.headingText}</h3>
              <div className="button-container">
              <button>
                {funcApp.principles.separationOfConcern.headingText}
              </button>
              <button>{funcApp.principles.abstraction.headingText}</button>
              <button>{funcApp.principles.pureFunctions.headingText}</button>
              </div>
            </div>
             <div className="programming-approach">
              <h3>{oopApp.headingText}</h3>
              <button>{oopApp.principles.theBigFour.headingText}</button>
              <button>{oopApp.principles.solid.headingText}</button>
            </div> 
  </div> 
        </>*/}
      </div>
    </section>
  );
}

/***

WHAT WILL THIS MODULE CONTAIN?

%%%

<section id="principles">
<1 - GEN PRINCIPALS/>
<2 - FE PRINCIPALS/>
<3 - BE PRINCIPALS/>
</section>

// TODO

How are we displaying data? Self moving carousel to the right, 
having items re-appear after disappearing

how to handle different screen widths?

400px - vertically scrolling down, just principle title, click brings up portal

700px - horizontally scrolling, principle title & icon, click brings up portal

1100px - horizontally scrolling, principle title, desc. & icon, click brings up portal

// TODO

***/
