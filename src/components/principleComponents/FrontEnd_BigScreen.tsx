import PrincipleCard from "./PrincipleCard";
import { PRINCIPLES } from "../../global/GLOBALS";

export default function General_BigScreen() {
  let frontEndPrinciples = PRINCIPLES.frontEndPrinciples;

  return (
    <div className="screen big scroll-to-left">
      <div className="children big">
        <PrincipleCard principle={frontEndPrinciples.sixSecondRule} />
        <PrincipleCard principle={frontEndPrinciples.uiAndUx} />
        <PrincipleCard principle={frontEndPrinciples.contrast} />
        <PrincipleCard principle={frontEndPrinciples.designPatterns} />
        <PrincipleCard principle={frontEndPrinciples.seo} />
        <PrincipleCard principle={frontEndPrinciples.sixtyThirtyTen} />
      </div>
      <div className="children big repeated">
        <PrincipleCard principle={frontEndPrinciples.sixSecondRule} />
        <PrincipleCard principle={frontEndPrinciples.uiAndUx} />
        <PrincipleCard principle={frontEndPrinciples.contrast} />
        <PrincipleCard principle={frontEndPrinciples.designPatterns} />
        <PrincipleCard principle={frontEndPrinciples.seo} />
        <PrincipleCard principle={frontEndPrinciples.sixtyThirtyTen} />
      </div>
    </div>
  );
}
