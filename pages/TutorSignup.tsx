import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signUpTutor } from '../services/auth';
import { Section, Button } from '../components/Components';

const SUBJECTS = [
  'English', 'Mathematics', 'Science', 
  'Elementary Math (E-Math)', 'Additional Math (A-Math)',
  'Pure Physics', 'Pure Chemistry', 'Pure Biology',
  'Chinese', 'Malay', 'Tamil',
  'History', 'Geography', 'Literature',
  'General Paper (GP)', 'H1 Mathematics', 'H2 Mathematics',
  'H1 Physics', 'H2 Physics', 'H1 Chemistry', 'H2 Chemistry',
  'H1 Biology', 'H2 Biology', 'H1 Economics', 'H2 Economics'
];

const LEVELS = [
  'Primary 1', 'Primary 2', 'Primary 3', 'Primary 4', 'Primary 5', 'Primary 6',
  'Secondary 1', 'Secondary 2', 'Secondary 3', 'Secondary 4', 'Secondary 5',
  'JC 1', 'JC 2'
];

export const TutorSignup: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Step 1: Basic Info
  const [basicInfo, setBasicInfo] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    qualification: '',
    experienceYears: '',
  });

  // Step 2: Teaching Details
  const [teachingDetails, setTeachingDetails] = useState({
    subjects: [] as string[],
    levels: [] as string[],
    hourlyRate: '',
  });

  // Step 3: Questionnaire
  const [questionnaire, setQuestionnaire] = useState({
    strugglingStudentApproach: '',
    teachingMethodology: '',
    confidenceBuilding: '',
    teachingStyle: 'balanced',
    preferredFormat: 'flexible',
  });

  const handleBasicInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBasicInfo({ ...basicInfo, [e.target.name]: e.target.value });
  };

  const handleTeachingDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeachingDetails({ ...teachingDetails, [e.target.name]: e.target.value });
  };

  const handleSubjectToggle = (subject: string) => {
    setTeachingDetails(prev => ({
      ...prev,
      subjects: prev.subjects.includes(subject)
        ? prev.subjects.filter(s => s !== subject)
        : [...prev.subjects, subject]
    }));
  };

  const handleLevelToggle = (level: string) => {
    setTeachingDetails(prev => ({
      ...prev,
      levels: prev.levels.includes(level)
        ? prev.levels.filter(l => l !== level)
        : [...prev.levels, level]
    }));
  };

  const handleQuestionnaireChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
    setQuestionnaire({ ...questionnaire, [e.target.name]: e.target.value });
  };

  const validateStep1 = () => {
    if (!basicInfo.fullName || !basicInfo.email || !basicInfo.password || !basicInfo.qualification || !basicInfo.experienceYears) {
      setError('Please fill in all required fields');
      return false;
    }
    if (basicInfo.password !== basicInfo.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (basicInfo.password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    if (teachingDetails.subjects.length === 0) {
      setError('Please select at least one subject');
      return false;
    }
    if (teachingDetails.levels.length === 0) {
      setError('Please select at least one level');
      return false;
    }
    if (!teachingDetails.hourlyRate || parseInt(teachingDetails.hourlyRate) <= 0) {
      setError('Please enter a valid hourly rate');
      return false;
    }
    return true;
  };

  const validateStep3 = () => {
    if (!questionnaire.strugglingStudentApproach || !questionnaire.teachingMethodology || !questionnaire.confidenceBuilding) {
      setError('Please answer all questionnaire questions');
      return false;
    }
    return true;
  };

  const handleNext = () => {
    setError('');
    
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    setError('');
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateStep3()) return;

    setLoading(true);

    const result = await signUpTutor(
      basicInfo.email,
      basicInfo.password,
      {
        fullName: basicInfo.fullName,
        phone: basicInfo.phone,
        qualification: basicInfo.qualification,
        experienceYears: parseInt(basicInfo.experienceYears),
        subjects: teachingDetails.subjects,
        levels: teachingDetails.levels,
        hourlyRate: parseInt(teachingDetails.hourlyRate),
      },
      questionnaire
    );

    setLoading(false);

    if (!result.success) {
      setError(result.error || 'Signup failed');
      return;
    }

    alert('Signup successful! Your application is pending verification. Please check your email.');
    navigate('/login/tutor');
  };

  return (
    <Section className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tutor Signup</h1>
          <p className="text-gray-600 mb-6">Join our platform and start teaching</p>

          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 3 && <div className={`flex-1 h-1 ${currentStep > step ? 'bg-blue-600' : 'bg-gray-300'}`} />}
              </div>
            ))}
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Info */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Step 1: Basic Information</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={basicInfo.fullName}
                    onChange={handleBasicInfoChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={basicInfo.email}
                    onChange={handleBasicInfoChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={basicInfo.phone}
                    onChange={handleBasicInfoChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Qualification *</label>
                  <input
                    type="text"
                    name="qualification"
                    value={basicInfo.qualification}
                    onChange={handleBasicInfoChange}
                    placeholder="e.g., NIE Trained, NUS Graduate"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience *</label>
                  <input
                    type="number"
                    name="experienceYears"
                    value={basicInfo.experienceYears}
                    onChange={handleBasicInfoChange}
                    min="0"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                  <input
                    type="password"
                    name="password"
                    value={basicInfo.password}
                    onChange={handleBasicInfoChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                    minLength={6}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={basicInfo.confirmPassword}
                    onChange={handleBasicInfoChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <Button type="button" onClick={handleNext} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                  Next
                </Button>
              </div>
            )}

            {/* Step 2: Teaching Details */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Step 2: Teaching Details</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subjects Taught *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-h-48 overflow-y-auto border border-gray-300 rounded-lg p-3">
                    {SUBJECTS.map(subject => (
                      <label key={subject} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={teachingDetails.subjects.includes(subject)}
                          onChange={() => handleSubjectToggle(subject)}
                          className="rounded"
                        />
                        <span className="text-sm">{subject}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Levels Taught *</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 border border-gray-300 rounded-lg p-3">
                    {LEVELS.map(level => (
                      <label key={level} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={teachingDetails.levels.includes(level)}
                          onChange={() => handleLevelToggle(level)}
                          className="rounded"
                        />
                        <span className="text-sm">{level}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Hourly Rate (SGD) *</label>
                  <input
                    type="number"
                    name="hourlyRate"
                    value={teachingDetails.hourlyRate}
                    onChange={handleTeachingDetailsChange}
                    min="0"
                    placeholder="e.g., 50"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="flex space-x-4">
                  <Button type="button" onClick={handleBack} className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3">
                    Back
                  </Button>
                  <Button type="button" onClick={handleNext} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3">
                    Next
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Questionnaire */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-4">Step 3: Teaching Philosophy</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    How do you handle a struggling student? *
                  </label>
                  <textarea
                    name="strugglingStudentApproach"
                    value={questionnaire.strugglingStudentApproach}
                    onChange={handleQuestionnaireChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Describe your teaching methodology *
                  </label>
                  <textarea
                    name="teachingMethodology"
                    value={questionnaire.teachingMethodology}
                    onChange={handleQuestionnaireChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    What's your approach to building student confidence? *
                  </label>
                  <textarea
                    name="confidenceBuilding"
                    value={questionnaire.confidenceBuilding}
                    onChange={handleQuestionnaireChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Are you patient or strict? *
                  </label>
                  <select
                    name="teachingStyle"
                    value={questionnaire.teachingStyle}
                    onChange={handleQuestionnaireChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="patient">Patient</option>
                    <option value="balanced">Balanced</option>
                    <option value="strict">Strict</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred teaching format? *
                  </label>
                  <select
                    name="preferredFormat"
                    value={questionnaire.preferredFormat}
                    onChange={handleQuestionnaireChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="structured">Structured</option>
                    <option value="flexible">Flexible</option>
                    <option value="student-led">Student-led</option>
                  </select>
                </div>

                <div className="flex space-x-4">
                  <Button type="button" onClick={handleBack} className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-3">
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3"
                  >
                    {loading ? 'Submitting...' : 'Complete Signup'}
                  </Button>
                </div>
              </div>
            )}
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login/tutor" className="text-blue-600 hover:text-blue-700 font-medium">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
