import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  // This line automatically detects if you are on GitHub or your own PC
  const basename = window.location.hostname.includes('github.io') ? "/BAIBHABA-PORTFOLIO" : "/";

  return (
    <Router basename={basename}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;