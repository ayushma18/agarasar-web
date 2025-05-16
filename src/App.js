import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Registration from './components/Registration';
import './App.css';

const News = () => {
  return (
    <div className="news-page">
      <h1>News & Activities</h1>
      <p>Stay updated with our latest news and activities.</p>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="gallery-page">
      <h1>Gallery</h1>
      <p>View our collection of photos from various events and activities.</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
