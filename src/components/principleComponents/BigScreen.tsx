import GeneralPrincipal from "./GeneralPrinciple";
import { PRINCIPLES } from "../../global/GLOBALS";

export default function PrincipalsBigScreen() {
  let principles = PRINCIPLES.generalPrinciples;

  return (
    <div className="screen big">
      <div className="children big">
        <GeneralPrincipal principle={principles.dry} />
        <GeneralPrincipal principle={principles.yagni} />
        <GeneralPrincipal principle={principles.readableOverConcise} />
        <GeneralPrincipal principle={principles.selfCommentingCode} />
        <GeneralPrincipal principle={principles.noMagicNumbers} />
        <GeneralPrincipal principle={principles.tdd} />
      </div>
      <div className="children big repeated">
        <GeneralPrincipal principle={principles.dry} />
        <GeneralPrincipal principle={principles.yagni} />
        <GeneralPrincipal principle={principles.readableOverConcise} />
        <GeneralPrincipal principle={principles.selfCommentingCode} />
        <GeneralPrincipal principle={principles.noMagicNumbers} />
        <GeneralPrincipal principle={principles.tdd} />
      </div>
    </div>
  );
}
