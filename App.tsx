
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import MainLanding from './pages/MainLanding';
import TuitionHome from './pages/TuitionHome';
import EnrichmentHome from './pages/EnrichmentHome';
import { RoadmapLanding, RoadmapDetail } from './pages/Roadmap';
import Pricing from './pages/Pricing';
import { ParentDashboard, TutorDashboard } from './pages/Dashboards';
import NewParentDashboard from './pages/NewParentDashboard';
import NewTutorDashboard from './pages/NewTutorDashboard';
import { ParentSignup } from './pages/ParentSignup';
import { ParentLogin } from './pages/ParentLogin';
import { TutorSignup } from './pages/TutorSignup';
import { TutorLogin } from './pages/TutorLogin';
import { AdminDashboard } from './pages/AdminDashboard';
import { AdminMatching } from './pages/AdminMatching';
import { AdminInvoices } from './pages/AdminInvoices';
import { AdminVerification } from './pages/AdminVerification';
import SchoolTeacherDashboard from './pages/SchoolTeacherDashboard'; 
import { About, Contact, ExtraLearnings, HolidayPrograms, CourseworkSupport, Policies, TutorLanding, TutorRequest, SpecializedRequest } from './pages/ContentPages';
import { Calendar } from './pages/Calendar';
import { ProtectedRoute } from './components/ProtectedRoute';

// Protected Route for Coursework (Sec 4 only)
const Sec4OnlyRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Note: This is a demo. In production, check actual user session/state
  // For now, show the content but with a note that it's for Sec 4 parents
  return <>{children}</>;
};

// Simple Admin Protection Wrapper
const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    // HashRouter is required for the preview environment to work correctly.
    // When deploying to production (e.g. Vercel) with a custom domain, you can switch this to BrowserRouter.
    <HashRouter>
      <Layout>
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<MainLanding />} />
          
          {/* Authentication Routes */}
          <Route path="/signup/parent" element={<ParentSignup />} />
          <Route path="/login/parent" element={<ParentLogin />} />
          <Route path="/signup/tutor" element={<TutorSignup />} />
          <Route path="/login/tutor" element={<TutorLogin />} />
          
          {/* Tuition Service Routes */}
          <Route path="/tuition" element={<TuitionHome />} />
          <Route path="/tuition/roadmap" element={<RoadmapLanding />} />
          <Route path="/tuition/roadmap/:topicId" element={<RoadmapDetail />} />
          <Route path="/tuition/pricing" element={<Pricing />} />
          <Route path="/tuition/parents" element={<ProtectedRoute requiredRole="parent" redirectTo="/login/parent"><NewParentDashboard /></ProtectedRoute>} />
          <Route path="/tuition/tutors" element={<ProtectedRoute requiredRole="tutor" redirectTo="/login/tutor"><NewTutorDashboard /></ProtectedRoute>} />
          {/* Keep old dashboard routes for backward compatibility */}
          <Route path="/parents" element={<ProtectedRoute requiredRole="parent" redirectTo="/login/parent"><NewParentDashboard /></ProtectedRoute>} />
          <Route path="/tutors" element={<ProtectedRoute requiredRole="tutor" redirectTo="/login/tutor"><NewTutorDashboard /></ProtectedRoute>} />
          <Route path="/tuition/teach" element={<TutorLanding />} />
          <Route path="/tuition/about" element={<About />} />
          <Route path="/tuition/contact" element={<Contact />} />
          <Route path="/tuition/request" element={<TutorRequest />} />
          <Route path="/tuition/specialized-request" element={<SpecializedRequest />} />
          <Route path="/tuition/extra" element={<ExtraLearnings />} />
          <Route path="/tuition/holiday" element={<HolidayPrograms />} />
          <Route path="/tuition/calendar" element={<Calendar />} />
          <Route path="/tuition/coursework" element={
            <Sec4OnlyRoute>
              <CourseworkSupport />
            </Sec4OnlyRoute>
          } />
          <Route path="/tuition/policies" element={<Policies />} />
          
          {/* School Enrichment Routes */}
          <Route path="/schools" element={<EnrichmentHome />} />
          <Route path="/schools/login" element={<div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="text-center"><h1 className="text-3xl font-bold text-gray-900 mb-4">Student Login</h1><p className="text-gray-600">Coming soon - Integration with game platform</p></div></div>} />
          <Route path="/schools/teacher-dashboard" element={<SchoolTeacherDashboard />} />
          <Route path="/enrichment" element={<Navigate to="/schools" replace />} />
          <Route path="/enrichment/login" element={<Navigate to="/schools/login" replace />} />
          
          {/* Legacy routes - redirect to tuition for backward compatibility */}
          <Route path="/roadmap" element={<Navigate to="/tuition/roadmap" replace />} />
          <Route path="/roadmap/:topicId" element={<Navigate to="/tuition/roadmap/:topicId" replace />} />
          <Route path="/pricing" element={<Navigate to="/tuition/pricing" replace />} />
          <Route path="/teach" element={<Navigate to="/tuition/teach" replace />} />
          <Route path="/about" element={<Navigate to="/tuition/about" replace />} />
          <Route path="/contact" element={<Navigate to="/tuition/contact" replace />} />
          <Route path="/request" element={<Navigate to="/tuition/request" replace />} />
          <Route path="/specialized-request" element={<Navigate to="/tuition/specialized-request" replace />} />
          <Route path="/extra" element={<Navigate to="/tuition/extra" replace />} />
          <Route path="/holiday" element={<Navigate to="/tuition/holiday" replace />} />
          <Route path="/calendar" element={<Navigate to="/tuition/calendar" replace />} />
          <Route path="/coursework" element={<Navigate to="/tuition/coursework" replace />} />
          <Route path="/policies" element={<Navigate to="/tuition/policies" replace />} />
          
          {/* Admin Routes - Hidden from UI, but accessible via URL */}
          <Route path="/admin" element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          } />
          <Route path="/admin/matching" element={
            <AdminRoute>
              <AdminMatching />
            </AdminRoute>
          } />
          <Route path="/admin/invoices" element={
            <AdminRoute>
              <AdminInvoices />
            </AdminRoute>
          } />
          <Route path="/admin/verification" element={
            <AdminRoute>
              <AdminVerification />
            </AdminRoute>
          } />

          {/* Catch-All Route: Redirects any unknown URL to Home to prevent crashes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
