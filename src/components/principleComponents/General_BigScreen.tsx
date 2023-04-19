import PrincipleCard from "./PrincipleCard";
import { PRINCIPLES } from "../../global/GLOBALS";

export default function General_BigScreen() {
  let genPrinciples = PRINCIPLES.generalPrinciples;

  return (
    <div className="screen big">
      <div className="children big">
        <PrincipleCard principle={genPrinciples.dry} />
        <PrincipleCard principle={genPrinciples.yagni} />
        <PrincipleCard principle={genPrinciples.readableOverConcise} />
        <PrincipleCard principle={genPrinciples.selfCommentingCode} />
        <PrincipleCard principle={genPrinciples.noMagicNumbers} />
        <PrincipleCard principle={genPrinciples.tdd} />
      </div>
      <div className="children big repeated">
        <PrincipleCard principle={genPrinciples.dry} />
        <PrincipleCard principle={genPrinciples.yagni} />
        <PrincipleCard principle={genPrinciples.readableOverConcise} />
        <PrincipleCard principle={genPrinciples.selfCommentingCode} />
        <PrincipleCard principle={genPrinciples.noMagicNumbers} />
        <PrincipleCard principle={genPrinciples.tdd} />
      </div>
    </div>
  );
}
