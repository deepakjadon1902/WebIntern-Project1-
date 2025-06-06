
import React from 'react';
import GlassContainer from '../components/GlassContainer';
import { Link } from 'react-router-dom';

const FAQPage: React.FC = () => {
  const faqSections = [
    {
      title: "General Questions",
      questions: [
        {
          q: "What is EngageSphere?",
          a: "EngageSphere is a premium social media growth service that helps individuals and businesses increase their online presence through authentic engagement methods."
        },
        {
          q: "Is EngageSphere safe to use?",
          a: "Yes, we use only safe and compliant methods that adhere to each platform's terms of service. We never require passwords and protect your account security."
        },
        {
          q: "How long does it take to see results?",
          a: "Most services begin showing results within 24-48 hours, with full delivery depending on your package size and platform."
        }
      ]
    },
    {
      title: "Services & Pricing",
      questions: [
        {
          q: "What services do you offer?",
          a: "We offer growth services for major social platforms including YouTube, Instagram, X, Threads, Telegram, LinkedIn, Spotify, and Facebook."
        },
        {
          q: "How do you calculate pricing?",
          a: "Our pricing is based on service type, quantity, and delivery speed. We offer different packages to suit various needs and budgets."
        },
        {
          q: "Do you offer custom packages?",
          a: "Yes, we can create custom packages for specific needs. Contact our support team to discuss custom solutions."
        }
      ]
    },
    {
      title: "Payment & Refunds",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, PayPal, and various other payment methods. All payments are processed securely."
        },
        {
          q: "Do you offer refunds?",
          a: "Yes, we offer a 30-day money-back guarantee if we're unable to deliver services as promised. See our Refund Policy for details."
        },
        {
          q: "Are there any hidden fees?",
          a: "No, all our prices are transparent with no hidden fees. The price you see is the price you pay."
        }
      ]
    },
    {
      title: "Account & Security",
      questions: [
        {
          q: "Do you need my password?",
          a: "No, we never require your account passwords. We only need your username or profile URL to deliver our services."
        },
        {
          q: "How do you protect my information?",
          a: "We use industry-standard security measures to protect your data. See our Privacy Policy for detailed information."
        },
        {
          q: "Can I cancel my service?",
          a: "Yes, you can cancel any ongoing service at any time. Contact our support team for assistance."
        }
      ]
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-12 text-[#001F3F] tracking-tight">
            Frequently Asked Questions
          </h1>
          
          {faqSections.map((section, index) => (
            <section key={index} className="mb-10">
              <h2 className="text-2xl font-semibold mb-6 text-[#003366] border-b-2 border-[#001F3F] pb-2">
                {section.title}
              </h2>
              <div className="space-y-6">
                {section.questions.map((item, qIndex) => (
                  <GlassContainer
                    key={qIndex}
                    className="p-6 bg-white bg-opacity-80 border border-[#00264D]/60 rounded-xl shadow-md"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-[#001F3F]">
                      {item.q}
                    </h3>
                    <p className="text-[#334155] leading-relaxed">{item.a}</p>
                  </GlassContainer>
                ))}
              </div>
            </section>
          ))}

          <GlassContainer
            className="p-8 text-center mt-16 bg-white bg-opacity-80 border border-[#00264D]/60 rounded-xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-4 text-[#003366]">
              Still Have Questions?
            </h2>
            <p className="text-[#334155] mb-8 leading-relaxed max-w-xl mx-auto">
              Our support team is available 24/7 to help you with any questions or concerns.
            </p>
            <Link to="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-3 rounded-lg font-medium transition-all hover:shadow-lg">
                Contact Support
              </button>
            </Link>
          </GlassContainer>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
