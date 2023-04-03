import { FaSmileBeam } from "react-icons/fa";
import {
  BsFillPersonFill,
  BsFillEnvelopeFill,
  BsFillChatTextFill,
} from "react-icons/bs";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SubmitSuccessBox from "./SubmitSuccessBox";
import SubmitFailBox from "./SubmitFailBox";

// ??? I don't know how this worked, but it did... wtf
interface IObjectKeys {
  [key: string]: string;
}

interface toSendInterface extends IObjectKeys {
  from_name: string;
  reply_to: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const objKeys = ["from_name", "reply_to", "subject", "message"];

  const formRefs: React.MutableRefObject<any>[] = [
    nameRef,
    emailRef,
    subjectRef,
    messageRef,
  ];

  const [successBoxIsOpen, setSuccessBoxIsOpen] = useState(false);
  const [failBoxIsOpen, setFailBoxIsOpen] = useState(false);

  function returnDataFromRefs() {
    let finalObject: toSendInterface = {
      from_name: "",
      reply_to: "",
      subject: "",
      message: "",
    };

    for (let i in formRefs) {
      formRefs[i] !== null
        ? (finalObject[objKeys[i]] = formRefs[i].current.value)
        : (finalObject[objKeys[i]] = "");
    }

    return finalObject;
  }

  const checkForFailedSub = () => {
    for (let i in formRefs) {
      if (formRefs[i].current.value.length === 0) return true;
    }
    return false;
  };

  const sendEmail = () => {
    emailjs
      .send(
        "service_fos85gd",
        "template_xvz6q3f",
        returnDataFromRefs(),
        "yzh3QmMeFSvpbkete"
      )
      .catch((err) => {
        console.error("Unexpected Error: ", err);
      });
  };

  function wipeSubmitData() {
    for (let i in formRefs) {
      formRefs[i] !== null ? (formRefs[i].current!.value = "") : null;
    }
  }

  const popUpDuration = 5000;

  function handleSuccessBoxOpen() {
    setSuccessBoxIsOpen(true);
    setTimeout(() => {
      setSuccessBoxIsOpen(false);
    }, popUpDuration);
  }

  function handleFailBoxOpen() {
    setFailBoxIsOpen(true);
    setTimeout(() => {
      setFailBoxIsOpen(false);
    }, popUpDuration);
  }

  function handleManualClose() {
    setSuccessBoxIsOpen(false);
    setFailBoxIsOpen(false);
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (checkForFailedSub()) {
      handleFailBoxOpen();
    } else {
      sendEmail();
      handleSuccessBoxOpen();
      wipeSubmitData();
    }
  };

  return (
    <>
      <SubmitSuccessBox
        isOpen={successBoxIsOpen}
        handleManualClose={handleManualClose}
      />
      <SubmitFailBox
        isOpen={failBoxIsOpen}
        handleManualClose={handleManualClose}
      />
      <section id="contact-me">
        <h1 className="heading">
          <span>Where</span> am I? Ask me.
        </h1>
        <form action="submit">
          <div className="row-item">
            <h2>Send me a message!</h2>
            <i>
              <FaSmileBeam />
            </i>
          </div>
          <div className="two-form-items">
            <label htmlFor="name">
              <i>
                <BsFillPersonFill />
              </i>
              <input
                type="text"
                placeholder="Your name"
                name="from_name"
                ref={nameRef}
              />
            </label>
            <label htmlFor="email">
              <i>
                <BsFillEnvelopeFill />
              </i>
              <input
                type="email"
                placeholder="Your email"
                name="reply_to"
                ref={emailRef}
              />
            </label>
          </div>
          <div className="form-item">
            <label htmlFor="subject">
              <i>
                <BsFillChatTextFill />
              </i>
              <input
                type="text"
                placeholder="Your subject"
                name="subject"
                ref={subjectRef}
              />
            </label>
          </div>
          <div className="form-item">
            <label htmlFor="message">
              <i>
                <HiQuestionMarkCircle />
              </i>
              <textarea
                placeholder="Your message"
                name="message"
                ref={messageRef}
              />
            </label>
          </div>
          <button formAction="submit" onClick={handleClick}>
            Send!
          </button>
        </form>
      </section>
    </>
  );
}
