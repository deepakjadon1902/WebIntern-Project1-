
import React from 'react';
import GlassContainer from '../components/GlassContainer';
import { Users, Award, Globe, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-28 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide text-[#001F3F]">
            About EngageSphere
          </h1>
          <p className="text-[#003366] text-lg font-semibold">
            Empowering creators and businesses to reach their full potential through authentic social media growth.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <GlassContainer className="p-8 md:p-12 bg-white bg-opacity-80 border border-[#00264D]/50 shadow-lg rounded-lg">
            <h2 className="text-2xl font-extrabold mb-6 text-[#001F3F] tracking-wide">Our Story</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded in 2023, EngageSphere emerged from a simple observation: genuine social media growth shouldn't be complicated or risky. Our founders, having experienced the challenges of building online presence firsthand, set out to create a service that would provide authentic engagement while maintaining the highest standards of safety and quality.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we're proud to serve thousands of clients worldwide, from emerging content creators to established brands, helping them achieve their social media goals through legitimate and effective growth strategies.
            </p>
          </GlassContainer>
        </section>

        {/* Mission & Values */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            <GlassContainer className="p-8 bg-white bg-opacity-80 border border-[#00264D]/50 shadow-lg rounded-lg">
              <h2 className="text-2xl font-extrabold mb-6 text-[#001F3F] tracking-wide">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To democratize social media success by providing accessible, authentic, and effective growth solutions that empower creators and businesses to reach their full potential in the digital space.
              </p>
            </GlassContainer>
            
            <GlassContainer className="p-8 bg-white bg-opacity-80 border border-[#00264D]/50 shadow-lg rounded-lg">
              <h2 className="text-2xl font-extrabold mb-6 text-[#001F3F] tracking-wide">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To become the world's most trusted partner in social media growth, setting the industry standard for authenticity, transparency, and results.
              </p>
            </GlassContainer>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-extrabold mb-8 text-[#001F3F] tracking-wide">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users className="h-8 w-8 text-[#004080]" />, title: "Authenticity", desc: "We believe in real engagement from real users, never compromising on quality." },
              { icon: <Award className="h-8 w-8 text-[#004080]" />, title: "Excellence", desc: "We strive for excellence in every interaction and service we provide." },
              { icon: <Globe className="h-8 w-8 text-[#004080]" />, title: "Innovation", desc: "We continuously evolve our services to stay ahead of platform changes." },
              { icon: <Zap className="h-8 w-8 text-[#004080]" />, title: "Integrity", desc: "We maintain the highest standards of honesty and transparency." },
            ].map(({ icon, title, desc }, idx) => (
              <GlassContainer
                key={idx}
                className="p-6 text-center bg-white bg-opacity-70 border border-[#00264D]/30 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-[#cfe3f9] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#001F3F]">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </GlassContainer>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <GlassContainer className="p-8 md:p-12 text-center bg-white bg-opacity-80 border border-[#00264D]/50 rounded-lg shadow-lg">
            <h2 className="text-2xl font-extrabold mb-8 text-[#001F3F] tracking-wide">Our Global Team</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
              With team members across multiple continents, we bring diverse perspectives and expertise to deliver exceptional service 24/7.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[#003366]">
              <div>
                <p className="text-4xl font-extrabold mb-2">50+</p>
                <p className="text-[#004080]">Team Members</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold mb-2">20+</p>
                <p className="text-[#004080]">Countries</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold mb-2">24/7</p>
                <p className="text-[#004080]">Support</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold mb-2">100K+</p>
                <p className="text-[#004080]">Happy Clients</p>
              </div>
            </div>
          </GlassContainer>
        </section>
      </div>
    </div>
  );
};

export default About;
