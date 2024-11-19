import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NewArrivals from './pages/NewArrivals';
import Clothing from './pages/Clothing';
import Shoes from './pages/Shoes';
import Bags from './pages/Bags';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/clothing" element={<Clothing />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/bags" element={<Bags />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;