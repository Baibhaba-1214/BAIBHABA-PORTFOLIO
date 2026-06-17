import { educationData } from '../Data/portfolioData';

export const Education = () => (
  <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: 'auto' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Education</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {educationData.map((edu, index) => (
        <div key={index} style={{ borderLeft: '2px solid #000', paddingLeft: '20px', paddingBottom: '20px' }}>
          <h3 style={{ margin: '0', fontSize: '1.1rem' }}>{edu.degree}</h3>
          <p style={{ margin: '5px 0', color: '#666', fontSize: '0.95rem' }}>{edu.school} | {edu.year}</p>
        </div>
      ))}
    </div>
  </section>
);