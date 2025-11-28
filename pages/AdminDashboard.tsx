
import React, { useState, useEffect } from 'react';
import { Section, Button, Card } from '../components/Components';
import { api } from '../services/api';
import { StudentProfile, TutorProfile, TutorRequest } from '../types';
import { Users, FileText, CheckCircle, XCircle, Search, ShieldAlert } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState('requests');
  
  const [requests, setRequests] = useState<TutorRequest[]>([]);
  const [tutors, setTutors] = useState<TutorProfile[]>([]);
  const [students, setStudents] = useState<StudentProfile[]>([]);

  useEffect(() => {
    if (isAuth) {
      loadData();
    }
  }, [isAuth]);

  const loadData = async () => {
    setRequests(await api.admin.getAllRequests());
    setTutors(await api.admin.getAllTutors());
    setStudents(await api.admin.getAllStudents());
  };

  const handleLogin = async () => {
    if (await api.auth.loginAdmin(password)) {
      setIsAuth(true);
    } else {
      alert("Invalid Admin Password");
    }
  };

  if (!isAuth) {
    return (
      <Section className="min-h-[60vh] flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 max-w-sm w-full text-center">
          <ShieldAlert size={48} className="mx-auto text-red-500 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Admin Access</h2>
          <input 
            type="password" 
            className="w-full border p-2 rounded mb-4" 
            placeholder="Enter Admin Key (admin123)" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} className="w-full">Unlock Dashboard</Button>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Admin Control Center</h1>
        <div className="space-x-4">
           <span className="text-sm text-slate-500">Database Status: <span className="text-green-600 font-bold">Online</span></span>
           <Button variant="outline" onClick={() => setIsAuth(false)} className="py-1 px-3 text-xs h-auto">Logout</Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 space-y-2">
          <button onClick={() => setActiveTab('requests')} className={`w-full text-left px-4 py-3 rounded font-bold flex justify-between ${activeTab === 'requests' ? 'bg-slate-800 text-white' : 'bg-white'}`}>
             Requests <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">{requests.length}</span>
          </button>
          <button onClick={() => setActiveTab('tutors')} className={`w-full text-left px-4 py-3 rounded font-bold ${activeTab === 'tutors' ? 'bg-slate-800 text-white' : 'bg-white'}`}>
             Tutors
          </button>
          <button onClick={() => setActiveTab('students')} className={`w-full text-left px-4 py-3 rounded font-bold ${activeTab === 'students' ? 'bg-slate-800 text-white' : 'bg-white'}`}>
             Students
          </button>
        </div>

        {/* Content */}
        <div className="flex-1">
          {activeTab === 'requests' && (
            <Card title="Incoming Match Requests">
              <div className="space-y-4">
                {requests.map(req => (
                  <div key={req.id} className="border p-4 rounded-lg bg-white flex justify-between items-center shadow-sm">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-bold px-2 rounded text-white ${req.urgency === 'Urgent' ? 'bg-red-500' : 'bg-blue-500'}`}>{req.urgency}</span>
                        <span className="font-bold text-slate-800">{req.studentName} ({req.level})</span>
                      </div>
                      <p className="text-sm text-slate-600">Subject: {req.subject} | Budget: {req.budget}</p>
                      <p className="text-xs text-slate-400 mt-1">ID: {req.id}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button className="py-1 px-3 text-xs h-auto bg-purple-600 hover:bg-purple-700" onClick={() => api.ai.runMatch(req.id).then(res => alert(`AI Recommendation:\n${res.recommendedTutors[0].name} (Score: ${res.recommendedTutors[0].matchScore})\nReason: ${res.matchReason}`))}>Run AI Match</Button>
                      <div className="flex gap-2">
                        <button className="p-2 bg-green-100 text-green-700 rounded hover:bg-green-200"><CheckCircle size={16}/></button>
                        <button className="p-2 bg-red-100 text-red-700 rounded hover:bg-red-200"><XCircle size={16}/></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {activeTab === 'tutors' && (
            <Card title="Registered Tutors">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 border-b">
                    <tr>
                      <th className="p-3">Name</th>
                      <th className="p-3">Qual.</th>
                      <th className="p-3">Type</th>
                      <th className="p-3">Score</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tutors.map(t => (
                      <tr key={t.id} className="border-b hover:bg-slate-50">
                        <td className="p-3 font-bold">{t.name}</td>
                        <td className="p-3">{t.qualification}</td>
                        <td className="p-3">{t.isManaged ? 'Managed' : 'Referral'}</td>
                        <td className="p-3 text-green-600 font-bold">{t.matchScore || '-'}</td>
                        <td className="p-3"><span className={`px-2 py-1 rounded-full text-xs font-bold ${t.status === 'verified' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>{t.status}</span></td>
                        <td className="p-3">
                          {t.status !== 'verified' && <button className="text-blue-600 hover:underline" onClick={() => api.admin.verifyTutor(t.id || '').then(() => loadData())}>Verify</button>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}
        </div>
      </div>
    </Section>
  );
};
