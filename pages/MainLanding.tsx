import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const MainLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      {/* Main Section - Two Buttons */}
      <section className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-5xl w-full">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-16 text-center">
            Integrated Learnings
          </h1>
          
          {/* Two Buttons */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Parents Button */}
            <Link to="/tuition">
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-12 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group">
                <div className="flex items-center justify-between">
                  <ArrowLeft className="w-8 h-8 group-hover:-translate-x-2 transition-transform" />
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-2">Parents</h2>
                    <p className="text-blue-100">Tuition Services</p>
                  </div>
                </div>
              </button>
            </Link>

            {/* Schools Button */}
            <Link to="/enrichment">
              <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-12 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-2">Schools</h2>
                    <p className="text-green-100">Enrichment Programs</p>
                  </div>
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Vision & Mission */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
            <div className="space-y-8">
              {/* Vision */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be Singapore's most trusted educational partner, empowering every student to achieve academic excellence and develop lifelong learning skills.
                </p>
              </div>

              {/* Mission */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We provide innovative, personalized learning solutions that address the unique needs of each student. 
                  From one-to-one tuition with verified educators to interactive financial literacy programs for schools, 
                  we're committed to excellence in education and preparing students for success in school and in life.
                </p>
              </div>

              {/* Values */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <ul className="text-lg text-gray-700 leading-relaxed space-y-2">
                  <li>• <strong>Excellence:</strong> We strive for the highest quality in every educational experience</li>
                  <li>• <strong>Integrity:</strong> We build trust through transparency and accountability</li>
                  <li>• <strong>Innovation:</strong> We embrace new approaches to enhance learning outcomes</li>
                  <li>• <strong>Student-Centered:</strong> Every decision is made with the student's best interest in mind</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainLanding;
          
          {/* Tuition Service Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
              <GraduationCap className="w-16 h-16 mb-4" />
