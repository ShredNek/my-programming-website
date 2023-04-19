import PrincipleCard from "./PrincipleCard";
import { PRINCIPLES } from "../../global/GLOBALS";

export default function General_TinyScreen() {
  let genPrinciples = PRINCIPLES.generalPrinciples;
  return (
    <div className="screen tiny">
      <div className="white-overlay" />
      <div className="father">
        <div className="children tiny">
          <PrincipleCard principle={genPrinciples.dry} />
          <PrincipleCard principle={genPrinciples.yagni} />
          <PrincipleCard principle={genPrinciples.readableOverConcise} />
          <PrincipleCard principle={genPrinciples.selfCommentingCode} />
          <PrincipleCard principle={genPrinciples.noMagicNumbers} />
          <PrincipleCard principle={genPrinciples.tdd} />
        </div>
        <div className="children tiny repeated">
          <PrincipleCard principle={genPrinciples.dry} />
          <PrincipleCard principle={genPrinciples.yagni} />
          <PrincipleCard principle={genPrinciples.readableOverConcise} />
          <PrincipleCard principle={genPrinciples.selfCommentingCode} />
          <PrincipleCard principle={genPrinciples.noMagicNumbers} />
          <PrincipleCard principle={genPrinciples.tdd} />
        </div>
      </div>
    </div>
  );
}
