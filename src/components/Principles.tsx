import BigScreen from "./principleComponents/BigScreen";
import MediumScreen from "./principleComponents/MediumScreen";
import TinyScreen from "./principleComponents/TinyScreen";

export default function Principals() {
  return (
    <section id="principles">
      <h1 className="heading">
        <span>Principals</span> I follow...
      </h1>
      <div id="general-principles">
        <h2>General principles</h2>
        <>
          <BigScreen />
          <MediumScreen />
          <TinyScreen />
        </>
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
