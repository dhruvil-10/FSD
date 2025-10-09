import React, { useState } from "react";
import "./Practical7.css";
import StudentInfo from "./StudentInfo";

const Practical7 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (section) => {
    setActiveSection(section);
    setIsOpen(false); // Close sidebar after navigation
  };

  return (
    <div className="practical7-container">
      <StudentInfo />
      <div className="practical-title">
        <h1>Practical 7 - Responsive Navigation</h1>
        <p>Dynamic sidebar navigation with smooth animations</p>
      </div>
      <div className="app-container">
        <button className="menu-toggle" onClick={toggleSidebar}>
          ☰
        </button>
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <h2>🔗 Navigation</h2>
          <ul>
            <li onClick={() => navigateTo("home")} className={activeSection === "home" ? "active" : ""}>
              🏠 Home
            </li>
            <li onClick={() => navigateTo("about")} className={activeSection === "about" ? "active" : ""}>
              ℹ️ About
            </li>
            <li onClick={() => navigateTo("services")} className={activeSection === "services" ? "active" : ""}>
              ⚙️ Services
            </li>
            <li onClick={() => navigateTo("contact")} className={activeSection === "contact" ? "active" : ""}>
              📞 Contact
            </li>
          </ul>
        </div>
        <div className="main-content">
          <header>
            <h1>📄 {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h1>
          </header>
          <section>
            {activeSection === "home" && (
              <div className="content-card">
                <h2>🏡 Welcome Home!</h2>
                <p>This is your main dashboard. Here you can find quick access to all important features and recent activities.</p>
                <div className="feature-grid">
                  <div className="feature-item">📊 Analytics</div>
                  <div className="feature-item">📝 Recent Tasks</div>
                  <div className="feature-item">🔔 Notifications</div>
                  <div className="feature-item">⚡ Quick Actions</div>
                </div>
              </div>
            )}
            {activeSection === "about" && (
              <div className="content-card">
                <h2>🎯 About This Project</h2>
                <p>This is a React-based responsive navigation component created by <strong>Dhruvil Patel (23cs061)</strong>.</p>
                <p>The project demonstrates modern web development practices including:</p>
                <ul className="tech-list">
                  <li>✅ React Hooks (useState)</li>
                  <li>✅ Responsive Design</li>
                  <li>✅ CSS Animations</li>
                  <li>✅ Component-based Architecture</li>
                </ul>
              </div>
            )}
            {activeSection === "services" && (
              <div className="content-card">
                <h2>🛠️ Our Services</h2>
                <div className="services-grid">
                  <div className="service-card">
                    <h3>💻 Web Development</h3>
                    <p>Modern, responsive websites using cutting-edge technologies.</p>
                  </div>
                  <div className="service-card">
                    <h3>📱 Mobile Apps</h3>
                    <p>Cross-platform mobile applications for iOS and Android.</p>
                  </div>
                  <div className="service-card">
                    <h3>🎨 UI/UX Design</h3>
                    <p>Beautiful, user-centered design solutions.</p>
                  </div>
                </div>
              </div>
            )}
            {activeSection === "contact" && (
              <div className="content-card">
                <h2>📧 Get In Touch</h2>
                <div className="contact-info">
                  <div className="contact-item">
                    <strong>📧 Email:</strong> dhruvil.patel@charusat.edu.in
                  </div>
                  <div className="contact-item">
                    <strong>🎓 Student ID:</strong> 23cs061
                  </div>
                  <div className="contact-item">
                    <strong>🏫 Institution:</strong> CHARUSAT University
                  </div>
                  <div className="contact-item">
                    <strong>⏰ Last Updated:</strong> {new Date().toLocaleString()}
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Practical7;
