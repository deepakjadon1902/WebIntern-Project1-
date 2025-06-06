import React from 'react';
import GlassContainer from '../components/GlassContainer';
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      location: "Remote",
      type: "Full-time",
      salary: "$120K - $180K",
      department: "Engineering",
      description: "We're looking for an experienced Full Stack Developer to help build and scale our platform."
    },
    {
      title: "Social Media Strategist",
      location: "New York, NY",
      type: "Full-time",
      salary: "$70K - $90K",
      department: "Marketing",
      description: "Join our team to develop and execute social media strategies for our clients."
    },
    {
      title: "Customer Success Manager",
      location: "Remote",
      type: "Full-time",
      salary: "$60K - $80K",
      department: "Customer Support",
      description: "Help our clients achieve their social media goals through exceptional support and guidance."
    },
    {
      title: "UI/UX Designer",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$90K - $130K",
      department: "Design",
      description: "Create beautiful and intuitive user experiences for our platform and marketing materials."
    }
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-lg text-slate-600">
            Help us shape the future of social media growth. We're always looking for talented individuals to join our mission.
          </p>
        </div>

        {/* Why Join Us */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Why Join EngageSphere?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GlassContainer className="p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Competitive Pay</h3>
              <p className="text-slate-600">
                We offer top-market salaries and comprehensive benefits packages.
              </p>
            </GlassContainer>

            <GlassContainer className="p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Hours</h3>
              <p className="text-slate-600">
                Work when you're most productive with our flexible scheduling.
              </p>
            </GlassContainer>

            <GlassContainer className="p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Remote First</h3>
              <p className="text-slate-600">
                Work from anywhere in the world with our remote-first culture.
              </p>
            </GlassContainer>

            <GlassContainer className="p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Growth Opportunities</h3>
              <p className="text-slate-600">
                Continuous learning and career advancement opportunities.
              </p>
            </GlassContainer>
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <GlassContainer key={index} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <span className="text-sm font-medium text-blue-600">{position.department}</span>
                    <h3 className="text-xl font-bold mt-1 mb-2">{position.title}</h3>
                    <p className="text-slate-600 mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {position.salary}
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 rounded-lg font-medium transition-all hover:shadow-lg">
                    Apply Now
                  </button>
                </div>
              </GlassContainer>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Benefits & Perks</h2>
          <GlassContainer className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="font-bold mb-2">Health & Wellness</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Comprehensive health insurance</li>
                  <li>• Dental and vision coverage</li>
                  <li>• Mental health support</li>
                  <li>• Wellness program stipend</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Time Off</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Unlimited PTO</li>
                  <li>• Paid holidays</li>
                  <li>• Paid parental leave</li>
                  <li>• Sabbatical program</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-2">Growth</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Learning & development budget</li>
                  <li>• Conference attendance</li>
                  <li>• Mentorship program</li>
                  <li>• Career coaching</li>
                </ul>
              </div>
            </div>
          </GlassContainer>
        </section>

        {/* Application CTA */}
        <GlassContainer className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Don't See the Right Fit?</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute to EngageSphere's mission.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-all hover:shadow-lg">
            Submit General Application
          </button>
        </GlassContainer>
      </div>
    </div>
  );
};

export default Careers;