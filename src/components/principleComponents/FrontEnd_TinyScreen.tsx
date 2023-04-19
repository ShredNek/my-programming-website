import PrincipleCard from "./PrincipleCard";
import { PRINCIPLES } from "../../global/GLOBALS";

export default function General_TinyScreen() {
  let frontEndPrinciples = PRINCIPLES.frontEndPrinciples;
  return (
    <div className="screen tiny">
      <div className="white-overlay" />
      <div className="father">
        <div className="children tiny">
          <PrincipleCard principle={frontEndPrinciples.sixSecondRule} />
          <PrincipleCard principle={frontEndPrinciples.uiAndUx} />
          <PrincipleCard principle={frontEndPrinciples.contrast} />
          <PrincipleCard principle={frontEndPrinciples.designPatterns} />
          <PrincipleCard principle={frontEndPrinciples.seo} />
          <PrincipleCard principle={frontEndPrinciples.sixtyThirtyTen} />
        </div>
        <div className="children tiny repeated">
          <PrincipleCard principle={frontEndPrinciples.sixSecondRule} />
          <PrincipleCard principle={frontEndPrinciples.uiAndUx} />
          <PrincipleCard principle={frontEndPrinciples.contrast} />
          <PrincipleCard principle={frontEndPrinciples.designPatterns} />
          <PrincipleCard principle={frontEndPrinciples.seo} />
          <PrincipleCard principle={frontEndPrinciples.sixtyThirtyTen} />
        </div>
      </div>
    </div>
  );
}
