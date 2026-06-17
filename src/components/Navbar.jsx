import { Link } from 'react-router-dom';

export const Navbar = () => (
  <nav style={{ 
    padding: '2rem', 
    display: 'flex', 
    justifyContent: 'center', 
    gap: '40px', 
    backgroundColor: '#000' 
  }}>
    {['/', '/education', '/certifications', '/projects', '/contact'].map((path) => (
      <Link key={path} to={path} style={{ 
        color: '#aaa', 
        textDecoration: 'none', 
        textTransform: 'uppercase', 
        letterSpacing: '1px', 
        fontSize: '0.9rem' 
      }}>
        {path === '/' ? 'HOME' : path.replace('/', '')}
      </Link>
    ))}
  </nav>
);