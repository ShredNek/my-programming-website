import React, { useState } from "react";
import { PRINCIPLES } from "../global/GLOBALS";

export default function _WipButton() {
  const [isOpen, setIsOpen] = useState(false);
  const funcApp = PRINCIPLES.programmingApproaches.functional;
  const oopApp = PRINCIPLES.programmingApproaches.oop;

  function handleClick(e: any) {
    e.target;
    // isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div>
        <button onClick={handleClick}>
          {funcApp.principles.pureFunctions.headingText}
        </button>
        <p></p>
      </div>
      <div>
        <button onClick={handleClick}>
          {funcApp.principles.abstraction.headingText}
        </button>
        <p></p>
      </div>
      <div>
        <button onClick={handleClick}>
          {funcApp.principles.separationOfConcern.headingText}
        </button>
        <p></p>
      </div>
    </>
  );
}
