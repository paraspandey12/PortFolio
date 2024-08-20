import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import PageWrapper from './Components/PageWrapper';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<PageWrapper><Home/></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About/></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><Projects/></PageWrapper>} />
            <Route path="/skills" element={<PageWrapper><Skills/></PageWrapper>} />
            <Route path="/experience" element={<PageWrapper><Experience/></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact/></PageWrapper>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
