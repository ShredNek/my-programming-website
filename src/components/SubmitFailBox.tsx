import { AiOutlineClose } from "react-icons/ai";
interface formMessageBoxInterface {
  isOpen: boolean;
  handleManualClose: any;
}

export default function SubmitSuccessBox({
  isOpen,
  handleManualClose,
}: formMessageBoxInterface) {
  return isOpen ? (
    <div className={`submit-message failed true`}>
      <button onClick={handleManualClose}>
        <AiOutlineClose />
      </button>
      <h1>Message failure!</h1>
      <h2>Oops! Please fill out all fields to send a message</h2>
    </div>
  ) : (
    <div className={`submit-message failed false`}>
      <h1>Message failure!</h1>
      <h2>Oops! Please fill out all fields to send a message</h2>
    </div>
  );
}
