interface IndividualPrincipleInterface {
  principle: {
    headingText: string;
    description: string;
  };
}

export default function PrincipleCard({
  principle,
}: IndividualPrincipleInterface) {
  return (
    <div className="principle-card">
      <h3>{principle.headingText}</h3>
      <p>{principle.description}</p>
    </div>
  );
}
