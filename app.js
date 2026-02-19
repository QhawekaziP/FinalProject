import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <nav className="nav-container">
          <div className="nav-links">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </div>
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </nav>
      </header>

      {/* Landing Section */}
      <section id="home" className="section landing">
        <div className="landing-content">
          <div className="avatar-container">
            <img 
              src="https://via.placeholder.com/200" 
              alt="Avatar" 
              className="avatar"
            />
          </div>
          <div className="bio">
            <h1>Hi, I'm Alex Chen</h1>
            <p className="title">Full Stack Developer & UI/UX Enthusiast</p>
            <p className="description">
              I craft beautiful and functional web experiences with 5+ years of experience 
              in React, Node.js, and modern web technologies. Passionate about creating 
              intuitive user interfaces that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo</a>
                  <a href="#" className="project-link">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project..."
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Alex Chen. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Project data
const projects = [
  {
    title: "EcoTrack Dashboard",
    description: "A sustainability tracking app that helps users monitor their carbon footprint and discover eco-friendly alternatives.",
    image: "https://via.placeholder.com/300x200",
    tags: ["React", "Node.js", "MongoDB", "Chart.js"]
  },
  {
    title: "AI Task Manager",
    description: "Smart task management application with AI-powered prioritization and scheduling features.",
    image: "https://via.placeholder.com/300x200",
    tags: ["React", "Python", "TensorFlow", "Express"]
  },
  {
    title: "TravelBuddy",
    description: "Social platform for travelers to share experiences, find travel buddies, and discover hidden gems.",
    image: "https://via.placeholder.com/300x200",
    tags: ["React Native", "Firebase", "Google Maps API"]
  },
  {
    title: "HealthTrack Pro",
    description: "Comprehensive health and wellness tracking app with personalized workout and meal plans.",
    image: "https://via.placeholder.com/300x200",
    tags: ["React", "D3.js", "Express", "PostgreSQL"]
  }
];

export default App;
