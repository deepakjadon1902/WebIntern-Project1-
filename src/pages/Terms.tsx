
import React from 'react';
import GlassContainer from '../components/GlassContainer';

const Terms: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-12 text-[#001F3F] tracking-tight">
            Terms of Service
          </h1>

          <GlassContainer className="p-10 space-y-10 bg-white bg-opacity-80 border border-[#00264D]/60 rounded-xl shadow-lg">
            
            {[
              {
                title: "1. Acceptance of Terms",
                content:
                  "By accessing and using EngageSphere's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.",
              },
              {
                title: "2. Service Description",
                content:
                  "EngageSphere provides social media growth services across various platforms. Our services are designed to help increase your social media presence through authentic engagement methods.",
              },
              {
                title: "3. User Obligations",
                list: [
                  "You must be at least 18 years old to use our services",
                  "You must provide accurate and complete information when using our services",
                  "You are responsible for maintaining the security of your account",
                  "You agree not to use our services for any illegal or unauthorized purpose",
                ],
              },
              {
                title: "4. Payment Terms",
                content:
                  "All payments are processed securely through our payment providers. Prices are subject to change with notice. Refunds are handled according to our Refund Policy.",
              },
              {
                title: "5. Service Delivery",
                content:
                  "We strive to deliver our services within the specified timeframes. However, delivery times may vary based on order size and platform conditions.",
              },
              {
                title: "6. Limitation of Liability",
                content:
                  "EngageSphere is not liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.",
              },
              {
                title: "7. Changes to Terms",
                content:
                  "We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.",
              },
              {
                title: "8. Contact Information",
                content:
                  "For questions about these Terms of Service, please contact us at legal@engagesphere.com.",
              },
            ].map(({ title, content, list }, idx) => (
              <section key={idx}>
                <h2 className="text-2xl font-semibold mb-4 text-[#003366] border-b-2 border-[#001F3F] pb-2">
                  {title}
                </h2>
                {content && (
                  <p className="text-[#334155] leading-relaxed text-base">{content}</p>
                )}
                {list && (
                  <ul className="list-disc list-inside text-[#334155] space-y-2">
                    {list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </GlassContainer>
        </div>
      </div>
    </div>
  );
};

export default Terms;
