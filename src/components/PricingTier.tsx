// import React from 'react';
// import { Check } from 'lucide-react';

// interface PricingTierProps {
//   name: string;
//   price: string;
//   description: string;
//   features: string[];
//   isPopular?: boolean;
// }

// const PricingTier: React.FC<PricingTierProps> = ({
//   name,
//   price,
//   description,
//   features,
//   isPopular = false,
// }) => {
//   return (
//     <div
//       className={`
//         relative h-full rounded-2xl shadow-lg border border-[#3a4a6d]
//         bg-gradient-to-br from-[#1a2a6c] to-[#4b6cb7]  /* royal navy to blue */
//         backdrop-blur-sm bg-opacity-60
//         transition-transform duration-300
//         hover:-translate-y-1 hover:shadow-2xl
//         ${isPopular ? 'scale-[1.05] shadow-2xl' : ''}
//       `}
//     >
//       {isPopular && (
//         <div
//           className="
//             bg-gradient-to-r from-yellow-500 to-yellow-600
//             text-gray-900 text-sm font-semibold px-4 py-1 rounded-full
//             absolute -top-4 left-1/2 transform -translate-x-1/2
//             shadow-lg
//           "
//         >
//           Most Popular
//         </div>
//       )}

//       <div className="p-6 md:p-8 text-white">
//         <div className="text-center mb-6">
//           <h3 className="text-2xl font-extrabold mb-2 tracking-wide drop-shadow-lg">{name}</h3>
//           <div className="text-4xl font-extrabold mb-2 text-yellow-400">{price}</div>
//           <p className="text-yellow-100">{description}</p>
//         </div>

//         <ul className="space-y-3 mb-6">
//           {features.map((feature, index) => (
//             <li key={index} className="flex items-start">
//               <Check className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
//               <span className="text-yellow-100">{feature}</span>
//             </li>
//           ))}
//         </ul>

//         <button
//           className={`
//             w-full py-3 rounded-2xl font-bold transition-all
//             ${
//               isPopular
//                 ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
//                 : 'bg-yellow-300 text-gray-900 hover:bg-yellow-400'
//             }
//             shadow-md hover:shadow-lg
//           `}
//         >
//           Order Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PricingTier;


import React from 'react';
import { Check } from 'lucide-react';

declare global {
  interface Window {
    paypal: any;
  }
}

interface PricingTierProps {
  name: string;
  price: string; // e.g. "$20" or "20"
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({
  name,
  price,
  description,
  features,
  isPopular = false,
}) => {
  const loadPayPal = () => {
    const amount = parseFloat(price.replace(/[^0-9.]/g, '')); // remove $ and convert to number
    if (!window.paypal) {
      alert('PayPal SDK not loaded');
      return;
    }

    const containerId = `paypal-container-${name}`;

    const existingButton = document.getElementById(containerId);
    if (existingButton?.childElementCount) return;

    window.paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: amount.toFixed(2),
            },
          }],
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then(function (details: any) {
          alert(`Transaction completed by ${details.payer.name.given_name}`);
        });
      },
    }).render(`#${containerId}`);
  };

  return (
    <div
      className={`
        relative h-full rounded-2xl shadow-lg border border-[#3a4a6d]
        bg-gradient-to-br from-[#1a2a6c] to-[#4b6cb7]
        backdrop-blur-sm bg-opacity-60
        transition-transform duration-300
        hover:-translate-y-1 hover:shadow-2xl
        ${isPopular ? 'scale-[1.05] shadow-2xl' : ''}
      `}
    >
      {isPopular && (
        <div
          className="
            bg-gradient-to-r from-yellow-500 to-yellow-600
            text-gray-900 text-sm font-semibold px-4 py-1 rounded-full
            absolute -top-4 left-1/2 transform -translate-x-1/2
            shadow-lg
          "
        >
          Most Popular
        </div>
      )}

      <div className="p-6 md:p-8 text-white">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-extrabold mb-2 tracking-wide drop-shadow-lg">{name}</h3>
          <div className="text-4xl font-extrabold mb-2 text-yellow-400">{price}</div>
          <p className="text-yellow-100">{description}</p>
        </div>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-yellow-100">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className={`
            w-full py-3 rounded-2xl font-bold transition-all mb-3
            ${
              isPopular
                ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500'
                : 'bg-yellow-300 text-gray-900 hover:bg-yellow-400'
            }
            shadow-md hover:shadow-lg
          `}
          onClick={loadPayPal}
        >
          Order Now
        </button>

        <div id={`paypal-container-${name}`} className="mt-2"></div>
      </div>
    </div>
  );
};

export default PricingTier;
