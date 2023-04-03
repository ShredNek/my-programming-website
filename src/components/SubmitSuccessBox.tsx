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
    <div className={`submit-message true`}>
      <button onClick={handleManualClose}>
        <AiOutlineClose />
      </button>
      <h1>Message Sent!</h1>
      <h2>Thank you for your enquiry</h2>
    </div>
  ) : (
    <div className={`submit-message false`}>
      <h1>Message Sent!</h1>
      <h2>Thank you for your enquiry</h2>
    </div>
  );
}
