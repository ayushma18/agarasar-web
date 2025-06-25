import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Registration from './components/Registration';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';

const News = () => {
  return (
    <div className="container-custom py-8">
      <h1 className="text-4xl font-bold text-primary mb-4">News & Activities</h1>
      <p className="text-lg text-gray-600">Stay updated with our latest news and activities.</p>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="container-custom py-8">
      <h1 className="text-4xl font-bold text-primary mb-4">Gallery</h1>
      <p className="text-lg text-gray-600">View our collection of photos from various events and activities.</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="*" element={
            <>
              <Header />
              <main className="flex-grow">
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
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
