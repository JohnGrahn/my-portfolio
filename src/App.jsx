import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Blog from './pages/Blog';

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleThemeChange = (event) => {
      setTheme(event.detail);
    };
  
    window.addEventListener("themeChange", handleThemeChange);
  
    // Apply the initial theme
    document.documentElement.setAttribute("data-theme", theme);
  
    return () => {
      window.removeEventListener("themeChange", handleThemeChange);
    };
  }, [theme]);
  

  return (
    <Router>
      <div data-theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
