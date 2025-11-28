
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import { RoadmapLanding, RoadmapDetail } from './pages/Roadmap';
import Pricing from './pages/Pricing';
import { ParentDashboard, TutorDashboard } from './pages/Dashboards';
import { AdminDashboard } from './pages/AdminDashboard'; // Import Admin
import { About, Contact, ExtraLearnings, HolidayPrograms, CourseworkSupport, Policies } from './pages/ContentPages';
import { AIAssistant } from './components/AIAssistant'; // Import AI Chatbot

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap" element={<RoadmapLanding />} />
          <Route path="/roadmap/:topicId" element={<RoadmapDetail />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/parents" element={<ParentDashboard />} />
          <Route path="/tutors" element={<TutorDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} /> {/* Admin Route */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/extra" element={<ExtraLearnings />} />
          <Route path="/holiday" element={<HolidayPrograms />} />
          <Route path="/coursework" element={<CourseworkSupport />} />
          <Route path="/policies" element={<Policies />} />
        </Routes>
        <AIAssistant /> {/* Global Chatbot */}
      </Layout>
    </HashRouter>
  );
};

export default App;
