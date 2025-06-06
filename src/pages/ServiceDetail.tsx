import React from 'react';
import { useParams, Link } from 'react-router-dom';
import GlassContainer from '../components/GlassContainer';
import ServiceFeatures from '../components/ServiceFeatures';
import PricingTier from '../components/PricingTier';
import FAQ from '../components/FAQ';
import {
  ArrowLeft,
  YoutubeIcon,
  Instagram,
  Twitter,
  MessagesSquare,
  Send,
  Linkedin,
  Facebook,
} from 'lucide-react'; // TikTok icon from react-icons


// Brand color configurations for each platform
const brandColors = {
  youtube: {
    primary: 'bg-red-600',
    light: 'bg-red-100',
    text: 'text-red-600',
    hover: 'hover:text-red-700',
    gradient: 'from-red-500 to-red-600',
    border: 'border-red-400',
    lightText: 'text-red-100'
  },
  instagram: {
    primary: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-400',
    light: 'bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100',
    text: 'text-purple-600',
    hover: 'hover:text-purple-700',
    gradient: 'from-purple-500 via-pink-500 to-orange-400',
    border: 'border-purple-400',
    lightText: 'text-purple-100'
  },
  x: {
    primary: 'bg-black',
    light: 'bg-gray-100',
    text: 'text-black',
    hover: 'hover:text-gray-800',
    gradient: 'from-gray-800 to-black',
    border: 'border-gray-400',
    lightText: 'text-gray-100'
  },
  threads: {
    primary: 'bg-black',
    light: 'bg-gray-100',
    text: 'text-black',
    hover: 'hover:text-gray-800',
    gradient: 'from-gray-800 to-black',
    border: 'border-gray-400',
    lightText: 'text-gray-100'
  },
  telegram: {
    primary: 'bg-blue-500',
    light: 'bg-blue-100',
    text: 'text-blue-500',
    hover: 'hover:text-blue-600',
    gradient: 'from-blue-400 to-blue-500',
    border: 'border-blue-400',
    lightText: 'text-blue-100'
  },
  linkedin: {
    primary: 'bg-blue-700',
    light: 'bg-blue-100',
    text: 'text-blue-700',
    hover: 'hover:text-blue-800',
    gradient: 'from-blue-600 to-blue-700',
    border: 'border-blue-400',
    lightText: 'text-blue-100'
  },
  tiktok: {
    primary: 'bg-[#69C9D0]',
    light: 'bg-[#C2F0F7]',
    text: 'text-[#69C9D0]',
    hover: 'hover:text-[#0ABAB5]',
    gradient: 'from-[#69C9D0] to-[#EE1D52]',
    border: 'border-[#69C9D0]',
    lightText: 'text-[#C2F0F7]'
  },

  facebook: {
    primary: 'bg-blue-600',
    light: 'bg-blue-100',
    text: 'text-blue-600',
    hover: 'hover:text-blue-700',
    gradient: 'from-blue-500 to-blue-600',
    border: 'border-blue-400',
    lightText: 'text-blue-100'
  }
};

// Service data by platform
const serviceData = {
  youtube: {
    title: 'YouTube Growth Services',
    description: 'Boost your YouTube channel with our premium engagement services. Get more views, subscribers, likes, and comments to increase your reach and monetization potential.',
    icon: <YoutubeIcon className="h-16 w-16" />,
    features: [
      'High-retention views from real users',
      'Active subscribers that engage with your content',
      'Genuine likes and comments',
      'Increased watch time',
      'Improved search ranking',
      'Enhanced channel credibility',
      'Natural growth pattern',
      'Higher chances of monetization'
    ],
    pricing: [
      {
        name: 'Starter',
        price: '$29.99',
        description: 'Perfect for new channels',
        features: [
          '1,000 High-Quality Views',
          '100 Subscribers',
          '200 Likes',
          '10 Comments',
          'Delivery within 2-3 days'
        ]
      },
      {
        name: 'Growth',
        price: '$79.99',
        description: 'Ideal for growing channels',
        features: [
          '5,000 High-Quality Views',
          '500 Subscribers',
          '1,000 Likes',
          '50 Comments',
          'Delivery within 3-5 days'
        ],
        isPopular: true
      },
      {
        name: 'Professional',
        price: '$199.99',
        description: 'For serious content creators',
        features: [
          '15,000 High-Quality Views',
          '1,500 Subscribers',
          '3,000 Likes',
          '150 Comments',
          'Delivery within 7-10 days'
        ]
      }
    ],
    faq: [
      {
        question: 'Will these subscribers unsubscribe later?',
        answer: 'No, our subscribers are genuine users who are interested in your content niche. We maintain a very high retention rate compared to industry standards.'
      },
      {
        question: 'Is this safe for my YouTube channel?',
        answer: "Absolutely. We use only the safest methods that comply with YouTube's terms of service to ensure your channel remains in good standing."
      },
      {
        question: 'How quickly will I see the results?',
        answer: "You'll start seeing results within 24-48 hours of placing your order, with gradual delivery to ensure a natural growth pattern."
      },
      {
        question: 'Do I need to share my password?',
        answer: 'No, we never require your password. We only need your channel URL or video links to deliver our services.'
      },
      {
        question: 'Will this help me get monetized?',
        answer: 'Yes, our services can help you reach the subscriber and watch time requirements needed for YouTube monetization faster.'
      }
    ]
  },
  instagram: {
    title: 'Instagram Growth Services',
    description: 'Elevate your Instagram presence with our premium growth services. Gain real followers, likes, and comments to boost your engagement and influence.',
    icon: <Instagram className="h-16 w-16" />,
    features: [
      'Real, active followers from targeted regions',
      'Genuine likes from active accounts',
      'Authentic comments that boost engagement',
      'Improved visibility on Explore page',
      'Enhanced profile credibility',
      'Higher engagement rates',
      'Natural growth pattern',
      'Increased brand awareness'
    ],
    pricing: [
      {
        name: 'Basic',
        price: '$24.99',
        description: 'Perfect for personal accounts',
        features: [
          '500 Followers',
          '1,000 Likes',
          '50 Comments',
          'Gradual delivery',
          '24/7 Support'
        ]
      },
      {
        name: 'Premium',
        price: '$69.99',
        description: 'Ideal for influencers',
        features: [
          '2,000 Followers',
          '5,000 Likes',
          '200 Comments',
          'Targeted followers option',
          'Faster delivery',
          '24/7 Priority Support'
        ],
        isPopular: true
      },
      {
        name: 'Elite',
        price: '$149.99',
        description: 'For serious brand building',
        features: [
          '5,000 Followers',
          '10,000 Likes',
          '500 Comments',
          'Custom comment options',
          'Express delivery',
          'Account management'
        ]
      }
    ],
    faq: [
      {
        question: 'Are these real Instagram followers?',
        answer: 'Yes, all our followers are from real accounts with profile pictures and posts. We never use bots or fake accounts.'
      },
      {
        question: 'Will my account get banned for using your services?',
        answer: "No, our methods are safe and comply with Instagram's terms of service. We deliver gradually to ensure natural growth patterns."
      },
      {
        question: 'How long will it take to see results?',
        answer: "You'll start seeing followers within 24-48 hours, with complete delivery depending on your package size."
      },
      {
        question: 'Can I target followers from specific countries?',
        answer: 'Yes, our Premium and Elite packages allow you to target followers from specific regions to better match your audience demographics.'
      },
      {
        question: 'Will these followers interact with my content?',
        answer: "Many of our followers are active users who may engage with your content if it's relevant to their interests."
      }
    ]
  },
  x: {
    title: 'X (Twitter) Growth Services',
    description: 'Expand your X (formerly Twitter) presence with our premium growth services. Gain real followers, retweets, and likes to boost your engagement and visibility.',
    icon: <Twitter className="h-16 w-16" />,
    features: [
      'Real, active X followers',
      'Genuine likes from active accounts',
      'Authentic retweets that expand reach',
      'Improved visibility in trending topics',
      'Enhanced profile credibility',
      'Higher engagement rates',
      'Natural growth pattern',
      'Increased brand presence'
    ],
    pricing: [
      {
        name: 'Starter',
        price: '$19.99',
        description: 'Perfect for new accounts',
        features: [
          '500 Followers',
          '1,000 Likes',
          '100 Retweets',
          'Gradual delivery',
          '24/7 Support'
        ]
      },
      {
        name: 'Growth',
        price: '$59.99',
        description: 'Ideal for established profiles',
        features: [
          '2,000 Followers',
          '3,000 Likes',
          '500 Retweets',
          'Faster delivery',
          '24/7 Priority Support'
        ],
        isPopular: true
      },
      {
        name: 'Influence',
        price: '$129.99',
        description: 'For serious thought leaders',
        features: [
          '5,000 Followers',
          '7,500 Likes',
          '1,000 Retweets',
          'Express delivery',
          'Account growth consultation'
        ]
      }
    ],
    faq: [
      {
        question: 'Will these followers unfollow me later?',
        answer: 'Our followers have high retention rates. While some natural fluctuation is normal on any platform, we maintain industry-leading retention.'
      },
      {
        question: 'Is this safe for my X account?',
        answer: "Yes, our methods comply with X's terms of service. We deliver gradually to ensure natural growth patterns."
      },
      {
        question: 'How fast will I receive my order?',
        answer: 'Initial results begin within 24-48 hours, with complete delivery time depending on your package size.'
      },
      {
        question: 'Do I need to share my password?',
        answer: 'No, we never require your password. We only need your username or profile URL to deliver our services.'
      },
      {
        question: 'Can I target specific niches or countries?',
        answer: 'Yes, our Growth and Influence packages allow for targeting specific niches and regions for more relevant followers.'
      }
    ]
  },
  threads: {
    title: 'Threads Growth Services',
    description: "Build your presence on Meta's newest platform with our premium Threads growth services. Get more followers, likes, and replies to establish your voice.",
    icon: <MessagesSquare className="h-16 w-16" />,
    features: [
      'Real Threads followers',
      'Genuine likes on your posts',
      'Authentic replies that boost engagement',
      'Improved content visibility',
      'Enhanced profile credibility',
      'Higher engagement rates',
      'Natural growth pattern',
      'Early platform advantage'
    ],
    pricing: [
      {
        name: 'Early Adopter',
        price: '$24.99',
        description: 'Perfect for new Threads users',
        features: [
          '500 Followers',
          '1,000 Likes',
          '50 Replies',
          'Gradual delivery',
          '24/7 Support'
        ]
      },
      {
        name: 'Trendsetter',
        price: '$64.99',
        description: 'Ideal for content creators',
        features: [
          '2,000 Followers',
          '4,000 Likes',
          '200 Replies',
          'Faster delivery',
          '24/7 Priority Support'
        ],
        isPopular: true
      },
      {
        name: 'Influencer',
        price: '$139.99',
        description: 'For serious Threads personalities',
        features: [
          '5,000 Followers',
          '10,000 Likes',
          '500 Replies',
          'Express delivery',
          'Growth strategy consultation'
        ]      
      }
    ],
    faq: [
      {
        question: 'Is it safe to use growth services on a new platform like Threads?',
        answer: "Yes, our methods are designed to be compliant with Meta's terms of service and deliver natural-looking growth."
      },
      {
        question: 'How do you deliver followers on Threads?',
        answer: 'We connect your profile with real users interested in your content niche who choose to follow your account.'
      },
      {
        question: 'Will these followers engage with my content?',
        answer: 'Many of our followers are active users who may engage with your content if it matches their interests.'
      },
      {
        question: 'Do I need to link my Instagram account?',
        answer: 'No, we only need your Threads username or profile URL to deliver our services.'
      },
      {
        question: "Is there a refund if I'm not satisfied?",
        answer: "Yes, we offer a 30-day satisfaction guarantee. If you're not happy with our services, we'll provide a full refund."
      }
    ]
  },
  telegram: {
    title: 'Telegram Growth Services',
    description: 'Expand your Telegram presence with our premium growth services. Get more channel members, group participants, and post views to build your community.',
    icon: <Send className="h-16 w-16" />,
    features: [
      'Real Telegram channel members',
      'Active group participants',
      'Genuine post views',
      'Improved channel visibility',
      'Enhanced group credibility',
      'Higher engagement rates',
      'Natural growth pattern',
      'Increased content reach'
    ],
    pricing: [
      {
        name: 'Channel Starter',
        price: '$29.99',
        description: 'Perfect for new channels',
        features: [
          '500 Channel Members',
          '1,000 Post Views',
          'Gradual delivery',
          '24/7 Support'
        ]
      },
      {
        name: 'Community Builder',
        price: '$79.99',
        description: 'Ideal for growing communities',
        features: [
          '2,000 Channel Members',
          '5,000 Post Views',
          'Faster delivery',
          '24/7 Priority Support'
        ],
        isPopular: true
      },
      {
        name: 'Influence Network',
        price: '$179.99',
        description: 'For major Telegram presence',
        features: [
          '5,000 Channel Members',
          '15,000 Post Views',
          'Express delivery',
          'Channel growth consultation'
        ]
      }
    ],
    faq: [
      {
        question: 'Are these real Telegram users?',
        answer: 'Yes, all our members are from real Telegram accounts. We never use bots that could put your channel at risk.'
      },
      {
        question: 'Will these members leave my channel later?',
        answer: 'Our members have high retention rates. While some natural fluctuation is normal, we maintain industry-leading retention.'
      },
      {
        question: 'How do I provide access to my channel?',
        answer: "We only need your public channel link. For private channels, you'll need to make it temporarily public or provide an invite link."
      },
      {
        question: 'Can I target members from specific countries?',
        answer: 'Yes, our Community Builder and Influence Network packages allow for targeting members from specific regions.'
      },
      {
        question: 'Will these members interact with my content?',
        answer: 'Some members may engage with your content if it\'s relevant to their interests, but we primarily focus on growing your member count.'
      }
    ]
  },
  linkedin: {
    title: 'LinkedIn Growth Services',
    description: 'Enhance your professional network with our premium LinkedIn growth services. Gain connections, endorsements, and post engagement to boost your career or business.',
    icon: <Linkedin className="h-16 w-16" />,
    features: [
      'Real LinkedIn connections',
      'Genuine skill endorsements',
      'Authentic post engagement',
      'Improved profile visibility',
      'Enhanced professional credibility',
      'Higher engagement rates',
      'Natural growth pattern',
      'Increased business opportunities'
    ],
    pricing: [
      {
        name: 'Professional',
        price: '$39.99',
        description: 'Perfect for individuals',
        features: [
          '200 Connections',
          '100 Skill Endorsements',
          '50 Post Engagements',
          'Gradual delivery',
          '24/7 Support'
        ]
      },
      {
        name: 'Executive',
        price: '$89.99',
        description: 'Ideal for managers & executives',
        features: [
          '500 Connections',
          '300 Skill Endorsements',
          '200 Post Engagements',
          'Industry-targeted connections',
          '24/7 Priority Support'
        ],
        isPopular: true
      },
      {
        name: 'Enterprise',
        price: '$199.99',
        description: 'For business leaders & companies',
        features: [
          '1,000 Connections',
          '500 Skill Endorsements',
          '500 Post Engagements',
          'Premium network targeting',
          'Profile optimization consultation'
        ]
      }
    ],
    faq: [
      {
        question: 'Are these real LinkedIn professionals?',
        answer: 'Yes, our connections come from real LinkedIn accounts with complete profiles in various industries.'
      },
      {
        question: 'Is this service safe for my professional reputation?',
        answer: "Absolutely. We use only the safest methods that comply with LinkedIn's terms of service to protect your professional standing."
      },
      {
        question: 'Can I target connections from specific industries?',
        answer: 'Yes, our Executive and Enterprise packages allow you to target connections from specific industries relevant to your field.'
      },
      {
        question: 'Do I need to provide my LinkedIn password?',
        answer: 'No, we never require your password. We only need your profile URL to deliver our services.'
      },
      {
        question: 'Will these connections engage with my content?',
        answer: 'Many of our connections are active users who may engage with your content if it\'s relevant to their professional interests.'
      }
    ]
  },
   tiktok: {
    title: 'TikTok Growth Services',
    description: 'Boost your TikTok presence with our premium growth services. Gain real followers, video views, and engagement to grow your influence and reach.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-16 w-16"
      >
        <path d="M12.5 2.75c0-.69.56-1.25 1.25-1.25S15 2.06 15 2.75v6.5c0 2.21 1.79 4 4 4h1.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H19c-3.59 0-6.5-2.91-6.5-6.5v-6zm-5 0C7.5 2.06 8.06 1.5 8.75 1.5S10 2.06 10 2.75v9.5c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4c.69 0 1.25.56 1.25 1.25S6.69 10.75 6 10.75s-1.25.56-1.25 1.25.56 1.25 1.25 1.25 2.25-1.01 2.25-2.25v-8z" />
      </svg>
    ),
    features: [
      'Real TikTok followers from active users',
      'Authentic video views and likes',
      'Targeted audience engagement',
      'Organic growth with no bots',
      'Enhanced profile credibility',
      'Increased chances of viral exposure',
      'Natural follower growth patterns',
      'Improved video algorithm reach'
    ],
    pricing: [
      {
        name: 'Starter Pack',
        price: '$19.99',
        description: 'Ideal for beginners',
        features: [
          '1,000 Followers',
          '5,000 Video Views',
          'Gradual delivery',
          '24/7 Support'
        ]
      },
      {
        name: 'Growth Pack',
        price: '$59.99',
        description: 'Perfect for growing influencers',
        features: [
          '5,000 Followers',
          '25,000 Video Views',
          'Priority delivery',
          '24/7 Priority Support'
        ],
        isPopular: true
      },
      {
        name: 'Viral Pack',
        price: '$149.99',
        description: 'For serious creators looking to go viral',
        features: [
          '15,000 Followers',
          '75,000 Video Views',
          'Express delivery',
          'Content strategy consultation'
        ]
      }
    ],
    faq: [
      {
        question: 'Are these real TikTok followers and views?',
        answer: 'Yes, all followers and views come from real active TikTok users. We do not use bots or fake accounts.'
      },
      {
        question: 'Will this help my videos go viral?',
        answer: 'While we can\'t guarantee viral videos, increased genuine engagement boosts your chances of reaching a wider audience.'
      },
      {
        question: 'How do I share my TikTok profile?',
        answer: 'Simply provide your TikTok username or a link to your profile when placing your order.'
      },
      {
        question: 'Can I target followers from specific countries?',
        answer: 'Yes, our Growth and Viral packs allow targeting based on geographic location.'
      },
      {
        question: 'Is this service safe for my TikTok account?',
        answer: 'Absolutely. We follow TikTok\'s guidelines to ensure your account remains safe and secure throughout the campaign.'
      }
    ]
  },
  facebook: {
    title: 'Facebook Growth Services',
    description: 'Elevate your Facebook presence with our premium growth services. Get more page likes, followers, and post engagement to expand your reach and influence.',
    icon: <Facebook className="h-16 w-16" />,
    features: [
      'Real Facebook page likes',
      'Genuine followers from active accounts',
      'Authentic post engagement',
      'Improved page visibility',
      'Enhanced brand credibility',
      'Higher engagement rates',
      'Natural growth pattern',
      'Increased content reach'
    ],
    pricing: [
      {
        name: 'Starter',
        price: '$24.99',
        description: 'Perfect for new pages',
        features: [
          '500 Page Likes',
          '500 Followers',
          '100 Post Engagements',
          'Gradual delivery',
          '24/7 Support'
        ]
      },
      {
        name: 'Growth',
        price: '$69.99',
        description: 'Ideal for established pages',
        features: [
          '2,000 Page Likes',
          '2,000 Followers',
          '500 Post Engagements',
          'Faster delivery',
          '24/7 Priority Support'
        ],
        isPopular: true
      },
      {
        name: 'Business',
        price: '$149.99',
        description: 'For serious brands & businesses',
        features: [
          '5,000 Page Likes',
          '5,000 Followers',
          '1,500 Post Engagements',
          'Express delivery',
          'Page growth consultation'
        ]
      }
    ],
    faq: [
      {
        question: 'Are these real Facebook users?',
        answer: 'Yes, all our likes and followers come from real Facebook accounts with profile pictures and friends. We never use bots or fake accounts.'
      },
      {
        question: 'Is this safe for my Facebook page?',
        answer: "Absolutely. We use only the safest methods that comply with Facebook's terms of service to ensure your page remains in good standing."
      },
      {
        question: 'How quickly will I see results?',
        answer: "You'll start seeing results within 24-48 hours of placing your order, with gradual delivery to ensure a natural growth pattern."
      },
      {
        question: 'Do I need to provide admin access to my page?',
        answer: 'No, we never require admin access. We only need your page URL to deliver our services.'
      },
      {
        question: 'Can I target likes from specific countries?',
        answer: 'Yes, our Growth and Business packages allow you to target users from specific regions for more relevant audience building.'
      }
    ]
  }
};

// Get default data for platforms not in our dataset
const getDefaultData = (platform: string) => {
  return {
    title: `${platform.charAt(0).toUpperCase() + platform.slice(1)} Growth Services`,
    description: `Boost your ${platform} presence with our premium engagement services.`,
    icon: <YoutubeIcon className="h-16 w-16" />,
    features: [
      'Real, active followers',
      'Genuine engagement',
      'Improved visibility',
      'Enhanced profile credibility',
      'Higher engagement rates',
      'Natural growth pattern'
    ],
    pricing: [
      {
        name: 'Starter',
        price: '$24.99',
        description: 'Perfect for beginners',
        features: [
          '500 Followers',
          '1,000 Engagements',
          'Gradual delivery',
          '24/7 Support'
        ]
      },
      {
        name: 'Growth',
        price: '$69.99',
        description: 'Ideal for growing accounts',
        features: [
          '2,000 Followers',
          '5,000 Engagements',
          'Faster delivery',
          '24/7 Priority Support'
        ],
        isPopular: true
      },
      {
        name: 'Professional',
        price: '$149.99',
        description: 'For serious creators',
        features: [
          '5,000 Followers',
          '15,000 Engagements',
          'Express delivery',
          'Account growth consultation'
        ]
      }
    ],
    faq: [
      {
        question: 'Is this service safe to use?',
        answer: 'Yes, our methods comply with platform terms of service to protect your account.'
      },
      {
        question: 'How quickly will I see results?',
        answer: "You'll start seeing results within 24-48 hours, with complete delivery depending on your package size."
      },
      {
        question: 'Do I need to share my password?',
        answer: 'No, we never require your password. We only need your public profile URL.'
      },
      {
        question: 'Are these real followers?',
        answer: 'Yes, all our followers are from real accounts. We never use bots or fake accounts.'
      },
      {
        question: 'Do you offer refunds?',
        answer: "Yes, we offer a 30-day satisfaction guarantee if we're unable to deliver as promised."
      }
    ]
  };
};

const ServiceDetail: React.FC = () => {
  const { platform } = useParams<{ platform: string }>();
  const normalizedPlatform = platform?.toLowerCase() || '';
  
  // Get service data or default data if not found
  const data = serviceData[normalizedPlatform as keyof typeof serviceData] || getDefaultData(normalizedPlatform);
  
  // Get brand colors for this platform, fallback to blue if not found
  const colors = brandColors[normalizedPlatform as keyof typeof brandColors] || brandColors.facebook;

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/" className={`inline-flex items-center ${colors.text} font-medium mb-8 ${colors.hover} transition-colors`}>
          <ArrowLeft size={18} className="mr-2" />
          Back to Home
        </Link>
        
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className={`${colors.light} p-6 rounded-full`}>
            <div className={colors.text}>
              {data.icon}
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h1>
            <p className="text-slate-600 max-w-2xl">{data.description}</p>
          </div>
        </div>
        
        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Premium Features</h2>
          <ServiceFeatures features={data.features} />
        </section>
        
        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Our Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.pricing.map((tier, index) => (
              <PricingTier
                key={index}
                name={tier.name}
                price={tier.price}
                description={tier.description}
                features={tier.features}
                isPopular={tier.isPopular}
                brandColor={colors.text}
              />
            ))}
          </div>
        </section>
        
        {/* FAQ Section */}
        <FAQ items={data.faq} />
        
        {/* CTA Section */}
        <section className="mt-16">
          <GlassContainer className={`bg-gradient-to-r ${colors.gradient} rounded-lg shadow-lg ${colors.border} p-8 md:p-12 text-center text-white`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to grow your {normalizedPlatform} presence?
            </h2>
            <p className={`${colors.lightText} mb-8 max-w-2xl mx-auto`}>
              Join thousands of satisfied customers who have transformed their online presence with our premium services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => window.location.href = '/auth'}
                className={`bg-white ${colors.text} hover:bg-slate-100 px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg`}
              >
                Get Started Now
              </button>
              <Link
                to="/contact"
                className={`bg-white border ${colors.border} ${colors.text} hover:bg-opacity-90 px-6 py-3 rounded-full font-medium transition-colors`}
              >
                Contact Support
              </Link>
            </div>
          </GlassContainer>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetail;