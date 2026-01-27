import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { School, TrendingUp, Users, BookOpen, Award, Target, Brain, DollarSign, PieChart, Briefcase, ShieldAlert, Clock, Lightbulb, GraduationCap, Heart, BarChart3 } from 'lucide-react';

const EnrichmentHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
              <School className="w-5 h-5" />
              <span className="font-semibold">For Schools & Educational Institutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Financial Literacy Enrichment Program
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Evidence-based experiential learning through immersive simulation. 
              Students don't just learn about delayed gratification—they experience its compounding effects.
            </p>
            <p className="text-lg text-green-700 max-w-2xl mx-auto font-semibold mb-8">
              Smart choices now = No regrets later. Life is about happiness.
            </p>
            
            {/* Hero CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://wa.me/6598882675" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-10 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl text-lg flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Schedule a Demo
              </a>
              <a 
                href="mailto:manage.integrated.learnings@gmail.com" 
                className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-4 px-10 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg text-lg"
              >
                Email Us for More Info
              </a>
            </div>
            
            {/* Soft Urgency */}
            <p className="text-sm text-gray-500 mt-6 text-center">
              📅 Now booking demos for <strong className="text-green-700">Term 2 2026</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Program Overview</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Built on principles of experiential learning and behavioral economics, our program uses interactive simulation 
              to teach financial literacy within Singapore's authentic education and career context. Students navigate polytechnic/university 
              pathways, manage student loans, make investment decisions, and track a Happiness Index—visualizing the long-term consequences 
              of today's choices in real time.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-6">
              <p className="text-gray-800 font-medium">
                <strong>Pedagogical Foundation:</strong> Grounded in experiential learning theory (Kolb), behavioral economics 
                (Thaler), and delayed gratification research (Mischel). Students don't memorize concepts—they construct understanding 
                through iterative decision-making and consequence observation.
              </p>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-800 font-medium">
                  <strong>MOE Alignment:</strong> Supports Character & Citizenship Education (CCE), Economic 
                  & Financial Literacy, and 21st Century Competencies (critical thinking, responsible decision-making).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl p-8 md:p-12 border-2 border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">The Science of Delayed Gratification</h2>
            <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto text-lg">
              Decades of psychological research prove that students who develop delayed gratification skills show measurably better outcomes across education, income, and well-being. <strong>This is neuroscience, not motivation.</strong>
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Clock className="w-10 h-10 text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Mischel's Longitudinal Research</h3>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>The Marshmallow Test (1972-2011):</strong> Children able to delay gratification showed:
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Higher SAT scores and educational attainment</li>
                  <li>• Better BMI and health outcomes</li>
                  <li>• Greater life satisfaction at age 30</li>
                  <li><em>(Mischel et al., PNAS 2011)</em></li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Lightbulb className="w-10 h-10 text-indigo-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Experiential Learning Impact</h3>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Kolb's Active Learning Theory:</strong> Students retain information better through:
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Concrete experience (simulation gameplay)</li>
                  <li>• Reflective observation (analyzing choices)</li>
                  <li>• Abstract conceptualization (understanding patterns)</li>
                  <li><em>(Kolb, 1984; extensive meta-analyses confirm)</em></li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <Brain className="w-10 h-10 text-green-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Behavioral Economics Evidence</h3>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Why Financial Mistakes Happen:</strong> Cognitive biases affect all of us:
                </p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Loss aversion (fear overrides logic)</li>
                  <li>• Hyperbolic discounting (prefer immediate rewards)</li>
                  <li>• Overconfidence bias (underestimate risk)</li>
                  <li><em>(Kahneman & Tversky; Thaler, Behavioral Economics)</em></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Life Simulator Game */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Inside the Simulator: Your Life, Your Choices</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Students navigate a realistic simulation of Singapore's education and career landscape, 
              making financial and life decisions that have real in-game consequences.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-purple-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Education Path Choice</h3>
                <p className="text-gray-600 mb-3">
                  Choose your journey: Polytechnic or University? Work part-time while studying? The game simulates real opportunities and constraints of Singapore's education system.
                </p>
                <p className="text-sm text-purple-600 font-semibold">Consequence: Affects future salary and opportunities</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Instruments</h3>
                <p className="text-gray-600 mb-3">
                  Stocks, bonds, REITs—understand different investment vehicles. Take student loans? Invest early? Each decision influences your starting financial position and long-term wealth.
                </p>
                <p className="text-sm text-green-600 font-semibold">Consequence: Debt burden vs. growth opportunity</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Career & Income</h3>
                <p className="text-gray-600 mb-3">
                  Higher education = higher salary potential, but more debt and delayed earning years. Work while studying? Lower income but faster start.
                </p>
                <p className="text-sm text-orange-600 font-semibold">Consequence: Trade-off between security and speed</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-yellow-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Happiness Index</h3>
                <p className="text-gray-600 mb-3">
                  We only live once—the ultimate goal of life is to be happy. Good meals, memorable holidays, peace of mind. 
                  Money can't buy all happiness, but making the right choices at the right time means future happiness with no regrets.
                </p>
                <p className="text-sm text-yellow-600 font-semibold">Consequence: Choose wisely today, enjoy tomorrow</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <ShieldAlert className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Loan Management</h3>
                <p className="text-gray-600 mb-3">
                  Take out study loans? Feel the weight of debt payments. Pay it off early? Less interest, more financial freedom. Ignore it? Watch it grow.
                </p>
                <p className="text-sm text-red-600 font-semibold">Consequence: Debt compounds and grows</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-term Wealth Building</h3>
                <p className="text-gray-600 mb-3">
                  Invest early and watch compound growth. Save aggressively in your 20s and see exponential growth by your 40s. Or spend everything and face financial struggle.
                </p>
                <p className="text-sm text-blue-600 font-semibold">Consequence: Time is your greatest asset</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">School Registration</h3>
              <p className="text-gray-600">
                Schools partner with us and receive unique access codes for their students.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Student Login</h3>
              <p className="text-gray-600">
                Students log in with their access codes and start the interactive simulation game.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Progress Tracking</h3>
              <p className="text-gray-600">
                Teachers access dashboards to monitor student progress, decisions, and learning outcomes.
              </p>
            </div>
          </div>

          {/* Student Login Section */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
            <Users className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Students: Ready to Play?</h3>
            <p className="text-green-100 mb-6 text-lg">
              Enter your school-issued access code to begin your financial literacy journey
            </p>
            <Link to="/enrichment/login">
              <button className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Student Login
              </button>
            </Link>
          </div>

          {/* Teacher Dashboard Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center mt-8">
            <BarChart3 className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Teachers: View Results & Analytics</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Access the teacher dashboard to track student progress, view analytics, and measure learning outcomes
            </p>
            <Link to="/schools/teacher-dashboard">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                Teacher Dashboard
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits for Teachers */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why Teachers Love This Program</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Measurable learning outcomes, rich analytics, and proven pedagogical foundation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-green-500">
                <BookOpen className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Measurable Learning Outcomes</h3>
                <p className="text-gray-600 mb-3">
                  Track student understanding through in-game decisions, not just test scores. Dashboard shows:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Decision-making patterns & critical thinking</li>
                  <li>✓ Understanding of financial consequences</li>
                  <li>✓ Time preference & impulse control development</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-500">
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Behavioral Insights</h3>
                <p className="text-gray-600 mb-3">
                  See exactly which students struggle with:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Impulse spending vs. saving</li>
                  <li>✓ Risk assessment in decision-making</li>
                  <li>✓ Long-term planning vs. short-term thinking</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-purple-500">
                <Brain className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Curriculum Integration</h3>
                <p className="text-gray-600 mb-3">
                  Supports 4 MOE pillars simultaneously:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Character & Citizenship Education (CCE)</li>
                  <li>✓ Economic & Financial Literacy</li>
                  <li>✓ Critical Thinking & Problem-Solving</li>
                  <li>✓ 21st Century Competencies</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-orange-500">
                <Users className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Support</h3>
                <p className="text-gray-600 mb-3">
                  We handle the heavy lifting:
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Simple setup & coordination</li>
                  <li>✓ Real-time student progress dashboards</li>
                  <li>✓ Detailed class analytics & reports</li>
                  <li>✓ On-site facilitation & support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOE Curriculum Alignment */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">MOE Curriculum Alignment</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-green-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Character & Citizenship Education (CCE)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span><strong>Values:</strong> Responsibility, integrity, resilience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span><strong>Social-Emotional Competencies:</strong> Self-awareness, responsible decision-making</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">•</span>
                  <span><strong>Civics & Citizenship:</strong> Understanding consequences of choices on self & society</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">21st Century Competencies</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Critical Thinking:</strong> Analyzing trade-offs, weighing options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Adaptive Thinking:</strong> Responding to in-game scenarios and uncertainties</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span><strong>Global Perspectives:</strong> Understanding Singapore's economic context</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-purple-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Economic & Financial Literacy</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span><strong>Financial Concepts:</strong> Stocks, bonds, REITs, loans, savings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span><strong>Decision-Making:</strong> Managing money, evaluating risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-1">•</span>
                  <span><strong>Real-World Application:</strong> Singapore context (education costs, career paths, property)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-orange-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Life Skills Development</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold mt-1">•</span>
                  <span><strong>Delayed Gratification:</strong> Understanding long-term thinking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold mt-1">•</span>
                  <span><strong>Consequence Awareness:</strong> How choices today impact tomorrow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 font-bold mt-1">•</span>
                  <span><strong>Happiness & Well-being:</strong> Balancing money, time, and life satisfaction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Talk Curriculum */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Expert Talk: Financial Foundations</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Before students play the simulator, they receive expert instruction on real financial concepts. This foundation makes the game decisions meaningful and transformational.
          </p>

          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl p-8 md:p-12 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">Session: Understanding Real Money</h3>
            <p className="text-green-100 mb-6">
              Taught by experienced bankers, financial coaches, and investment professionals. 60-90 minutes of expert insights that students will experience in-game.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Financial Instruments 101</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">📊</span>
                  <span><strong>Stocks & Shares:</strong> What it means to own part of a company, risk vs. reward, long-term wealth building</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">📈</span>
                  <span><strong>Bonds:</strong> Safer investments, how governments & companies borrow, predictable returns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">🏢</span>
                  <span><strong>REITs (Real Estate Investment Trusts):</strong> Investing in property without buying buildings, dividend income</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold flex-shrink-0">🛡️</span>
                  <span><strong>Insurance:</strong> Protection & risk management, why it matters for long-term planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-purple-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Money Mentality: Rich vs. Hot Money</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold flex-shrink-0">💰</span>
                  <span><strong>Rich Money (Sustainable Wealth):</strong> Built through education, hard work, smart investments, patience. Compounds over decades. Creates real freedom.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold flex-shrink-0">🔥</span>
                  <span><strong>Hot Money (Fast Cash):</strong> Get-rich-quick schemes, trading crypto on hype, gambling-like investing. Feels exciting but disappears fast. Creates regret.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-600 font-bold flex-shrink-0">⚖️</span>
                  <span><strong>The Difference:</strong> Rich money = delayed gratification pays off. Hot money = temporary pleasure, lasting pain. Students experience both in the simulator.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-red-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scam Awareness & Red Flags</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0">⚠️</span>
                  <span><strong>"Guaranteed returns":</strong> Real investing has risk. Anyone promising 100% returns is lying.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0">⚠️</span>
                  <span><strong>Pressure to join/invest:</strong> Legitimate investments don't need hard-sell tactics. If it feels pushy, it's probably a scam.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0">⚠️</span>
                  <span><strong>Unregistered brokers/advisors:</strong> Check with MAS (Monetary Authority of Singapore). Real professionals are licensed & regulated.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0">⚠️</span>
                  <span><strong>Promises based on "insider information":</strong> No one can predict markets perfectly. Claims of secret knowledge = scam.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold flex-shrink-0">✅</span>
                  <span><strong>Protection:</strong> Ask questions. Do your research. If something sounds too good, it is. Talk to trusted adults.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-orange-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Delayed Gratification Wins</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold flex-shrink-0">📊</span>
                  <span><strong>Compounding Effect:</strong> Invest $100/month from age 20 vs. age 30 = $100k+ difference by 60. Time is your greatest asset.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold flex-shrink-0">🎯</span>
                  <span><strong>Sacrifice Now = Freedom Later:</strong> Hard years in 20s (studying, saving) = stress-free life in 40s. The trade-off is REAL.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold flex-shrink-0">😊</span>
                  <span><strong>True Happiness:</strong> Money can't buy happiness, but SECURITY does. Delayed gratification = less regret, more peace of mind.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold flex-shrink-0">🧠</span>
                  <span><strong>Neural Pathways:</strong> Every choice to delay spending, every decision to invest = strengthens impulse control. Your brain gets better at delayed gratification.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Flow */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Program Flow Overview</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              A comprehensive session combining expert instruction with hands-on simulation. Duration and timing customized to fit your school's needs.
            </p>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
              
              <div className="space-y-8">
                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 relative z-10">1</div>
                    <div className="bg-white rounded-lg p-6 shadow-md flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome & Session Overview</h3>
                      <p className="text-gray-600">Introduce the day's mission: understanding how smart choices shape futures. Set context for delayed gratification and life satisfaction.</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 relative z-10">2</div>
                    <div className="bg-blue-50 rounded-lg p-6 shadow-md flex-grow border-l-4 border-blue-500">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">🎓 Expert Talk - Financial Foundations</h3>
                      <p className="text-gray-700 mb-3 font-semibold">Conducted by: Experienced bankers, investment professionals, & financial coaches</p>
                      <ul className="text-gray-600 space-y-2 text-sm">
                        <li>• <strong>Financial Instruments:</strong> Stocks, bonds, REITs, shares, insurance (what they are, how they work, why they matter)</li>
                        <li>• <strong>Money Mentality:</strong> Rich money vs. hot money—sustainable wealth vs. get-rich-quick traps</li>
                        <li>• <strong>Scam Awareness:</strong> Red flags, how to protect yourself, why "guaranteed returns" don't exist</li>
                        <li>• <strong>Delayed Gratification:</strong> The power of compounding, sacrifice now = freedom later</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 relative z-10">3</div>
                    <div className="bg-white rounded-lg p-6 shadow-md flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Game Kickoff & Login</h3>
                      <p className="text-gray-600">Brief game orientation. Students log in with access codes and make their first education choice (Polytechnic vs University).</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 relative z-10">4</div>
                    <div className="bg-white rounded-lg p-6 shadow-md flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">🎮 Active Gameplay - Apply What You Learned</h3>
                      <p className="text-gray-600">Students experience everything they just learned. Make investment decisions. Navigate financial choices. Identify scams in-game. Feel the consequences of delayed gratification vs. fast money. Happiness Index tracks well-being in real-time.</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex items-start gap-6">
                    <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold flex-shrink-0 relative z-10">5</div>
                    <div className="bg-white rounded-lg p-6 shadow-md flex-grow">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Reflection & Key Takeaways</h3>
                      <p className="text-gray-600">Group discussion: "What surprised you?" "Did you fall for a scam?" "What regrets do you have?" Connect game lessons to real life. Reinforce: Smart choices now = No regrets later. Life is about happiness.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Game Walkthrough */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">What Students Experience: A Sample Journey</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Meet Alex, a secondary school student playing the financial literacy simulator for the first time.
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-8 border-l-4 border-purple-500 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🎮 Year 1: Education Choice</h3>
              <p className="text-gray-700 mb-3">
                Alex decides: "I'll go to university even though it means 4 years of debt." This choice feels heavy in the moment—high tuition, delayed earnings, loans to manage.
              </p>
              <p className="text-sm text-purple-600 font-semibold">Game Effect: Happiness dips initially, but education-track opens better career options</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-8 border-l-4 border-blue-500 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">📚 Years 2-3: The Struggle</h3>
              <p className="text-gray-700 mb-3">
                Alex works part-time, studies hard, lives frugally. Friends are spending freely, going on holidays, buying stuff. Alex skips those. Happiness is LOW. But debt is manageable, and career momentum builds.
              </p>
              <p className="text-sm text-blue-600 font-semibold">Game Effect: "Sacrifice phase"—short-term unhappiness, long-term foundation</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-8 border-l-4 border-green-500 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">💼 Year 5: Payoff Begins</h3>
              <p className="text-gray-700 mb-3">
                Degree complete. Alex lands a strong job. Salary is 40% higher than the polytechnic-track friends. Alex starts investing early (stocks, bonds), pays off debt aggressively. Happiness SOARS—security, achievement, financial control.
              </p>
              <p className="text-sm text-green-600 font-semibold">Game Effect: "Compounding phase"—delayed gratification + early investments = exponential growth</p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-white rounded-xl p-8 border-l-4 border-orange-500 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🎯 Year 10: The Difference</h3>
              <p className="text-gray-700 mb-3">
                Alex is financially secure. Can afford good meals, nice holidays, help family. More importantly: no regrets. The sacrifice was WORTH IT. Happiness Index at 8/10 because financial stability = real peace of mind.
              </p>
              <p className="text-sm text-orange-600 font-semibold">Game Effect: "Success phase"—money didn't buy happiness, but SMART CHOICES and DELAYED GRATIFICATION did</p>
            </div>

            <div className="bg-red-50 rounded-xl p-8 border-l-4 border-red-500 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">⚠️ The Alternative (What If?)</h3>
              <p className="text-gray-700 mb-3">
                What if Alex had chosen polytechnic to earn money faster? Or worse—spent on fast cash schemes? The game shows the student can instantly rewind and see: lower salary trajectory, less career growth, less happiness despite earlier spending. The moral hits differently when they experience it themselves.
              </p>
              <p className="text-sm text-red-600 font-semibold">Game Effect: Students SEE that regret comes from not thinking long-term</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How long is a typical session?</h3>
                <p className="text-gray-600">
                  We customize the session duration and format to fit your school's needs and schedule. Whether you have a morning slot, afternoon period, or full enrichment day—we'll tailor the program accordingly.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What technical setup is required?</h3>
                <p className="text-gray-600">
                  Students use their Personal Learning Devices (PLDs). Stable internet connection required. No complex software installation needed—students simply log in via browser.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How do we measure learning outcomes?</h3>
                <p className="text-gray-600">
                  Pre- and post-session reflections capture student thinking about delayed gratification, money management, and life choices. In-game decisions reveal critical thinking patterns. Post-session discussion shows real behavior shift. Teachers receive a summary report.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What's the cost?</h3>
                <p className="text-gray-600">
                  We offer flexible pricing based on school size and session length. Email us at manage.integrated.learnings@gmail.com to discuss options and get a customized quote for your school.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Your Students' Financial Futures</h2>
          <p className="text-lg text-gray-600 mb-3">
            Evidence-based pedagogy. Measurable outcomes. MOE-aligned curriculum.
          </p>
          <p className="text-gray-600 mb-8">
            Join leading Singapore schools preparing students to make smarter choices, delay gratification, and build lasting happiness.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/6598882675" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Schedule a Demo
            </a>
            <a 
              href="mailto:manage.integrated.learnings@gmail.com" 
              className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Email Us for More Info
            </a>
            <button 
              className="bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              onClick={() => window.open('/enrichment-brochure.pdf', '_blank')}
            >
              Download Program Guide
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            <strong>MOE-Aligned</strong> | Research-Backed Pedagogy | Comprehensive Teacher Support
          </p>
        </div>
      </section>
    </div>
  );
};

export default EnrichmentHome;
