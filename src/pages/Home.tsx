
import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import {
  YoutubeIcon,
  Instagram,
  Twitter,
  MessagesSquare,
  Send,
  Linkedin,
  Facebook,
  Zap, // used temporarily for TikTok
} from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    {
      platform: 'Youtube',
      icon: <YoutubeIcon className="h-10 w-10 text-[#FF0000]" />,
      description: 'Boost your channel with authentic views, subscribers, and engagement to amplify your reach.',
    },
    {
      platform: 'Instagram',
      icon: <Instagram className="h-10 w-10 text-[#C13584]" />,
      description: 'Grow your following with real followers, likes, and comments to increase your influence.',
    },
    {
      platform: 'X',
      icon: <Twitter className="h-10 w-10 text-[#1DA1F2]" />,
      description: 'Expand your Twitter presence with followers, retweets, and likes from genuine accounts.',
    },
    {
      platform: 'Threads',
      icon: <MessagesSquare className="h-10 w-10 text-black" />,
      description: 'Build your community on Meta\'s newest platform with authentic engagement.',
    },
    {
      platform: 'Telegram',
      icon: <Send className="h-10 w-10 text-[#0088cc]" />,
      description: 'Grow your Telegram channels and groups with real members and engagement.',
    },
    {
      platform: 'LinkedIn',
      icon: <Linkedin className="h-10 w-10 text-[#0077B5]" />,
      description: 'Enhance your professional network with connections, endorsements, and post engagement.',
    },
    {
      platform: 'TikTok',
      icon: <Zap className="h-10 w-10 text-[#69C9D0]" />,
      description: 'Grow your TikTok presence with real followers, likes, and views to go viral.',
    },
    {
      platform: 'Facebook',
      icon: <Facebook className="h-10 w-10 text-[#1877F2]" />,
      description: 'Grow your page with likes, followers, and engagement from real Facebook users.',
    }
  ];

const testimonials = [
  {
    name: 'Aarav Sharma',
    role: 'Content Creator',
    content: 'EngageSphere helped me grow my Instagram following by over 10k in just two months. The engagement is real and my reach has increased dramatically!',
    rating: 5
  },
  {
    name: 'Meera Patel',
    role: 'YouTuber',
    content: 'I was struggling to get my YouTube channel off the ground until I found EngageSphere. Their services helped me reach monetization requirements in half the time!',
    rating: 5
  },
  {
    name: 'Rahul Verma',
    role: 'Business Owner',
    content: 'The LinkedIn growth services from EngageSphere have been a game-changer for my business. I\'m connecting with quality leads and seeing real ROI.',
    rating: 4
  }
];




  const faqItems = [
    {
      question: 'Is the engagement from real users?',
      answer: 'Yes, all our engagement comes from real accounts. We never use bots or fake accounts that could put your profile at risk.'
    },
    {
      question: 'How quickly will I see results?',
      answer: 'Most services begin delivering within 24-48 hours of placing your order. The full delivery time depends on the package size you choose.'
    },
    {
      question: 'Do I need to share my password?',
      answer: 'No, we never require your password. We only need your username or the URL to your content to deliver our services.'
    },
    {
      question: 'Are your services safe?',
      answer: 'Absolutely. We use only the safest methods that comply with each platform\'s terms of service to ensure your account remains in good standing.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee if we\'re unable to deliver the services as promised.'
    }
  ];

  return (
    <div>
      <HeroSection />

      {/* Services Section */}
 <section className="py-16 md:py-24 relative bg-gradient-to-tr from-gray-100 via-gray-200 to-gray-300 text-black">
  <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-300 rounded-full opacity-10 blur-3xl"></div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center max-w-4xl mx-auto mb-20">
      <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
        Our Premium Services
      </h2>
      <p className="text-lg md:text-xl font-medium leading-relaxed">
        We offer premium engagement services across all major social media platforms to help you
        grow your online presence and reach.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          platform={service.platform}
          icon={service.icon}
          description={service.description}
        />
      ))}
    </div>
  </div>
</section>




      <Testimonials testimonials={testimonials} />
      <FAQ items={faqItems} />

      {/* CTA Section */}
<section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-tr from-[#0b1a3f] via-[#1a2a6c] to-[#4b6cb7] font-sans">
  {/* Royal glowing circles for premium effect */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-300 rounded-full opacity-10 blur-3xl"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>

  <div className="container mx-auto px-4 relative z-10">
    <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="px-6 py-12 md:px-16 md:py-20 text-center md:text-left md:flex items-center justify-between gap-10">
        
        {/* Left Text Section */}
        <div className="md:w-2/3">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
            Ready to Supercharge Your Social Media Presence?
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed drop-shadow-md">
            Join thousands of satisfied customers who’ve transformed their reach, influence, and engagement with our premium growth solutions.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



    </div>
  );
};

export default Home;
