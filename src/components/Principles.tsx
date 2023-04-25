import { useState } from "react";
import General_BigScreen from "./principleComponents/General_BigScreen";
import General_MediumScreen from "./principleComponents/General_MediumScreen";
import General_TinyScreen from "./principleComponents/General_TinyScreen";
import FrontEnd_BigScreen from "./principleComponents/FrontEnd_BigScreen";
import FrontEnd_MediumScreen from "./principleComponents/FrontEnd_MediumScreen";
import FrontEnd_TinyScreen from "./principleComponents/FrontEnd_TinyScreen";
import {
  PRINCIPLES,
  ProgrammingApproachesInterface,
  FunctionalProgrammingPrinciplesInterface,
  OopProgrammingPrinciplesInterface,
} from "../global/GLOBALS";

import { TbLambda, TbBraces } from "react-icons/tb";

export default function Principals() {
  const [dropdownState, setDropdownState] = useState({
    text: "",
    programmingApproach: "",
  });
  const functionalProgrammingObjValue =
    PRINCIPLES.programmingApproaches.functional;
  const oopProgrammingObjValue = PRINCIPLES.programmingApproaches.oop;
  const approaches = PRINCIPLES.programmingApproaches;
  const functionalProgrammingObjKey = Object.keys(approaches)[0];
  const oopProgrammingObjKey = Object.keys(approaches)[1];

  function removeAllClassesFromButtons() {
    const cnt = document.getElementsByClassName("button-container");

    for (let i = 0; i < cnt.length; i++) {
      for (let j = 0; j < cnt[i].children.length; j++) {
        cnt[i].children[j].classList.remove("open");
      }
    }
  }

  function isTheSameButtonClickedAgain(child: HTMLButtonElement) {
    // ? We check if the button has already a class of '.open'
    // ? If it has, this is a double click. If not, we ignore
    return child.classList[0] ? true : false;
  }

  function handleClickedProgrammingPrinciple(
    progApr: string | null,
    progPrn: string
  ) {
    // ? Checks if the first programming approach (functional) is being used
    functionalProgrammingObjKey ===
    (progApr as keyof ProgrammingApproachesInterface)
      ? // ? if so, dropdownText is set to whatever principle within functional
        // ? is being used
        setDropdownState({
          text: approaches.functional.principles[
            progPrn as keyof FunctionalProgrammingPrinciplesInterface
          ].description,
          programmingApproach: functionalProgrammingObjKey,
        })
      : // ? if not, dropdownText is set to whatever principle within oop
        // ? approach is being used
        setDropdownState({
          text: approaches.oop.principles[
            progPrn as keyof OopProgrammingPrinciplesInterface
          ].description,
          programmingApproach: oopProgrammingObjKey,
        });
  }

  function handleClick(e: React.MouseEvent) {
    const thisButton = e.target as HTMLButtonElement;
    const programmingPrinciple = thisButton.id;
    const programmingApproach = thisButton.getAttribute("name");

    if (isTheSameButtonClickedAgain(thisButton)) {
      removeAllClassesFromButtons();
      setDropdownState({ text: "", programmingApproach: "" });
    } else {
      removeAllClassesFromButtons();
      thisButton.classList.add("open");
      handleClickedProgrammingPrinciple(
        programmingApproach,
        programmingPrinciple
      );
    }
  }

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
        <h2>Principles of Programming Approaches</h2>
        <>
          <div className="programming-approach-container">
            <div
              className={`programming-approach ${
                dropdownState.programmingApproach ===
                functionalProgrammingObjKey
                  ? "open"
                  : null
              }`}
            >
              <div className="icon-heading-buttons">
                <div className="icon-and-heading">
                  <h3>{functionalProgrammingObjValue.headingText}</h3>
                  <TbLambda className="icon" />
                </div>
                <fieldset className="button-container" name="functional">
                  <button
                    onClick={handleClick}
                    name="functional"
                    id="separationOfConcern"
                  >
                    {
                      functionalProgrammingObjValue.principles
                        .separationOfConcern.headingText
                    }
                  </button>
                  <button
                    onClick={handleClick}
                    name="functional"
                    id="abstraction"
                  >
                    {
                      functionalProgrammingObjValue.principles.abstraction
                        .headingText
                    }
                  </button>
                  <button
                    onClick={handleClick}
                    name="functional"
                    id="pureFunctions"
                  >
                    {
                      functionalProgrammingObjValue.principles.pureFunctions
                        .headingText
                    }
                  </button>
                </fieldset>
              </div>
              <div className="answer-section">
                {dropdownState.programmingApproach ===
                functionalProgrammingObjKey
                  ? dropdownState.text
                  : null}
              </div>
            </div>
            <div
              className={`programming-approach ${
                dropdownState.programmingApproach === oopProgrammingObjKey
                  ? "open"
                  : null
              }`}
            >
              <div className="icon-heading-buttons">
                <div className="icon-and-heading">
                  <TbBraces className="icon" />
                  <h3>{oopProgrammingObjValue.headingText}</h3>
                </div>
                <fieldset className="button-container" name="oop">
                  <button onClick={handleClick} name="oop" id="solid">
                    {oopProgrammingObjValue.principles.solid.headingText}
                  </button>
                  <button onClick={handleClick} name="oop" id="theBigFour">
                    {oopProgrammingObjValue.principles.theBigFour.headingText}
                  </button>
                </fieldset>
              </div>
              <div className="answer-section">
                {dropdownState.programmingApproach === oopProgrammingObjKey
                  ? dropdownState.text
                  : null}
              </div>
            </div>
          </div>
        </>
      </div>
    </section>
  );
}

/* 

logic behind different button focuses

click on a button, have it be highlighted and display relevant dropdown item

!!! how to do that? 

* each button has id attached to it, which is the 
* object property needed to access anything

* take id, access PRINICIPLE object with id, save that to state

* display state

!!! struggling with access


*/

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
