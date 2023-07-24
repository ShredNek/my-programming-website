import { ReactNode } from "react";

interface FollowMeCard {
  followMeTitle: string;
  followLink: string;
  buttonChild: ReactNode;
}

export default function FollowMeCard({
  followMeTitle,
  followLink,
  buttonChild,
}: FollowMeCard) {
  return (
    <a className="follow-me-child" href={followLink}>
      <p>{followMeTitle}</p>
      {buttonChild}
    </a>
  );
}
