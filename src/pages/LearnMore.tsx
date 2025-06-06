
import React from 'react';
import { Link } from 'react-router-dom';
import GlassContainer from '../components/GlassContainer';
import { CheckCircle, ArrowRight, Shield, Clock, Users, Zap } from 'lucide-react';

const LearnMore: React.FC = () => {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#1a2a6c] text-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Hero Section */}
        <GlassContainer className="rounded-2xl shadow-lg border border-gray-300 bg-white p-12 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 mb-20 max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-black">
            How EngageSphere Works
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-black">
            Learn how our real and organic social media growth services can help you achieve your goals and expand your online presence.
          </p>
        </GlassContainer>

        {/* How It Works */}
        <section className="mb-20">
          <GlassContainer className="rounded-2xl shadow-lg border border-gray-300 bg-white p-12 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-black">
            <h2 className="text-3xl font-semibold text-center mb-12 tracking-wide">
              Simple 3-Step Process
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: <Users className="h-10 w-10 text-yellow-600" />,
                  title: '1. Choose Your Service',
                  desc: 'Select your desired platform and growth package that matches your goals.',
                },
                {
                  icon: <Shield className="h-10 w-10 text-green-600" />,
                  title: '2. Secure Payment',
                  desc: 'Complete your order with our secure payment system. No password required.',
                },
                {
                  icon: <Zap className="h-10 w-10 text-pink-600" />,
                  title: '3. Watch Your Growth',
                  desc: 'See real results as we deliver your order with our proven methods.',
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="text-center transition-all hover:-translate-y-1 hover:scale-105 duration-300"
                >
                  <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-lg">{step.desc}</p>
                </div>
              ))}
            </div>
          </GlassContainer>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-10 text-center tracking-wide text-white">
            Why Choose EngageSphere?
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                icon: <CheckCircle className="h-7 w-7 text-cyan-600" />,
                title: '100% Safe & Secure',
                desc: 'Our methods comply with all platform guidelines and terms of service. Your account safety is our top priority.',
              },
              {
                icon: <Users className="h-7 w-7 text-yellow-600" />,
                title: 'Real Engagement',
                desc: 'All engagement comes from real, active accounts. No bots or fake profiles.',
              },
              {
                icon: <Clock className="h-7 w-7 text-pink-600" />,
                title: 'Fast Delivery',
                desc: 'See results within 24-48 hours with our efficient delivery system.',
              },
              {
                icon: <Shield className="h-7 w-7 text-green-600" />,
                title: 'Money-Back Guarantee',
                desc: '30-day satisfaction guarantee ensures your investment is protected.',
              },
            ].map((item, index) => (
              <GlassContainer
                key={index}
                className="rounded-2xl shadow-lg border border-gray-300 bg-white p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-black"
              >
                <div className="flex items-start">
                  <div className="mr-5 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-lg">{item.desc}</p>
                  </div>
                </div>
              </GlassContainer>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <GlassContainer className="rounded-2xl shadow-lg border border-gray-300 bg-white p-12 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-black">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tight">
              Ready to Start Growing?
            </h1>
            <p className="mb-8 max-w-xl mx-auto leading-relaxed text-black text-xl">
              Join thousands of satisfied customers who have transformed their online presence with EngageSphere.
            </p>
            <div className="flex justify-center">
              <Link
                to="/auth"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-lg"
              >
                Get Started Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </div>
          </GlassContainer>
        </section>
      </div>
    </div>
  );
};

export default LearnMore;
