// import React from 'react';
// import GlassContainer from '../components/GlassContainer';

// const Privacy: React.FC = () => {
//   return (
//     <div className="pt-28 pb-16">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
//           <GlassContainer className="p-8 space-y-6">
//             <section>
//               <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
//               <p className="text-slate-600">
//                 We collect information that you provide directly to us, including:
//               </p>
//               <ul className="list-disc pl-6 text-slate-600 mt-2 space-y-2">
//                 <li>Account information (name, email, social media handles)</li>
//                 <li>Payment information (processed securely by our payment providers)</li>
//                 <li>Communication preferences</li>
//                 <li>Service usage information</li>
//               </ul>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
//               <p className="text-slate-600">
//                 We use the collected information to:
//               </p>
//               <ul className="list-disc pl-6 text-slate-600 mt-2 space-y-2">
//                 <li>Provide and improve our services</li>
//                 <li>Process your payments</li>
//                 <li>Send you updates and marketing communications</li>
//                 <li>Respond to your inquiries</li>
//                 <li>Ensure compliance with our terms</li>
//               </ul>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
//               <p className="text-slate-600">
//                 We do not sell your personal information. We may share your information with:
//               </p>
//               <ul className="list-disc pl-6 text-slate-600 mt-2 space-y-2">
//                 <li>Service providers who assist in our operations</li>
//                 <li>Legal authorities when required by law</li>
//                 <li>Business partners with your consent</li>
//               </ul>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
//               <p className="text-slate-600">
//                 We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
//               <p className="text-slate-600">
//                 You have the right to:
//               </p>
//               <ul className="list-disc pl-6 text-slate-600 mt-2 space-y-2">
//                 <li>Access your personal information</li>
//                 <li>Correct inaccurate information</li>
//                 <li>Request deletion of your information</li>
//                 <li>Opt-out of marketing communications</li>
//               </ul>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
//               <p className="text-slate-600">
//                 We use cookies and similar technologies to enhance your experience on our website. You can control cookie preferences through your browser settings.
//               </p>
//             </section>

//             <section>
//               <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
//               <p className="text-slate-600">
//                 For privacy-related inquiries, please contact our Data Protection Officer at privacy@engagesphere.com.
//               </p>
//             </section>
//           </GlassContainer>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Privacy;


import React from 'react';
import GlassContainer from '../components/GlassContainer';

const Privacy: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-12 text-[#001F3F] tracking-tight">
            Privacy Policy
          </h1>

          <GlassContainer className="p-10 space-y-10 bg-white bg-opacity-80 border border-[#00264D]/60 rounded-xl shadow-lg">
            {[
              {
                title: "1. Information We Collect",
                content: "We collect information that you provide directly to us, including:",
                list: [
                  "Account information (name, email, social media handles)",
                  "Payment information (processed securely by our payment providers)",
                  "Communication preferences",
                  "Service usage information",
                ],
              },
              {
                title: "2. How We Use Your Information",
                content: "We use the collected information to:",
                list: [
                  "Provide and improve our services",
                  "Process your payments",
                  "Send you updates and marketing communications",
                  "Respond to your inquiries",
                  "Ensure compliance with our terms",
                ],
              },
              {
                title: "3. Information Sharing",
                content: "We do not sell your personal information. We may share your information with:",
                list: [
                  "Service providers who assist in our operations",
                  "Legal authorities when required by law",
                  "Business partners with your consent",
                ],
              },
              {
                title: "4. Data Security",
                content:
                  "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
              },
              {
                title: "5. Your Rights",
                content: "You have the right to:",
                list: [
                  "Access your personal information",
                  "Correct inaccurate information",
                  "Request deletion of your information",
                  "Opt-out of marketing communications",
                ],
              },
              {
                title: "6. Cookies",
                content:
                  "We use cookies and similar technologies to enhance your experience on our website. You can control cookie preferences through your browser settings.",
              },
              {
                title: "7. Contact Us",
                content:
                  "For privacy-related inquiries, please contact our Data Protection Officer at privacy@engagesphere.com.",
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

export default Privacy;
