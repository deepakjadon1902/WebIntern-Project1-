// import React, { useState } from 'react';
// import { ChevronUp, ChevronDown } from 'lucide-react';
// import GlassContainer from './GlassContainer';

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// interface FAQProps {
//   items: FAQItem[];
// }

// const FAQ: React.FC<FAQProps> = ({ items }) => {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   const toggleItem = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="py-12 md:py-16">
//       <div className="container mx-auto px-4">
//         <div className="text-center max-w-3xl mx-auto mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
//           <p className="text-slate-600">
//             Got questions? We've got answers. If you don't find what you're looking for, feel free to contact our support team.
//           </p>
//         </div>

//         <div className="max-w-3xl mx-auto">
//           <GlassContainer className="divide-y divide-slate-100">
//             {items.map((item, index) => (
//               <div key={index} className="py-4 px-6">
//                 <button
//                   className="flex justify-between items-center w-full text-left py-2"
//                   onClick={() => toggleItem(index)}
//                 >
//                   <h3 className="text-lg font-semibold pr-8">{item.question}</h3>
//                   {openIndex === index ? (
//                     <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
//                   ) : (
//                     <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
//                   )}
//                 </button>
//                 {openIndex === index && (
//                   <div className="mt-2 text-slate-600 animate-fadeIn">
//                     <p>{item.answer}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </GlassContainer>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQ;


import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import GlassContainer from './GlassContainer';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-tr from-[#0b1a3f] via-[#1a2a6c] to-[#4b6cb7]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 text-white drop-shadow-md">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide">
            Frequently Asked Questions
          </h2>
          <p className="text-yellow-300 max-w-xl mx-auto">
            Got questions? We've got answers. If you don't find what you're looking for, feel free to contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <GlassContainer className="divide-y divide-yellow-400/50 bg-gradient-to-r from-indigo-900/70 to-blue-800/70 border border-yellow-400/40 shadow-lg rounded-lg">
            {items.map((item, index) => (
              <div key={index} className="py-5 px-6">
                <button
                  className="flex justify-between items-center w-full text-left py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 transition"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3
                    className={`text-lg font-semibold pr-8 transition-colors ${
                      openIndex === index ? 'text-yellow-400' : 'text-yellow-200 hover:text-yellow-300'
                    }`}
                  >
                    {item.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-yellow-400 flex-shrink-0 transition-transform" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-yellow-300 flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="mt-3 text-yellow-100 animate-fadeIn leading-relaxed">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </GlassContainer>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
