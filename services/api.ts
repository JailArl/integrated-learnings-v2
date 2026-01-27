
import { StudentProfile, TutorProfile, TutorRequest } from '../types';
import { createClient } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from './supabase';

// --- MOCK DATABASE (In-Memory Fallback) ---
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
export const api = {
  // Admin / Data Management
  admin: {
    checkConnection: async () => {
      // Returns true if running on real DB, false if Mock
      if (CONFIG.USE_MOCK_DATA || !supabase) return false;
      return true;
    },
    getAllStudents: async () => {
      if (!CONFIG.USE_MOCK_DATA && supabase) {
        const { data } = await supabase.from('students').select('*');
        return data as StudentProfile[] || [];
      }
      await new Promise(r => setTimeout(r, 500)); 
      return MOCK_STUDENTS;
    },
    getAllTutors: async () => {
      if (!CONFIG.USE_MOCK_DATA && supabase) {
        const { data } = await supabase.from('tutors').select('*');
        return data as TutorProfile[] || [];
      }
      await new Promise(r => setTimeout(r, 500));
      return MOCK_TUTORS;
    },
    getAllRequests: async () => {
      if (!CONFIG.USE_MOCK_DATA && supabase) {
        const { data } = await supabase.from('requests').select('*');
        return data as TutorRequest[] || [];
      }
      await new Promise(r => setTimeout(r, 500));
      return MOCK_REQUESTS;
    },
    verifyTutor: async (id: string) => {
      if (!CONFIG.USE_MOCK_DATA && supabase) {
        await supabase.from('tutors').update({ status: 'verified' }).eq('id', id);
        return true;
      }
      MOCK_TUTORS = MOCK_TUTORS.map(t => t.id === id ? { ...t, status: 'verified' } : t);
      return true;
    }
  },

  // AI Matching Simulation / Real Call
  ai: {
    runMatch: async (requestId: string) => {
      console.log(`[Backend] Running AI Match algorithm for Request ${requestId}...`);
      
      if (!CONFIG.USE_MOCK_DATA && supabase) {
        // REAL AI CALL using Supabase Edge Functions
        try {
           const { data, error } = await supabase.functions.invoke('match-tutor', {
             body: { requestId }
           });
           if (error) throw error;
           return data; 
        } catch (e) {
           console.error("AI Match Failed", e);
           return { recommendedTutors: [], matchReason: "Error connecting to AI" };
        }
      }

      // SIMULATION
      await new Promise(r => setTimeout(r, 1500));
      return {
        recommendedTutors: [MOCK_TUTORS[0]],
        matchReason: "Strong correlation between Student's 'Visual' learning style and Tutor's scenario response indicating diagram-based teaching."
      };
    }
  },

  // Auth / User
  auth: {
    loginParent: async (email: string) => {
      return { name: "Demo Parent", role: "PARENT" };
    },
    loginTutor: async (email: string) => {
      return { name: "Demo Tutor", role: "TUTOR" };
    },
    loginAdmin: async (password: string) => {
      // Hardcoded for MVP Security. 
      // In production, verify against Database Hash.
      if (password === 'admin123') return true;
      return false;
    }
  },

  // Form Submissions
  forms: {
    submitParentRequest: async (data: any) => {
      if (!isSupabaseConfigured || !supabase) {
        console.warn('Supabase not configured, using fallback');
        return { success: false, message: 'Database not configured' };
      }

      try {
        const { error } = await supabase
          .from('parent_submissions')
          .insert([{
            student_name: data.studentName,
            student_age: data.studentAge,
            student_level: data.level,
            current_grades: data.currentGrades,
            subjects: data.subjects?.join(', '),
            parent_name: data.parentName,
            parent_email: data.parentEmail,
            parent_phone: data.parentPhone,
            location: data.location,
            tuition_goal: data.tuitionGoal,
            preferred_timing: data.preferredTiming,
            budget_range: data.budgetRange,
            status: 'pending',
            submitted_at: new Date().toISOString()
          }]);

        if (error) throw error;
        return { success: true, message: 'Application submitted successfully!' };
      } catch (error: any) {
        console.error('Parent submission error:', error);
        return { success: false, message: error.message };
      }
    },

    submitTutorRequest: async (data: any) => {
      if (!isSupabaseConfigured || !supabase) {
        console.warn('Supabase not configured, using fallback');
        return { success: false, message: 'Database not configured' };
      }

      try {
        const { error } = await supabase
          .from('tutor_submissions')
          .insert([{
            tutor_name: data.tutorName,
            tutor_email: data.tutorEmail,
            tutor_phone: data.tutorPhone,
            qualification: data.qualification,
            experience_years: parseInt(data.experienceYears) || 0,
            subjects: data.subjects?.join(', '),
            levels_taught: data.levelsTaught?.join(', '),
            education_background: data.educationBackground,
            certifications: data.certifications,
            hourly_rate: parseInt(data.hourlyRate) || 0,
            preferred_areas: data.preferredAreas,
            availability: data.availability,
            bio: data.bio,
            status: 'pending',
            submitted_at: new Date().toISOString()
          }]);

        if (error) throw error;
        return { success: true, message: 'Application submitted successfully!' };
      } catch (error: any) {
        console.error('Tutor submission error:', error);
        return { success: false, message: error.message };
      }
    }
  }
};
