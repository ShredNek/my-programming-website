import PrincipleCard from "./PrincipleCard";
import { PRINCIPLES } from "../../global/GLOBALS";

export default function General_MediumScreen() {
  let frontEndPrinciples = PRINCIPLES.frontEndPrinciples;
  return (
    <>
      <div className="screen medium top">
        <div className="children medium">
          <div className="row-1">
            <PrincipleCard principle={frontEndPrinciples.sixSecondRule} />
            <PrincipleCard principle={frontEndPrinciples.uiAndUx} />
            <PrincipleCard principle={frontEndPrinciples.contrast} />
            <PrincipleCard principle={frontEndPrinciples.sixSecondRule} />
            <PrincipleCard principle={frontEndPrinciples.uiAndUx} />
            <PrincipleCard principle={frontEndPrinciples.contrast} />
          </div>
        </div>
      </div>
      <div className="screen medium bottom">
        <div className="children medium">
          <div className="row-2">
            <PrincipleCard principle={frontEndPrinciples.designPatterns} />
            <PrincipleCard principle={frontEndPrinciples.seo} />
            <PrincipleCard principle={frontEndPrinciples.sixtyThirtyTen} />
            <PrincipleCard principle={frontEndPrinciples.designPatterns} />
            <PrincipleCard principle={frontEndPrinciples.seo} />
            <PrincipleCard principle={frontEndPrinciples.sixtyThirtyTen} />
          </div>
        </div>
      </div>
    </>
  );
}
