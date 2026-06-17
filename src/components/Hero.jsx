import profileImage from '../assets/profile.png';

export const Hero = () => (
  <section style={{ 
    minHeight: '80vh', 
    backgroundColor: '#000', 
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem 5%',
    gap: '30px'
  }}>
    
    {/* 1. LEFT: Designation - Reduced width and font */}
    <div style={{ flex: '1', textAlign: 'right', maxWidth: '300px' }}>
      <h2 style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', margin: 0, color: '#555' }}>B.TECH</h2>
      <h2 style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', margin: 0 }}>CSE STUDENT</h2>
    </div>

    {/* 2. CENTER: Image - Kept at 250px for better balance */}
    <div style={{ flex: '0 0 250px' }}>
      <img src={profileImage} alt="Baibhaba" style={{ width: '100%', display: 'block' }} />
    </div>

    {/* 3. RIGHT: Name & Skills - Reduced font size to prevent overflow */}
    <div style={{ flex: '1', textAlign: 'left', maxWidth: '400px' }}>
      <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', lineHeight: '1', margin: 0 }}>
        BAIBHABA<br/>CHOUDHURY
      </h1>
      
      <h3 style={{ marginTop: '20px', color: '#555', fontSize: '0.9rem' }}>SKILLS</h3>
      <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
        {['Python', 'Java', 'Web Dev'].map(skill => (
          <span key={skill} style={{ border: '1px solid #333', padding: '4px 10px', color: '#aaa', fontSize: '0.8rem' }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);