import GeneralPrincipal from "./GeneralPrinciple";
import { PRINCIPLES } from "../../global/GLOBALS";

export default function PrincipalsTinyScreen() {
  let principles = PRINCIPLES.generalPrinciples;
  return (
    <div className="screen tiny">
      <div className="white-overlay" />
      <div className="father">
        <div className="children tiny">
          <GeneralPrincipal principle={principles.dry} />
          <GeneralPrincipal principle={principles.yagni} />
          <GeneralPrincipal principle={principles.readableOverConcise} />
          <GeneralPrincipal principle={principles.selfCommentingCode} />
          <GeneralPrincipal principle={principles.noMagicNumbers} />
          <GeneralPrincipal principle={principles.tdd} />
        </div>
        <div className="children tiny repeated">
          <GeneralPrincipal principle={principles.dry} />
          <GeneralPrincipal principle={principles.yagni} />
          <GeneralPrincipal principle={principles.readableOverConcise} />
          <GeneralPrincipal principle={principles.selfCommentingCode} />
          <GeneralPrincipal principle={principles.noMagicNumbers} />
          <GeneralPrincipal principle={principles.tdd} />
        </div>
      </div>
    </div>
  );
}
