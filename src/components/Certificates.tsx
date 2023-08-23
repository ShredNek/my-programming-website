import FrontEndCert from '../assets/media/FrontEndDevelopmentCertificate.png'
import JavaScriptCert from '../assets/media/JavaScriptAlgorithmsCertificate.png'

interface CertificateI {
  imgLink: string;
  title: string;
}

function Certificate({ imgLink, title }: CertificateI) {
  return (
    <div className="certificate">
      <h2>{title}</h2>
      <div className="img-container">
        <img src={imgLink} alt={title} />
      </div>
    </div>
  )
}

export default function Certificates() {
  return (
    <section id="certificates">
      <h1 className="heading">
        <span>Certificates</span> I've earned...
      </h1>
      <div className='certificate-containers'>
        <Certificate imgLink={FrontEndCert} title={"Front End Certificate"} />
        <Certificate imgLink={JavaScriptCert} title={"JavaScript Algorithms Certificate"} />
      </div>
    </section>
  )
}
