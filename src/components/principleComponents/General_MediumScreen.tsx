import PrincipleCard from "./PrincipleCard";
import { PRINCIPLES } from "../../global/GLOBALS";

export default function General_MediumScreen() {
  let genPrinciples = PRINCIPLES.generalPrinciples;
  return (
    <>
      <div className="screen medium top">
        <div className="children medium">
          <div className="row-1">
            <PrincipleCard principle={genPrinciples.dry} />
            <PrincipleCard principle={genPrinciples.yagni} />
            <PrincipleCard principle={genPrinciples.readableOverConcise} />
            <PrincipleCard principle={genPrinciples.dry} />
            <PrincipleCard principle={genPrinciples.yagni} />
            <PrincipleCard principle={genPrinciples.readableOverConcise} />
          </div>
        </div>
      </div>
      <div className="screen medium bottom">
        <div className="children medium">
          <div className="row-2">
            <PrincipleCard principle={genPrinciples.selfCommentingCode} />
            <PrincipleCard principle={genPrinciples.noMagicNumbers} />
            <PrincipleCard principle={genPrinciples.tdd} />
            <PrincipleCard principle={genPrinciples.selfCommentingCode} />
            <PrincipleCard principle={genPrinciples.noMagicNumbers} />
            <PrincipleCard principle={genPrinciples.tdd} />
          </div>
        </div>
      </div>
    </>
  );
}
