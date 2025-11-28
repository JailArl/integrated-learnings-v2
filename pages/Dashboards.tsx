

import React, { useState, useEffect } from 'react';
import { Section, Button, Card } from '../components/Components';
import { StudentProfile, TutorProfile } from '../types';
import { TUTOR_CONTRACT_TEXT, TUTOR_SCENARIO_QUESTIONS, POLICY_CONTENT } from '../constants';
import { Link } from 'react-router-dom';
import { Lock, CreditCard, Calendar, BookOpen, Cpu, Shield, AlertCircle, User, MapPin, DollarSign, Clock, Briefcase, FileCheck, Landmark, CheckCircle2, Wallet, QrCode, FileText, Download, Filter, Edit2, PlusCircle, X } from 'lucide-react';

// --- HELPER FOR SUBJECTS ---
const getSubjectsForLevel = (level: string) => {
  if (!level) return [];
  
  // Logic to categorize level
  const isPriLower = ['Primary 1', 'Primary 2'].includes(level);
  const isPriUpper = ['Primary 3', 'Primary 4', 'Primary 5', 'Primary 6'].includes(level);
  const isSecLower = ['Secondary 1', 'Secondary 2'].includes(level);
  const isSecUpper = ['Secondary 3', 'Secondary 4', 'Secondary 5'].includes(level);
  const isJC = ['JC 1', 'JC 2', 'Millennia Institute'].includes(level);

  if (isPriLower) {
    return [
      'English', 'Mathematics', 
      'Chinese', 'Malay', 'Tamil'
    ];
  }
  
  if (isPriUpper) {
    return [
      'English', 'Mathematics', 'Science', 
      'Chinese', 'Higher Chinese', 'Malay', 'Higher Malay', 'Tamil', 'Higher Tamil'
    ];
  }

  if (isSecLower) {
    return [
      'English', 'Mathematics', 'Science', 
      'Chinese', 'Higher Chinese', 'Malay', 'Higher Malay', 'Tamil', 'Higher Tamil',
      'History', 'Geography', 'Literature'
    ];
  }

  if (isSecUpper) {
    return [
      'English', 
      'Elementary Math (E-Math)', 'Additional Math (A-Math)',
      'Pure Physics', 'Pure Chemistry', 'Pure Biology',
      'Combined Science (Phy/Chem)', 'Combined Science (Bio/Chem)', 'Combined Science (Phy/Bio)',
      'Pure Geography', 'Pure History', 'Pure Literature',
      'Social Studies', // Standalone option
      'Elective Geography', 'Elective History', 'Elective Literature',
      'Combined Humanities (SS + Geog)', 'Combined Humanities (SS + Hist)', 'Combined Humanities (SS + Lit)',
      'Chinese', 'Higher Chinese', 'Malay', 'Higher Malay', 'Tamil', 'Higher Tamil',
      'Principle of Accounts (POA)'
    ];
  }

  if (isJC) {
    return [
      'General Paper (GP)',
      'H1 Mathematics', 'H2 Mathematics', 'H3 Mathematics',
      'H1 Physics', 'H2 Physics',
      'H1 Chemistry', 'H2 Chemistry',
      'H1 Biology', 'H2 Biology',
      'H1 Economics', 'H2 Economics',
      'H1 Geography', 'H2 Geography',
      'H1 History', 'H2 History',
      'H1 Literature', 'H2 Literature',
      'Knowledge & Inquiry (KI)',
      'China Studies'
    ];
  }
  
  return [];
};

// --- AUTH COMPONENTS ---

const LoginScreen: React.FC<{ 
  onLogin: () => void; 
  onSwitchToSignup: () => void; 
  title: string;
}> = ({ onLogin, onSwitchToSignup, title }) => (
  <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg border border-slate-200">
    <div className="text-center mb-8">
      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
        <User className="text-secondary" />
      </div>
      <h2 className="text-2xl font-bold text-primary">{title}</h2>
      <p className="text-slate-500 text-sm mt-1">Welcome back to Integrated Learnings</p>
    </div>

    <div className="space-y-4">
      <div>
        <label className="block text-sm font-bold mb-1 text-slate-700">Email Address</label>
        <input type="email" className="w-full border border-slate-300 p-3 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition" placeholder="you@example.com" />
      </div>
      <div>
        <label className="block text-sm font-bold mb-1 text-slate-700">Password</label>
        <input type="password" className="w-full border border-slate-300 p-3 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition" placeholder="••••••••" />
      </div>
      <div className="text-right">
        <button className="text-xs text-secondary hover:underline">Forgot Password?</button>
      </div>
      <Button onClick={onLogin} className="w-full py-3 shadow-lg">Sign In</Button>
    </div>

    <div className="mt-8 pt-6 border-t border-slate-100 text-center">
      <p className="text-sm text-slate-600 mb-4">Don't have an account yet?</p>
      <Button onClick={onSwitchToSignup} variant="outline" className="w-full py-2 text-sm">Create New Account</Button>
    </div>
  </div>
);

// --- PARENT FLOW COMPONENTS ---

const ParentSignupWizard: React.FC<{ 
  onComplete: (profile: StudentProfile) => void;
  onSwitchToLogin: () => void;
}> = ({ onComplete, onSwitchToLogin }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<StudentProfile>>({
    characterTraits: []
  });

  const handleTraitToggle = (trait: string) => {
    const current = formData.characterTraits || [];
    if (current.includes(trait)) {
      setFormData({ ...formData, characterTraits: current.filter(t => t !== trait) });
    } else {
      setFormData({ ...formData, characterTraits: [...current, trait] });
    }
  };

  const nextStep = () => setStep(step + 1);

  // Demo Profile
  const demoProfile: StudentProfile = {
      name: "Demo Student",
      level: "Secondary 3",
      subjects: ["English", "A-Math"],
      weaknesses: "Algebra & Time Management",
      characterTraits: ["Visual Learner", "Anxious"],
      learningStyle: "Visual",
      status: "active"
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-slate-200 relative">
      <div className="absolute top-4 right-4">
         <button onClick={() => onComplete(demoProfile)} className="text-xs font-bold text-slate-400 hover:text-secondary underline bg-slate-50 px-2 py-1 rounded">
             Skip (Preview Mode)
         </button>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center text-sm font-bold text-slate-400 mb-2">
          <span className={step >= 1 ? "text-secondary" : ""}>1. Basics</span>
          <span className={step >= 2 ? "text-secondary" : ""}>2. Academic Profile</span>
          <span className={step >= 3 ? "text-secondary" : ""}>3. Character</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-secondary transition-all duration-300" style={{ width: `${(step / 3) * 100}%` }}></div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-primary mb-6">Create Parent Account</h2>

      {step === 1 && (
        <div className="space-y-4">
          <div><label className="block text-sm font-bold mb-1">Parent Name</label><input className="w-full border p-2 rounded" placeholder="Your Name" /></div>
          <div><label className="block text-sm font-bold mb-1">Email</label><input className="w-full border p-2 rounded" placeholder="Email Address" /></div>
          <div><label className="block text-sm font-bold mb-1">Password</label><input type="password" className="w-full border p-2 rounded" placeholder="Password" /></div>
          <Button onClick={nextStep} className="w-full mt-4">Next: Student Profile</Button>
          
          <div className="text-center pt-4 mt-4 border-t border-slate-100">
             <p className="text-sm text-slate-600">Already registered? <button onClick={onSwitchToLogin} className="text-secondary font-bold hover:underline">Sign In here</button></p>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Tell us about the student</h3>
          <div>
            <label className="block text-sm font-bold mb-1">Student Name</label>
            <input 
              className="w-full border p-2 rounded" 
              onChange={e => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Level</label>
            <select className="w-full border p-2 rounded" onChange={e => setFormData({...formData, level: e.target.value})}>
              <option>Select Level</option>
              <option>Primary 1-3</option>
              <option>Primary 4-6</option>
              <option>Secondary 1-2</option>
              <option>Secondary 3-4 (O-Level)</option>
              <option>Junior College</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Main Academic Weaknesses</label>
            <textarea 
              className="w-full border p-2 rounded h-24" 
              placeholder="E.g. struggles with Math algebra, loses focus during Science open-ended questions..."
              onChange={e => setFormData({...formData, weaknesses: e.target.value})}
            />
          </div>
          <Button onClick={nextStep} className="w-full mt-4">Next: Character Analysis</Button>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="font-bold text-secondary text-sm mb-2 uppercase">AI Matching Data</h3>
            <p className="text-sm text-slate-600">We use this to match your child with a tutor who fits their personality.</p>
          </div>
          
          <div>
            <label className="block text-sm font-bold mb-3">Character Traits (Select all that apply)</label>
            <div className="grid grid-cols-2 gap-3">
              {['Shy / Introverted', 'Easily Distracted', 'Competitive', 'Need constant motivation', 'Independent Learner', 'Anxious during exams'].map(trait => (
                <button 
                  key={trait}
                  onClick={() => handleTraitToggle(trait)}
                  className={`p-3 text-sm rounded border text-left transition ${formData.characterTraits?.includes(trait) ? 'bg-secondary text-white border-secondary' : 'bg-white text-slate-600 border-slate-200'}`}
                >
                  {trait}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Learning Style</label>
            <select className="w-full border p-2 rounded" onChange={e => setFormData({...formData, learningStyle: e.target.value as any})}>
              <option>Not sure</option>
              <option value="Visual">Visual (Likes diagrams, charts)</option>
              <option value="Auditory">Auditory (Learns by listening/discussing)</option>
              <option value="Kinesthetic">Kinesthetic (Learn by doing)</option>
            </select>
          </div>

          <Button onClick={() => onComplete({ ...formData, status: 'active' } as StudentProfile)} className="w-full mt-4">Complete Registration</Button>
        </div>
      )}
    </div>
  );
};

export const ParentDashboard: React.FC = () => {
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [activeTab, setActiveTab] = useState('profile');
  const [requestLevel, setRequestLevel] = useState('');
  const [requestSubject, setRequestSubject] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [myRequests, setMyRequests] = useState<any[]>([]); // Store requests

  // Demo Profile Data
  const demoProfile: StudentProfile = {
      name: "Demo Student",
      level: "Secondary 3",
      subjects: ["English", "A-Math"],
      weaknesses: "Algebra & Time Management",
      characterTraits: ["Visual Learner", "Anxious"],
      learningStyle: "Visual",
      status: "active"
  };

  useEffect(() => {
    if (profile?.level) {
      if (profile.level === "Secondary 3") setRequestLevel("Secondary 3");
      else setRequestLevel(profile.level);
    }
  }, [profile]);

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(true);
    // Add to history
    setMyRequests([
      ...myRequests, 
      { 
        id: Date.now(),
        level: requestLevel, 
        subject: requestSubject || 'General', 
        status: 'Analyzing Profile', 
        date: new Date().toLocaleDateString() 
      }
    ]);
  };

  if (!profile) {
    return (
      <Section className="min-h-[80vh] flex items-center justify-center">
        {authMode === 'login' ? (
          <LoginScreen 
            title="Parent Login" 
            onLogin={() => setProfile(demoProfile)} 
            onSwitchToSignup={() => setAuthMode('signup')} 
          />
        ) : (
          <ParentSignupWizard 
            onComplete={setProfile} 
            onSwitchToLogin={() => setAuthMode('login')} 
          />
        )}
      </Section>
    );
  }

  const NavItem = ({ id, label, icon: Icon }: any) => (
    <button 
      onClick={() => setActiveTab(id)} 
      className={`w-full text-left px-4 py-3 rounded-lg font-bold flex items-center ${activeTab === id ? 'bg-secondary text-white' : 'bg-white text-slate-600 hover:bg-slate-50'}`}
    >
      {Icon && <Icon size={16} className="mr-2" />}
      {label}
    </button>
  );

  return (
    <Section>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Parent Dashboard</h1>
        <div className="text-right">
          <p className="text-sm text-slate-500">Welcome,</p>
          <p className="font-bold text-primary">Parent of {profile.name}</p>
        </div>
      </div>

      {activeTab === 'profile' && (
        <div className="bg-primary text-white p-6 rounded-xl shadow-lg mb-8 flex flex-col md:flex-row items-center justify-between border-l-8 border-secondary">
           <div className="mb-4 md:mb-0">
             <div className="flex items-center text-blue-300 font-bold mb-1 uppercase text-xs tracking-wider">
               <Shield size={14} className="mr-2" /> Recommended Next Step
             </div>
             <h3 className="text-xl font-bold">Academic Health Check: Pending</h3>
             <p className="text-slate-300 text-sm mt-1 max-w-xl">
               Before starting regular tuition, we highly recommend a <strong>Comprehensive Learning Assessment (CLA)</strong> to diagnose learning gaps.
             </p>
           </div>
           <Button onClick={() => setActiveTab('cla')} variant="white" className="whitespace-nowrap">
             Book Diagnostic CLA
           </Button>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 flex-shrink-0">
          <nav className="space-y-2">
            <NavItem id="profile" label="Child Profile" />
            <NavItem id="request" label="Request a Tutor" />
            <NavItem id="billing" label="My Tutors & Billing" icon={Wallet} />
            <NavItem id="cla" label="Book CLA" />
            <NavItem id="policies" label="My Policies" icon={Shield} />
            <div className="border-t border-slate-100 my-2 pt-2">
               <p className="px-4 text-xs font-bold text-slate-400 uppercase mb-2">Special Programs</p>
               <NavItem id="extra" label="Extra Learnings" icon={Cpu} />
               <NavItem id="holiday" label="Holiday Programs" icon={Calendar} />
               <NavItem id="coursework" label="O-Lvl Coursework" icon={BookOpen} />
            </div>
            <button onClick={() => setProfile(null)} className="w-full text-left px-4 py-3 rounded-lg font-bold text-red-500 hover:bg-red-50 mt-8">Sign Out</button>
          </nav>
        </div>

        <div className="flex-1">
          {activeTab === 'profile' && (
            <Card title="Student Profile Analysis" className="relative">
              <div className="absolute top-6 right-6">
                 <button onClick={() => setProfile(null)} className="flex items-center text-xs text-secondary font-bold hover:underline">
                    <Edit2 size={12} className="mr-1"/> Edit Profile
                 </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-sm text-slate-400 uppercase mb-2">Academic Info</h4>
                  <p className="font-semibold text-lg">{profile.level}</p>
                  <p className="text-slate-600 mt-2"><span className="font-bold">Focus Area:</span> {profile.weaknesses}</p>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-400 uppercase mb-2">Character & Style</h4>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {profile.characterTraits.map((t, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-bold">{t}</span>
                    ))}
                  </div>
                  <p className="text-slate-600">Style: {profile.learningStyle}</p>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'billing' && (
             <Card title="My Tutors & Billing Status">
                <div className="space-y-8">
                   <div>
                      <div className="flex justify-between items-center mb-4">
                         <div>
                            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded">Active</span>
                            <h4 className="font-bold text-lg text-primary mt-1">A-Math (Sec 3 G3)</h4>
                            <p className="text-sm text-slate-500">Tutor: Mr. Lim (Referral Partner)</p>
                         </div>
                         <div className="text-right">
                            <p className="font-bold text-xl">$60/hr</p>
                            <p className="text-xs text-slate-400">1.5hr • Weekly</p>
                         </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                         <h5 className="font-bold text-slate-700 text-sm mb-3">Payment Schedule</h5>
                         <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-3 rounded border border-blue-200 shadow-sm relative overflow-hidden">
                               <div className="absolute top-0 right-0 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5">DUE NOW</div>
                               <p className="text-xs font-bold text-slate-400 uppercase">Weeks 1 & 2 (Agency Fee)</p>
                               <p className="text-lg font-bold text-blue-800 mb-2">$180.00</p>
                               <p className="text-xs text-slate-600 mb-2">Payable to Integrated Learnings</p>
                               <button 
                                 className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 rounded flex items-center justify-center transition"
                                 onClick={() => alert("QR Code would open here. PayNow to UEN: 202401234K")}
                               >
                                  <QrCode size={12} className="mr-1"/> Show PayNow QR
                               </button>
                            </div>
                            <div className="bg-white p-3 rounded border border-slate-100 opacity-70">
                               <p className="text-xs font-bold text-slate-400 uppercase">Week 3 Onwards</p>
                               <p className="text-lg font-bold text-slate-700 mb-2">Direct to Tutor</p>
                               <p className="text-xs text-slate-500">Pay Mr. Lim directly via PayNow/Cash after each lesson.</p>
                            </div>
                         </div>
                      </div>
                   </div>
                   <hr className="border-slate-100" />
                   <div className="bg-blue-50 p-4 rounded text-sm text-slate-600 flex items-start">
                      <Landmark className="text-secondary mr-3 flex-shrink-0" size={18} />
                      <div>
                         <span className="font-bold text-secondary">Note on Managed Tutors:</span>
                         <p className="mt-1">If you engage a "Managed Tutor", you will receive a single consolidated monthly invoice from the Agency instead of splitting payments.</p>
                      </div>
                   </div>
                </div>
             </Card>
          )}

          {activeTab === 'policies' && (
             <div className="space-y-6">
                <Card title="Cancellations & Attendance">
                  <div className="flex items-start mb-4">
                    <AlertCircle className="text-amber-500 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-sm text-slate-600 italic">
                      Consistent attendance is the #1 factor in academic improvement.
                    </p>
                  </div>
                  <ul className="space-y-4">
                    {POLICY_CONTENT.parents.cancellation.map((item, i) => (
                      <li key={i} className="flex items-start text-slate-700">
                        <span className="mr-3 text-secondary font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card title="Payments & Commitment">
                  <ul className="space-y-4">
                    {POLICY_CONTENT.parents.payments.map((item, i) => (
                      <li key={i} className="flex items-start text-slate-700">
                        <span className="mr-3 text-secondary font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
             </div>
          )}

          {activeTab === 'request' && (
            <Card title="Request a Tutor">
               {/* Pending Requests List */}
               {myRequests.length > 0 && !submitSuccess && (
                 <div className="mb-8">
                    <h4 className="font-bold text-slate-700 mb-3 text-sm uppercase">Pending Requests</h4>
                    <div className="space-y-2">
                      {myRequests.map((req, idx) => (
                        <div key={idx} className="bg-white border border-slate-200 p-4 rounded-lg flex justify-between items-center shadow-sm">
                           <div>
                              <p className="font-bold text-primary">{req.level} - {req.subject}</p>
                              <p className="text-xs text-slate-500">Submitted: {req.date}</p>
                           </div>
                           <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full animate-pulse">{req.status}</span>
                        </div>
                      ))}
                    </div>
                    <hr className="my-6 border-slate-100"/>
                 </div>
               )}

               {!submitSuccess ? (
                 <>
                  <div className="mb-6">
                   <div className="bg-blue-50 border-l-4 border-secondary p-4 mb-6">
                     <p className="text-sm text-blue-800">
                       We use your child's <strong>Learning Profile</strong> (Style: {profile.learningStyle}) to filter the best matches. 
                     </p>
                   </div>

                   <form className="space-y-6" onSubmit={handleRequestSubmit}>
                     {/* Urgency */}
                     <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                        <label className="block text-sm font-bold mb-2 text-red-800">Urgency Level</label>
                        <select className="w-full border p-2 rounded bg-white text-slate-700">
                           <option>Standard (Start in 1-2 weeks)</option>
                           <option>Urgent (Exam in less than 1 month) +$10 admin</option>
                           <option>Planning Ahead (Next Term/Year)</option>
                        </select>
                     </div>

                     {/* Academic Details */}
                     <div>
                       <h4 className="font-bold text-slate-800 mb-3 border-b pb-2">1. Academic Needs</h4>
                       <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                             <label className="block text-sm font-bold mb-1">Level</label>
                             <select 
                               className="w-full border p-2 rounded bg-white" 
                               value={requestLevel}
                               onChange={(e) => setRequestLevel(e.target.value)}
                             >
                                <option value="">Select Level...</option>
                                <optgroup label="Primary School">
                                   <option>Primary 1</option>
                                   <option>Primary 2</option>
                                   <option>Primary 3</option>
                                   <option>Primary 4</option>
                                   <option>Primary 5</option>
                                   <option>Primary 6</option>
                                </optgroup>
                                <optgroup label="Secondary School">
                                   <option>Secondary 1</option>
                                   <option>Secondary 2</option>
                                   <option>Secondary 3</option>
                                   <option>Secondary 4</option>
                                   <option>Secondary 5</option>
                                </optgroup>
                                <optgroup label="Junior College / Pre-U">
                                   <option>JC 1</option>
                                   <option>JC 2</option>
                                   <option>Millennia Institute</option>
                                </optgroup>
                             </select>
                          </div>
                          <div>
                             <label className="block text-sm font-bold mb-1">Stream / Syllabus</label>
                             <select className="w-full border p-2 rounded bg-white">
                                <option value="">Select Stream...</option>
                                <option>Standard (Primary)</option>
                                <option>Foundation (Primary)</option>
                                <option>G3 (Express)</option>
                                <option>G2 (Normal Academic)</option>
                                <option>G1 (Normal Technical)</option>
                                <option>IP (Integrated Programme)</option>
                                <option>IB (International Baccalaureate)</option>
                             </select>
                          </div>
                       </div>

                       <div className="grid md:grid-cols-2 gap-4">
                         <div>
                           <label className="block text-sm font-bold mb-1">Subject(s) Required</label>
                           <select 
                             className="w-full border p-2 rounded bg-white" 
                             disabled={!requestLevel}
                             onChange={(e) => setRequestSubject(e.target.value)}
                           >
                             <option value="">Select Subject...</option>
                             {getSubjectsForLevel(requestLevel).map((subject, idx) => (
                               <option key={idx} value={subject}>{subject}</option>
                             ))}
                           </select>
                         </div>
                         <div>
                            <label className="block text-sm font-bold mb-1">Current Grade</label>
                            <input className="w-full border p-2 rounded" placeholder="e.g. AL5, B4 (55%)" />
                         </div>
                       </div>
                     </div>

                     {/* Logistics */}
                     <div>
                       <h4 className="font-bold text-slate-800 mb-3 border-b pb-2">2. Logistics</h4>
                       <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                             <label className="block text-sm font-bold mb-1">Frequency</label>
                             <select className="w-full border p-2 rounded bg-white">
                                <option>1 lesson / week</option>
                                <option>2 lessons / week</option>
                             </select>
                          </div>
                          <div>
                             <label className="block text-sm font-bold mb-1">Duration</label>
                             <select className="w-full border p-2 rounded bg-white">
                                <option>1.5 Hours</option>
                                <option>2 Hours</option>
                             </select>
                          </div>
                       </div>
                       
                        <div className="mb-4">
                          <label className="block text-sm font-bold mb-1">Address / Postal Code</label>
                          <input className="w-full border p-2 rounded" placeholder="e.g. 560123" />
                       </div>
                     </div>
                     
                     <Button className="w-full py-4 text-lg shadow-lg">Submit Request</Button>
                   </form>
                  </div>
                 </>
               ) : (
                 <div className="text-center py-12 animate-in fade-in zoom-in duration-300">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                       <CheckCircle2 size={40} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Request Received!</h3>
                    <p className="text-slate-500 mb-8">We have started the matching process.</p>
                    
                    <div className="max-w-md mx-auto text-left bg-slate-50 p-6 rounded-xl border border-slate-200">
                       <h4 className="font-bold text-slate-800 mb-4">What happens next?</h4>
                       <div className="space-y-4 relative">
                          {/* Timeline Line */}
                          <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-slate-200"></div>
                          
                          <div className="flex items-start relative z-10">
                             <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-sm flex-shrink-0 mr-4"></div>
                             <div>
                                <p className="text-xs font-bold text-blue-600">0 - 24 Hours</p>
                                <p className="text-sm text-slate-700">Profile analysis & Tutor filtering.</p>
                             </div>
                          </div>
                          <div className="flex items-start relative z-10">
                             <div className="w-6 h-6 rounded-full bg-slate-300 border-4 border-white shadow-sm flex-shrink-0 mr-4"></div>
                             <div>
                                <p className="text-xs font-bold text-slate-400">24 - 48 Hours</p>
                                <p className="text-sm text-slate-500">We send you 2-3 Tutor Profiles via WhatsApp.</p>
                             </div>
                          </div>
                          <div className="flex items-start relative z-10">
                             <div className="w-6 h-6 rounded-full bg-slate-300 border-4 border-white shadow-sm flex-shrink-0 mr-4"></div>
                             <div>
                                <p className="text-xs font-bold text-slate-400">Selection</p>
                                <p className="text-sm text-slate-500">You pick your tutor and confirm start date.</p>
                             </div>
                          </div>
                       </div>
                    </div>
                    
                    <Button onClick={() => setSubmitSuccess(false)} variant="outline" className="mt-8">Submit Another Request</Button>
                 </div>
               )}
            </Card>
          )}
          
          {activeTab === 'coursework' && (
             <Card title="O-Level Coursework Support (D&T / Art / FCE)">
               <p className="mb-6 text-slate-600">Coursework accounts for <strong className="text-red-500">60-70%</strong> of the O-Level Grade. Don't leave it to the last minute.</p>
               
               <div className="space-y-4 mb-8">
                  <div className="flex items-center p-4 bg-slate-50 rounded border border-slate-200">
                     <Calendar className="text-secondary mr-4" />
                     <div>
                        <h5 className="font-bold text-primary">June Holiday Sprint (D&T)</h5>
                        <p className="text-xs text-slate-500">12th - 16th June • 10am - 3pm • Build & Document</p>
                     </div>
                     <Button className="ml-auto text-xs px-3 py-1">Book</Button>
                  </div>
                  <div className="flex items-center p-4 bg-slate-50 rounded border border-slate-200">
                     <Calendar className="text-secondary mr-4" />
                     <div>
                        <h5 className="font-bold text-primary">Art Portfolio Clinic</h5>
                        <p className="text-xs text-slate-500">Every Saturday • 2pm - 5pm • Studio A</p>
                     </div>
                     <Button className="ml-auto text-xs px-3 py-1">Book</Button>
                  </div>
               </div>
               
               <Button className="w-full">Request Private Specialist</Button>
             </Card>
          )}

          {activeTab === 'extra' && (
             <Card title="Extra Learnings Signup">
               <p className="mb-4 text-slate-600">Select a program to enroll your child in.</p>
               <div className="grid gap-4">
                  {['AI & Coding (Python)', 'Financial Literacy', 'Basketball Coaching', 'Badminton Coaching'].map((prog, i) => (
                    <div key={i} className="flex justify-between items-center border p-4 rounded hover:bg-slate-50">
                       <span className="font-bold text-slate-700">{prog}</span>
                       <Button className="py-2 px-4 text-sm">Enroll</Button>
                    </div>
                  ))}
               </div>
             </Card>
          )}

          {activeTab === 'holiday' && (
             <Card title="Holiday Programs">
               <p className="mb-4 text-slate-600">Upcoming bootcamps for intensive revision.</p>
               <div className="grid gap-4">
                  {['PSLE Bootcamp', 'Sec 1 Head Start', 'O-Level Sprint'].map((prog, i) => (
                    <div key={i} className="flex justify-between items-center border p-4 rounded hover:bg-slate-50">
                       <span className="font-bold text-slate-700">{prog}</span>
                       <Button className="py-2 px-4 text-sm">Book Slot</Button>
                    </div>
                  ))}
               </div>
             </Card>
          )}

          {activeTab === 'cla' && (
             <div className="space-y-6">
                <Card title="Comprehensive Learning Assessment (CLA)">
                  <div className="grid md:grid-cols-2 gap-4">
                     <div className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition cursor-pointer bg-white">
                        <div className="flex justify-between mb-2">
                           <h4 className="font-bold">Basic CLA (Online)</h4>
                           <span className="font-bold text-secondary">$80</span>
                        </div>
                        <ul className="text-sm text-slate-500 space-y-2 mb-4">
                           <li>• 1.5 Hour Session</li>
                           <li>• Academic Gap Analysis</li>
                        </ul>
                        <button className="w-full bg-slate-900 text-white py-2 rounded font-medium flex justify-center items-center text-sm">
                           <CreditCard size={14} className="mr-2" /> Pay & Book Basic
                        </button>
                     </div>
                     <div className="border border-secondary bg-blue-50 rounded-lg p-6 shadow-md cursor-pointer relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-secondary text-white text-[10px] px-2 py-1 font-bold">RECOMMENDED</div>
                        <div className="flex justify-between mb-2">
                           <h4 className="font-bold text-secondary">Full CLA (In-Person)</h4>
                           <span className="font-bold text-secondary">$150</span>
                        </div>
                        <ul className="text-sm text-slate-600 space-y-2 mb-4">
                           <li>• 2 Hour Session</li>
                           <li>• Academic + Behavioral Analysis</li>
                        </ul>
                        <button className="w-full bg-secondary text-white py-2 rounded font-medium flex justify-center items-center text-sm shadow">
                           <CreditCard size={14} className="mr-2" /> Pay & Book Full
                        </button>
                     </div>
                  </div>
                </Card>
             </div>
          )}
        </div>
      </div>
    </Section>
  );
};

// --- TUTOR FLOW COMPONENTS ---

const TutorSignupWizard: React.FC<{ 
  onComplete: (profile: TutorProfile) => void;
  onSwitchToLogin: () => void;
}> = ({ onComplete, onSwitchToLogin }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<TutorProfile>>({ scenarioAnswers: {} });

  const nextStep = () => setStep(step + 1);

  // Demo Profile
  const demoProfile: TutorProfile = {
      name: "Demo Tutor",
      qualification: "NUS Math Degree",
      experienceYears: 5,
      subjects: ["Math", "A-Math"],
      scenarioAnswers: {},
      isManaged: true,
      status: 'active'
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-slate-200 relative">
      <div className="absolute top-4 right-4">
         <button onClick={() => onComplete(demoProfile)} className="text-xs font-bold text-slate-400 hover:text-secondary underline bg-slate-50 px-2 py-1 rounded">
             Skip (Preview Mode)
         </button>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center text-sm font-bold text-slate-400 mb-2">
          <span className={step >= 1 ? "text-secondary" : ""}>1. Info</span>
          <span className={step >= 2 ? "text-secondary" : ""}>2. Character Test</span>
          <span className={step >= 3 ? "text-secondary" : ""}>3. Engagement</span>
          <span className={step >= 4 ? "text-secondary" : ""}>4. Contract</span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-secondary transition-all duration-300" style={{ width: `${(step / 4) * 100}%` }}></div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-primary mb-6">Tutor Application</h2>

      {step === 1 && (
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Personal Details & Qualifications</h3>
          <div><label className="block text-sm font-bold mb-1">Full Name</label><input className="w-full border p-2 rounded" onChange={e => setFormData({...formData, name: e.target.value})} /></div>
          <div><label className="block text-sm font-bold mb-1">Highest Qualification</label><input className="w-full border p-2 rounded" placeholder="e.g. NIE Trained, NUS Degree" onChange={e => setFormData({...formData, qualification: e.target.value})} /></div>
          <div><label className="block text-sm font-bold mb-1">Years of Experience</label><input type="number" className="w-full border p-2 rounded" onChange={e => setFormData({...formData, experienceYears: parseInt(e.target.value)})} /></div>
          <Button onClick={nextStep} className="w-full mt-4">Next: Character Assessment</Button>
          
          <div className="text-center pt-4 mt-4 border-t border-slate-100">
             <p className="text-sm text-slate-600">Already have an account? <button onClick={onSwitchToLogin} className="text-secondary font-bold hover:underline">Log In here</button></p>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="font-bold text-secondary text-sm mb-2 uppercase">Scenario Assessment</h3>
            <p className="text-sm text-slate-600">We use your answers to assess your teaching style and match you with suitable students.</p>
          </div>
          
          {TUTOR_SCENARIO_QUESTIONS.map((q) => (
            <div key={q.id} className="mb-6 border-b border-slate-100 pb-6 last:border-0">
              <p className="font-bold text-slate-800 mb-3">Scenario {q.id}: {q.question}</p>
              <div className="space-y-2">
                {q.options.map((opt, i) => (
                  <label key={i} className="flex items-start space-x-3 p-3 rounded hover:bg-slate-50 cursor-pointer">
                    <input 
                      type="radio" 
                      name={`q-${q.id}`} 
                      className="mt-1"
                      onChange={() => {
                        const answers = formData.scenarioAnswers || {};
                        answers[q.id] = opt;
                        setFormData({...formData, scenarioAnswers: answers});
                      }}
                    />
                    <span className="text-sm text-slate-700">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          <Button onClick={nextStep} className="w-full">Next: Engagement Model</Button>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <h3 className="font-bold text-lg">Select Your Engagement Model</h3>
          <p className="text-sm text-slate-500">Please review the full details on our <Link to="/policies?tab=tutors" className="text-secondary underline" target="_blank">Policies Page (Tutor Section)</Link> before selecting.</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div 
              onClick={() => setFormData({...formData, isManaged: false})}
              className={`p-6 rounded-xl border-2 cursor-pointer transition ${formData.isManaged === false ? 'border-secondary bg-blue-50' : 'border-slate-200 hover:border-blue-300'}`}
            >
              <h4 className="font-bold text-lg mb-2">Referral Model</h4>
              <p className="text-sm text-slate-600 mb-4">Best for independent tutors.</p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li>One-time agency fee (50% of 1st month)</li>
                <li>You manage the client</li>
              </ul>
            </div>
            <div 
              onClick={() => setFormData({...formData, isManaged: true})}
              className={`p-6 rounded-xl border-2 cursor-pointer transition ${formData.isManaged === true ? 'border-secondary bg-blue-50' : 'border-slate-200 hover:border-blue-300'}`}
            >
              <h4 className="font-bold text-lg mb-2">Managed Model</h4>
              <p className="text-sm text-slate-600 mb-4">Best for stability.</p>
              <ul className="text-sm space-y-2 list-disc list-inside">
                <li>Agency handles billing & disputes</li>
                <li>Lesson protection</li>
              </ul>
            </div>
          </div>
          <Button onClick={nextStep} className="w-full mt-4" disabled={formData.isManaged === undefined}>Next: Review Contract</Button>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Tutor Agreement</h3>
          <div className="h-64 overflow-y-auto bg-slate-50 p-4 rounded border border-slate-200 text-xs text-slate-600 font-mono whitespace-pre-wrap">
            {TUTOR_CONTRACT_TEXT}
          </div>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded text-secondary focus:ring-secondary" />
            <span className="text-sm font-bold">I have read and agree to the Terms & Conditions.</span>
          </label>
          <Button onClick={() => onComplete({ ...formData, status: 'pending' } as TutorProfile)} className="w-full">Submit Application</Button>
        </div>
      )}
    </div>
  );
};

export const TutorDashboard: React.FC = () => {
  const [profile, setProfile] = useState<TutorProfile | null>(null);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [activeTab, setActiveTab] = useState('overview');
  const [jobFilter, setJobFilter] = useState('All');
  const [showLogModal, setShowLogModal] = useState(false); // Lesson Log Modal State

  // Demo Profile
  const demoProfile: TutorProfile = {
      name: "Demo Tutor",
      qualification: "NUS Math Degree",
      experienceYears: 5,
      subjects: ["Math", "A-Math"],
      scenarioAnswers: {},
      isManaged: true,
      status: "active"
  };

  if (!profile) {
    return (
      <Section className="min-h-[80vh] flex items-center justify-center">
        {authMode === 'login' ? (
          <LoginScreen 
            title="Tutor Login" 
            onLogin={() => setProfile(demoProfile)} 
            onSwitchToSignup={() => setAuthMode('signup')} 
          />
        ) : (
          <TutorSignupWizard 
            onComplete={setProfile} 
            onSwitchToLogin={() => setAuthMode('login')} 
          />
        )}
      </Section>
    );
  }

  return (
    <Section>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Tutor Portal</h1>
        <div className="text-right">
          <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded text-white ${profile.isManaged ? 'bg-secondary' : 'bg-emerald-600'}`}>
            {profile.isManaged ? 'Managed Tutor' : 'Referral Partner'}
          </span>
          <p className="font-bold text-primary mt-1">{profile.name}</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 flex-shrink-0">
          <nav className="space-y-2">
            <button onClick={() => setActiveTab('overview')} className={`w-full text-left px-4 py-3 rounded-lg font-bold flex items-center ${activeTab === 'overview' ? 'bg-secondary text-white' : 'bg-white text-slate-600'}`}>
              <Briefcase size={16} className="mr-2" /> Overview
            </button>
            <button onClick={() => setActiveTab('students')} className={`w-full text-left px-4 py-3 rounded-lg font-bold flex items-center ${activeTab === 'students' ? 'bg-secondary text-white' : 'bg-white text-slate-600'}`}>
              <User size={16} className="mr-2" /> My Students
            </button>
            <button onClick={() => setActiveTab('jobs')} className={`w-full text-left px-4 py-3 rounded-lg font-bold flex items-center ${activeTab === 'jobs' ? 'bg-secondary text-white' : 'bg-white text-slate-600'}`}>
              <MapPin size={16} className="mr-2" /> Job Board
            </button>
            <button onClick={() => setActiveTab('engagement')} className={`w-full text-left px-4 py-3 rounded-lg font-bold flex items-center ${activeTab === 'engagement' ? 'bg-secondary text-white' : 'bg-white text-slate-600'}`}>
              <FileCheck size={16} className="mr-2" /> My Engagement
            </button>
            <button onClick={() => setActiveTab('resources')} className={`w-full text-left px-4 py-3 rounded-lg font-bold flex items-center ${activeTab === 'resources' ? 'bg-secondary text-white' : 'bg-white text-slate-600'}`}>
              <Download size={16} className="mr-2" /> Teacher's Toolkit
            </button>
            <button onClick={() => setProfile(null)} className="w-full text-left px-4 py-3 rounded-lg font-bold text-red-500 hover:bg-red-50 mt-8">Sign Out</button>
          </nav>
        </div>

        <div className="flex-1">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Earnings Widget */}
              <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                     <div className="flex items-center text-slate-500 text-sm mb-1">
                        <DollarSign size={14} className="mr-1" /> {profile.isManaged ? 'Pending Payout' : 'Agency Fees Owed'}
                     </div>
                     <p className="text-2xl font-bold text-primary">$0.00</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                     <div className="flex items-center text-slate-500 text-sm mb-1">
                        <User size={14} className="mr-1" /> Active Students
                     </div>
                     <p className="text-2xl font-bold text-primary">1</p>
                  </div>
              </div>

              <Card title="Your Profile Analysis">
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                  <h4 className="text-sm font-bold text-secondary uppercase mb-2">AI Teaching Profile</h4>
                  <p className="text-slate-700 leading-relaxed">
                    Based on your scenario responses, you exhibit a <strong>Process-Oriented</strong> and <strong>Empathetic</strong> teaching style. 
                    We are currently prioritizing matching you with students who have flagged "Exam Anxiety" or "Low Confidence" in their profiles.
                  </p>
                </div>
              </Card>
            </div>
          )}
          
          {activeTab === 'students' && (
            <Card title="My Active Students">
              <div className="space-y-4">
                {/* Mock Active Student */}
                <div className="flex justify-between items-start border p-4 rounded-lg bg-white border-slate-200 hover:shadow-sm transition">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center text-secondary font-bold text-sm">JD</div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-800">John Doe</h4>
                      <p className="text-sm text-secondary font-bold">Sec 3 A-Math</p>
                      <div className="text-xs text-slate-500 space-y-1 mt-2">
                        <p className="flex items-center"><Clock size={12} className="mr-1"/> Fridays, 5:00 PM</p>
                        <p className="flex items-center"><MapPin size={12} className="mr-1"/> Tampines St 32</p>
                      </div>
                      <div className="mt-4 flex gap-2">
                         {profile.isManaged && (
                           <Button onClick={() => setShowLogModal(true)} className="py-1 px-3 text-xs h-auto bg-green-600 hover:bg-green-700 shadow-none"><PlusCircle size={12} className="mr-1"/> Log Lesson</Button>
                         )}
                         <Button variant="outline" className="py-1 px-3 text-xs h-auto">View Progress</Button>
                      </div>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide">Active</span>
                </div>
                
                <p className="text-slate-400 text-xs text-center pt-4 italic">Showing 1 active student.</p>
              </div>
            </Card>
          )}
          
          {/* LESSON LOG MODAL */}
          {showLogModal && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
               <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative">
                  <button onClick={() => setShowLogModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
                     <X size={20} />
                  </button>
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center"><FileText className="mr-2 text-secondary"/> Log Lesson</h3>
                  <div className="space-y-4">
                     <div>
                        <label className="block text-sm font-bold mb-1">Student</label>
                        <input className="w-full bg-slate-100 border-0 p-2 rounded text-slate-500" value="John Doe - Sec 3 A-Math" disabled />
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div>
                           <label className="block text-sm font-bold mb-1">Date</label>
                           <input type="date" className="w-full border p-2 rounded" />
                        </div>
                        <div>
                           <label className="block text-sm font-bold mb-1">Duration</label>
                           <select className="w-full border p-2 rounded">
                              <option>1.5 Hours</option>
                              <option>2 Hours</option>
                           </select>
                        </div>
                     </div>
                     <div>
                        <label className="block text-sm font-bold mb-1">Topics Covered</label>
                        <input className="w-full border p-2 rounded" placeholder="e.g. Quadratic Inequalities" />
                     </div>
                     <div>
                        <label className="block text-sm font-bold mb-1">Student Focus (1-5)</label>
                        <div className="flex gap-2">
                           {[1,2,3,4,5].map(n => <button key={n} className="w-8 h-8 rounded-full bg-slate-100 hover:bg-secondary hover:text-white font-bold transition">{n}</button>)}
                        </div>
                     </div>
                     <Button onClick={() => { setShowLogModal(false); alert("Lesson Logged Successfully! Earnings updated."); }} className="w-full mt-4">Submit Log</Button>
                  </div>
               </div>
            </div>
          )}
          
          {activeTab === 'resources' && (
             <Card title="Teacher's Toolkit">
                <p className="text-slate-600 mb-6">Standard templates required for Managed assignments.</p>
                <div className="space-y-4">
                   <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-lg">
                      <div className="flex items-center">
                         <FileText className="text-secondary mr-3" />
                         <div>
                            <p className="font-bold text-slate-800">Lesson Plan Template (Weekly)</p>
                            <p className="text-xs text-slate-500">PDF • 200KB</p>
                         </div>
                      </div>
                      <Button variant="outline" className="px-3 py-1 text-xs">Download</Button>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-lg">
                      <div className="flex items-center">
                         <FileText className="text-secondary mr-3" />
                         <div>
                            <p className="font-bold text-slate-800">Monthly Progress Report</p>
                            <p className="text-xs text-slate-500">PDF • 150KB</p>
                         </div>
                      </div>
                      <Button variant="outline" className="px-3 py-1 text-xs">Download</Button>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-lg">
                      <div className="flex items-center">
                         <FileText className="text-secondary mr-3" />
                         <div>
                            <p className="font-bold text-slate-800">Invoice Template (Referral)</p>
                            <p className="text-xs text-slate-500">Excel • 45KB</p>
                         </div>
                      </div>
                      <Button variant="outline" className="px-3 py-1 text-xs">Download</Button>
                   </div>
                </div>
             </Card>
          )}

          {activeTab === 'engagement' && (
             <Card title={profile.isManaged ? "Managed Plan: Payroll Hub" : "Referral Plan: Commission Status"}>
                {profile.isManaged ? (
                  // MANAGED VIEW
                  <div className="space-y-6">
                     <div className="bg-blue-50 border-l-4 border-secondary p-4 rounded-r">
                        <div className="flex items-start">
                           <Landmark className="text-secondary mr-3 mt-1" />
                           <div>
                              <h4 className="font-bold text-secondary">Managed Status: Active</h4>
                              <p className="text-sm text-slate-600">You are an active partner. Integrated Learnings handles all billing. You receive monthly payouts.</p>
                           </div>
                        </div>
                     </div>
                     
                     <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white border border-slate-200 p-4 rounded-lg">
                           <h5 className="font-bold text-slate-700 mb-2 flex items-center"><Calendar size={14} className="mr-2"/> Next Payout</h5>
                           <p className="text-2xl font-bold text-primary">7th {new Date().toLocaleString('default', { month: 'short' })}</p>
                           <p className="text-xs text-slate-400">Covers lessons from previous month</p>
                        </div>
                        <div className="bg-white border border-slate-200 p-4 rounded-lg">
                           <h5 className="font-bold text-slate-700 mb-2 flex items-center"><Shield size={14} className="mr-2"/> Protection</h5>
                           <p className="font-bold text-green-600 flex items-center"><CheckCircle2 size={16} className="mr-1"/> Active</p>
                           <p className="text-xs text-slate-400">Late cancellation fees covered by Agency</p>
                        </div>
                     </div>
                  </div>
                ) : (
                  // REFERRAL VIEW
                  <div className="space-y-6">
                     <div className="bg-emerald-50 border-l-4 border-emerald-600 p-4 rounded-r">
                        <div className="flex items-start">
                           <User className="text-emerald-700 mr-3 mt-1" />
                           <div>
                              <h4 className="font-bold text-emerald-800">Referral Status: Independent</h4>
                              <p className="text-sm text-slate-600">You collect your own fees starting from Week 3 of any new assignment.</p>
                           </div>
                        </div>
                     </div>

                     <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 font-bold text-sm text-slate-600">Commission Timeline (New Assignment)</div>
                        <div className="p-4 flex items-center justify-between text-center relative">
                           {/* Line */}
                           <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10"></div>
                           
                           <div className="bg-white p-2">
                              <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-xs mx-auto mb-1">W1</div>
                              <p className="text-[10px] font-bold text-slate-400">Agency</p>
                           </div>
                           <div className="bg-white p-2">
                              <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center font-bold text-xs mx-auto mb-1">W2</div>
                              <p className="text-[10px] font-bold text-slate-400">Agency</p>
                           </div>
                           <div className="bg-white p-2">
                              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs mx-auto mb-1 border-2 border-emerald-500">W3</div>
                              <p className="text-[10px] font-bold text-emerald-600">YOU Start</p>
                           </div>
                           <div className="bg-white p-2">
                              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs mx-auto mb-1">W4</div>
                              <p className="text-[10px] font-bold text-emerald-600">YOU</p>
                           </div>
                        </div>
                     </div>
                  </div>
                )}
             </Card>
          )}

          {activeTab === 'jobs' && (
             <Card title="Job Board">
               {/* Filter */}
               <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
                  <Filter size={16} className="text-slate-400" />
                  {['All', 'East', 'West', 'North', 'Central', 'Online'].map(r => (
                     <button 
                        key={r}
                        onClick={() => setJobFilter(r)}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition ${jobFilter === r ? 'bg-secondary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                     >
                        {r}
                     </button>
                  ))}
               </div>

               <div className="space-y-4">
                 {/* Mock Jobs to make platform look active */}
                 {[
                   { level: "Sec 4 G3 (Express)", subject: "Pure Chemistry", loc: "Tampines (East)", region: "East", rate: "$60/hr", status: "Urgent" },
                   { level: "P6 Standard", subject: "Mathematics", loc: "Bishan (Central)", region: "Central", rate: "$50/hr", status: "New" },
                   { level: "JC 1", subject: "H2 Economics", loc: "Online / Zoom", region: "Online", rate: "$75/hr", status: "Open" },
                   { level: "Sec 2 G2 (NA)", subject: "English", loc: "Jurong West", region: "West", rate: "$45/hr", status: "Open" },
                   { level: "P4 Standard", subject: "Science", loc: "Yishun (North)", region: "North", rate: "$40/hr", status: "New" },
                 ].filter(j => jobFilter === 'All' || j.region === jobFilter).map((job, i) => (
                   <div key={i} className="flex justify-between items-center border border-slate-100 p-4 rounded-lg hover:shadow-md transition bg-white">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                           <span className={`text-[10px] font-bold px-2 py-0.5 rounded text-white ${job.status === 'Urgent' ? 'bg-red-500' : 'bg-green-500'}`}>{job.status}</span>
                           <h4 className="font-bold text-slate-800">{job.level} - {job.subject}</h4>
                        </div>
                        <div className="flex items-center text-slate-500 text-xs space-x-3">
                           <span className="flex items-center"><MapPin size={12} className="mr-1" /> {job.loc}</span>
                           <span className="flex items-center"><DollarSign size={12} className="mr-1" /> {job.rate}</span>
                        </div>
                      </div>
                      <Button className="py-2 px-4 text-xs" onClick={() => alert("Application Submitted! Agency will contact you.")}>Apply</Button>
                   </div>
                 ))}
                 
                 {/* Empty State for Filter */}
                 {[
                   { level: "Sec 4 G3 (Express)", subject: "Pure Chemistry", loc: "Tampines (East)", region: "East", rate: "$60/hr", status: "Urgent" },
                   { level: "P6 Standard", subject: "Mathematics", loc: "Bishan (Central)", region: "Central", rate: "$50/hr", status: "New" },
                   { level: "JC 1", subject: "H2 Economics", loc: "Online / Zoom", region: "Online", rate: "$75/hr", status: "Open" },
                   { level: "Sec 2 G2 (NA)", subject: "English", loc: "Jurong West", region: "West", rate: "$45/hr", status: "Open" },
                   { level: "P4 Standard", subject: "Science", loc: "Yishun (North)", region: "North", rate: "$40/hr", status: "New" },
                 ].filter(j => jobFilter === 'All' || j.region === jobFilter).length === 0 && (
                    <div className="text-center py-8 text-slate-400 italic">No jobs found in this region.</div>
                 )}
               </div>
               <p className="text-xs text-slate-400 mt-4 text-center">New jobs are posted daily at 10am.</p>
             </Card>
          )}
        </div>
      </div>
    </Section>
  );
};
