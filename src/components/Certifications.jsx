import { certsData } from '../Data/portfolioData';
import sqlImg from '../assets/sql.png';
import webImg from '../assets/web-design.png';
import reactImg from '../assets/react.png';
import cyberImg from '../assets/cybersecurity.png';

const images = {
  "/certs/sql.png": sqlImg,
  "/certs/web-design.png": webImg,
  "/certs/react.png": reactImg,
  "/certs/cybersecurity.png": cyberImg
};

export const Certifications = () => (
  <section style={{ padding: '2rem' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>My Certifications</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
      {certsData.map((cert, index) => (
        <a key={index} href={cert.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
          <div style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '15px', textAlign: 'center', transition: '0.3s' }}>
            <img src={images[cert.image]} alt={cert.title} style={{ width: '100%', height: '150px', objectFit: 'contain', marginBottom: '10px' }} />
            <h3>{cert.title}</h3>
            <p>{cert.issuer} ({cert.year})</p>
          </div>
        </a>
      ))}
    </div>
  </section>
);