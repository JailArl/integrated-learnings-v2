import { supabase } from './supabase';

export interface UserProfile {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  role: 'parent' | 'tutor';
}

// Sign up a parent
export const signUpParent = async (
  email: string,
  password: string,
  fullName: string,
  phone?: string
): Promise<{ success: boolean; error?: string; user?: any }> => {
  if (!supabase) {
    return { success: false, error: 'Supabase not configured' };
  }

  try {
    // Create auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: 'parent',
          full_name: fullName,
        },
      },
    });

    if (authError) throw authError;
    if (!authData.user) throw new Error('User creation failed');

    // Create parent profile
    const { error: profileError } = await supabase
      .from('parent_profiles')
      .insert([
        {
          id: authData.user.id,
          full_name: fullName,
          email: email,
          phone: phone || null,
        },
      ]);

    if (profileError) throw profileError;

    return { success: true, user: authData.user };
  } catch (error: any) {
    console.error('Parent signup error:', error);
    return { success: false, error: error.message };
  }
};

// Sign up a tutor
export const signUpTutor = async (
  email: string,
  password: string,
  data: {
    fullName: string;
    phone?: string;
    qualification: string;
    experienceYears: number;
    subjects: string[];
    levels: string[];
    hourlyRate: number;
  },
  questionnaireAnswers: any
): Promise<{ success: boolean; error?: string; user?: any }> => {
  if (!supabase) {
    return { success: false, error: 'Supabase not configured' };
  }

  try {
    // Create auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: 'tutor',
          full_name: data.fullName,
        },
      },
    });

    if (authError) throw authError;
    if (!authData.user) throw new Error('User creation failed');

    // Create tutor profile
    const { error: profileError } = await supabase
      .from('tutor_profiles')
      .insert([
        {
          id: authData.user.id,
          full_name: data.fullName,
          email: email,
          phone: data.phone || null,
          qualification: data.qualification,
          experience_years: data.experienceYears,
          subjects: data.subjects,
          levels: data.levels,
          hourly_rate: data.hourlyRate,
          questionnaire_answers: questionnaireAnswers,
          verification_status: 'pending',
        },
      ]);

    if (profileError) throw profileError;

    return { success: true, user: authData.user };
  } catch (error: any) {
    console.error('Tutor signup error:', error);
    return { success: false, error: error.message };
  }
};

// Sign in (for both parents and tutors)
export const signIn = async (
  email: string,
  password: string
): Promise<{ success: boolean; error?: string; user?: any; role?: string }> => {
  if (!supabase) {
    return { success: false, error: 'Supabase not configured' };
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    if (!data.user) throw new Error('Sign in failed');

    // Get role from user metadata
    const role = data.user.user_metadata?.role || null;

    return { success: true, user: data.user, role };
  } catch (error: any) {
    console.error('Sign in error:', error);
    return { success: false, error: error.message };
  }
};

// Sign out
export const signOut = async (): Promise<{ success: boolean; error?: string }> => {
  if (!supabase) {
    return { success: false, error: 'Supabase not configured' };
  }

  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { success: true };
  } catch (error: any) {
    console.error('Sign out error:', error);
    return { success: false, error: error.message };
  }
};

// Get current user
export const getCurrentUser = async (): Promise<{
  user: any | null;
  role: string | null;
}> => {
  if (!supabase) {
    return { user: null, role: null };
  }

  try {
    const { data } = await supabase.auth.getUser();
    const user = data.user;
    const role = user?.user_metadata?.role || null;
    return { user, role };
  } catch (error) {
    console.error('Get current user error:', error);
    return { user: null, role: null };
  }
};

// Check if user is authenticated
export const isAuthenticated = async (): Promise<boolean> => {
  const { user } = await getCurrentUser();
  return !!user;
};
