import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import LearnMore from './pages/LearnMore';
import Auth from './pages/Auth';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="services/:platform" element={<ServiceDetail />} />
        <Route path="learn-more" element={<LearnMore />} />
        <Route path="auth" element={<Auth />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="careers" element={<Careers />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="refund" element={<Refund />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;