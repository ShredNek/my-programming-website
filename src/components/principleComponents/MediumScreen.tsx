import GeneralPrincipal from "./GeneralPrinciple";
import { PRINCIPLES } from "../../global/GLOBALS";

export default function PrincipalsMediumScreen() {
  let principles = PRINCIPLES.generalPrinciples;
  return (
    <>
      <div className="screen medium top">
        <div className="children medium">
          <div className="row-1">
            <GeneralPrincipal principle={principles.dry} />
            <GeneralPrincipal principle={principles.yagni} />
            <GeneralPrincipal principle={principles.readableOverConcise} />
            <GeneralPrincipal principle={principles.dry} />
            <GeneralPrincipal principle={principles.yagni} />
            <GeneralPrincipal principle={principles.readableOverConcise} />
          </div>
        </div>
      </div>
      <div className="screen medium bottom">
        <div className="children medium">
          <div className="row-2">
            <GeneralPrincipal principle={principles.selfCommentingCode} />
            <GeneralPrincipal principle={principles.noMagicNumbers} />
            <GeneralPrincipal principle={principles.tdd} />
            <GeneralPrincipal principle={principles.selfCommentingCode} />
            <GeneralPrincipal principle={principles.noMagicNumbers} />
            <GeneralPrincipal principle={principles.tdd} />
          </div>
        </div>
      </div>
    </>
  );
}
