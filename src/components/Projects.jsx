import { projectsData } from '../Data/portfolioData';

export const Projects = () => (
  <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: 'auto' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>My Projects</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
      {projectsData.map((project, index) => (
        <div key={index} style={{ border: '1px solid #e5e5e5', padding: '24px', backgroundColor: '#ffffff' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{project.title}</h3>
          <p style={{ color: '#666666', fontSize: '0.95rem', marginBottom: '15px' }}>{project.desc}</p>
          <a href={project.link} target="_blank" rel="noreferrer" style={{ color: '#000', textDecoration: 'underline', fontWeight: 'bold' }}>
            View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);