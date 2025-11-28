
import { StudentProfile, TutorProfile, TutorRequest } from '../types';

// --- MOCK DATABASE (In-Memory) ---
// In the future, replace these arrays with database calls (e.g., supabase.from('users').select('*'))

let MOCK_STUDENTS: StudentProfile[] = [
  { id: 's1', name: 'Alice Tan', level: 'Primary 5', subjects: ['Math', 'Science'], weaknesses: 'Problem Sums', characterTraits: ['Shy'], learningStyle: 'Visual', status: 'active' },
  { id: 's2', name: 'Bryan Lim', level: 'Secondary 3', subjects: ['A-Math'], weaknesses: 'Algebra', characterTraits: ['Distracted'], learningStyle: 'Kinesthetic', status: 'matched' },
];

let MOCK_TUTORS: TutorProfile[] = [
  { id: 't1', name: 'Mr. Chong', qualification: 'NIE Trained', experienceYears: 8, subjects: ['Math', 'A-Math'], scenarioAnswers: {}, isManaged: true, status: 'verified', matchScore: 98 },
  { id: 't2', name: 'Sarah Lee', qualification: 'NUS Undergrad', experienceYears: 2, subjects: ['English', 'Science'], scenarioAnswers: {}, isManaged: false, status: 'active', matchScore: 85 },
];

let MOCK_REQUESTS: TutorRequest[] = [
  { id: 'r1', parentId: 'p1', studentName: 'Alice Tan', level: 'Primary 5', subject: 'Math', urgency: 'Standard', budget: '$40-50', status: 'matching', date: '2023-10-25' },
  { id: 'r2', parentId: 'p2', studentName: 'Kenji', level: 'Sec 4', subject: 'Pure Chem', urgency: 'Urgent', budget: '$60-70', status: 'analyzing', date: '2023-10-26' },
];

// --- API SERVICE LAYER ---
// Use this layer in your components. It keeps the frontend clean.

export const api = {
  // Admin / Data Management
  admin: {
    getAllStudents: async () => {
      // Simulate Network Delay
      await new Promise(r => setTimeout(r, 500)); 
      return MOCK_STUDENTS;
    },
    getAllTutors: async () => {
      await new Promise(r => setTimeout(r, 500));
      return MOCK_TUTORS;
    },
    getAllRequests: async () => {
      await new Promise(r => setTimeout(r, 500));
      return MOCK_REQUESTS;
    },
    verifyTutor: async (id: string) => {
      MOCK_TUTORS = MOCK_TUTORS.map(t => t.id === id ? { ...t, status: 'verified' } : t);
      return true;
    }
  },

  // AI Matching Simulation
  ai: {
    runMatch: async (requestId: string) => {
      console.log(`[Backend] Running AI Match algorithm for Request ${requestId}...`);
      // Simulate backend processing
      await new Promise(r => setTimeout(r, 1500));
      return {
        recommendedTutors: [MOCK_TUTORS[0]],
        matchReason: "Strong correlation between Student's 'Visual' learning style and Tutor's scenario response indicating diagram-based teaching."
      };
    }
  },

  // Auth / User (Simplified)
  auth: {
    loginParent: async (email: string) => {
      return { name: "Demo Parent", role: "PARENT" };
    },
    loginTutor: async (email: string) => {
      return { name: "Demo Tutor", role: "TUTOR" };
    },
    loginAdmin: async (password: string) => {
      if (password === 'admin123') return true;
      return false;
    }
  }
};
