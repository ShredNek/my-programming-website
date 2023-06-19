interface PortfolioItemInterface {
  image: string;
  className: string;
  projectName: string;
  projectDescription?: string;
  projectLink?: string;
}

export default function PortfolioItem({
  image,
  projectName,
  className,
  projectDescription,
  projectLink,
}: PortfolioItemInterface) {
  function handleClick() {
    projectLink ? window.open(projectLink, "_blank") : null;
  }

  return (
    <div className={className} onClick={handleClick}>
      <div className="overlay rounded">
        <h1>{projectName}</h1>
        <p>{projectDescription}</p>
      </div>
      <img src={image} alt={`an image of ${projectName}`}></img>
    </div>
  );
}
