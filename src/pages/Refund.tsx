
import React from 'react';
import GlassContainer from '../components/GlassContainer';

const Refund: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-12 text-[#001F3F] tracking-tight">
            Refund Policy
          </h1>

          <GlassContainer className="p-10 space-y-10 bg-white bg-opacity-80 border border-[#00264D]/60 rounded-xl shadow-lg">
            {[
              {
                title: "1. Refund Eligibility",
                content:
                  "We offer a 30-day money-back guarantee on our services under the following conditions:",
                list: [
                  "Service was not delivered as described",
                  "Technical issues prevented service delivery",
                  "Order was accidentally duplicated",
                  "Service is no longer needed (subject to review)",
                ],
              },
              {
                title: "2. Refund Process",
                content: "To request a refund:",
                list: [
                  "Contact our support team within 30 days of purchase",
                  "Provide your order number and reason for refund",
                  "Allow up to 5-7 business days for review",
                  "Approved refunds are processed within 3-5 business days",
                ],
              },
              {
                title: "3. Non-Refundable Items",
                content: "The following are not eligible for refunds:",
                list: [
                  "Services that have been fully delivered",
                  "Custom or personalized orders",
                  "Services used in violation of our terms",
                  "Purchases older than 30 days",
                ],
              },
              {
                title: "4. Refund Methods",
                content:
                  "Refunds are processed to the original payment method used for the purchase. Processing times may vary depending on your payment provider.",
              },
              {
                title: "5. Partial Refunds",
                content: "In some cases, we may issue partial refunds if:",
                list: [
                  "Service was partially delivered",
                  "Quality issues affected only part of the service",
                  "Alternative resolution is agreed upon",
                ],
              },
              {
                title: "6. Contact Information",
                content:
                  "For refund requests or questions about our refund policy, please contact our support team at support@engagesphere.com.",
              },
            ].map(({ title, content, list }, idx) => (
              <section key={idx}>
                <h2 className="text-2xl font-semibold mb-4 text-[#003366] border-b-2 border-[#001F3F] pb-2">
                  {title}
                </h2>
                <p className="text-[#334155] leading-relaxed text-base">{content}</p>
                {list && (
                  <ul className="list-disc list-inside text-[#334155] space-y-2 mt-2">
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

export default Refund;
