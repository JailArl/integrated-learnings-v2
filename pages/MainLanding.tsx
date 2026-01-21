import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, School, ArrowRight, BookOpen, Users, TrendingUp, Award } from 'lucide-react';

const MainLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Integrated Learnings
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            Comprehensive Educational Solutions for Singapore
          </p>
          
          {/* Company Mission */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide innovative learning solutions that empower students to achieve their full potential. 
              From personalized tuition services to interactive school enrichment programs, 
              we're committed to excellence in education.
            </p>
          </div>
        </div>
      </section>

      {/* Two Service Cards */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Tuition Service Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
              <GraduationCap className="w-16 h-16 mb-4" />
              <h2 className="text-3xl font-bold mb-2">Tuition Services</h2>
              <p className="text-blue-100">For Parents & Students</p>
            </div>
            
            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg">
                Premium one-to-one home tuition with verified tutors. 
                Personalized learning plans tailored to your child's needs.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">All Subjects & Levels</h3>
                    <p className="text-gray-600 text-sm">Primary, Secondary, JC/IB</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Verified Tutors</h3>
                    <p className="text-gray-600 text-sm">MOE-trained & NIE graduates</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Proven Results</h3>
                    <p className="text-gray-600 text-sm">Average 2-grade improvement</p>
                  </div>
                </div>
              </div>
              
              <Link to="/tuition">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 group">
                  Explore Tuition Services
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>

          {/* School Enrichment Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 text-white">
              <School className="w-16 h-16 mb-4" />
              <h2 className="text-3xl font-bold mb-2">School Enrichment</h2>
              <p className="text-green-100">For Educational Institutions</p>
            </div>
            
            <div className="p-8">
              <p className="text-gray-700 mb-6 text-lg">
                Interactive financial literacy program teaching students to make informed decisions 
                through engaging simulation games.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Financial Literacy</h3>
                    <p className="text-gray-600 text-sm">Stocks, bonds, REITs & more</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Interactive Simulation</h3>
                    <p className="text-gray-600 text-sm">Game-based learning experience</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-World Skills</h3>
                    <p className="text-gray-600 text-sm">Decision-making & life choices</p>
                  </div>
                </div>
              </div>
              
              <Link to="/enrichment">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 group">
                  Explore Enrichment Program
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
          
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Integrated Learnings</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We are a Singapore-based educational company dedicated to providing comprehensive learning solutions. 
              Our mission is to empower students with the knowledge and skills they need to succeed in school and in life.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-gray-600">Students Tutored</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <p className="text-gray-600">Partner Schools</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions? We're here to help you find the right educational solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@integratedlearnings.com.sg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Contact Us
            </a>
            <a 
              href="tel:+6512345678" 
              className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainLanding;
