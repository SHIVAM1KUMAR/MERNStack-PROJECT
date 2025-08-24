import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';  // Correct default import
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import ProjectRequest from './components/ProjectRequest';
import AdminDashboard from './pages/AdminDashboard';
import DeveloperDashboard from './pages/DeveloperDashboard';
import TestimonialPage from './pages/TestimonialPage'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/project-request" element={<ProjectRequest />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/developer-dashboard" element={<DeveloperDashboard />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
