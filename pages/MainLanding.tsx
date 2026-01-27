import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, School, ArrowRight, BookOpen, Users, TrendingUp, ShieldCheck, Target } from 'lucide-react';

const MainLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Integrated Learnings · Singapore
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nurturing potential in every learner
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            We are professional educators committed to developing confident, capable students. 
            Through personalized tuition and innovative school programs, we unlock learning potential 
            and prepare the next generation for success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/tuition" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition">
              <ArrowRight className="w-5 h-5 rotate-180" />
              Parents
            </Link>
            <Link to="/schools" className="inline-flex items-center justify-center gap-2 bg-white border border-green-600 text-green-700 hover:bg-green-50 font-semibold px-6 py-3 rounded-lg transition">
              Schools
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Company Motto */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Learn well. Choose wisely. Grow confidently.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              As professional educators, we serve families and schools with equal dedication. 
              Our approach is grounded in Singapore's education landscape, built on integrity, and focused on 
              developing each student's unique potential—one learner at a time.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>Professional Educators</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Singapore-Focused</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                <span>Student-Centered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our educational philosophy</h2>
            <p className="text-lg text-gray-600">
              Built on professional integrity, local expertise, and a commitment to nurturing every student's potential
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <ShieldCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Professional Integrity</h3>
              <p className="text-sm text-gray-600">
                Rigorous educator verification, MOE curriculum alignment, and transparent partnerships with families and schools.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Student-Centered Approach</h3>
              <p className="text-sm text-gray-600">
                Every learning journey is unique. We adapt to individual needs, set meaningful goals, and measure real progress.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Local Education Expertise</h3>
              <p className="text-sm text-gray-600">
                Deep understanding of Singapore's education system, curriculum demands, and what it takes to help students thrive here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-4">Partner with us in education</h2>
          <p className="text-lg text-gray-300 mb-8">Whether you're a parent or school leader, let's discuss how we can support your students' growth and success.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@integratedlearnings.com.sg" className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainLanding;
