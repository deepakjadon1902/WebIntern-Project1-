
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
      name: 'Sarah Johnson',
      role: 'Content Creator',
      content: 'EngageSphere helped me grow my Instagram following by over 10k in just two months. The engagement is real and my reach has increased dramatically!',
      rating: 5,
      imageSrc: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Michael Chen',
      role: 'YouTuber',
      content: 'I was struggling to get my YouTube channel off the ground until I found EngageSphere. Their services helped me reach monetization requirements in half the time!',
      rating: 5,
      imageSrc: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Jessica Miller',
      role: 'Small Business Owner',
      content: 'The LinkedIn growth services from EngageSphere have been a game-changer for my business. I\'m connecting with quality leads and seeing real ROI.',
      rating: 4,
      imageSrc: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
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
      <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-tr from-[#0b1a3f] via-[#141e55] to-[#1c2a6b]">
        {/* Blurred glowing golden circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-500 rounded-full opacity-10 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-gradient-to-br from-yellow-400/30 to-yellow-500/40 backdrop-blur-md border border-yellow-300/30 rounded-2xl overflow-hidden shadow-lg">
            <div className="px-6 py-12 md:p-16 text-center md:text-left md:flex items-center justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-200 mb-4 drop-shadow-sm">
                  Ready to Supercharge Your Social Media Presence?
                </h2>
                <p className="text-yellow-100 text-lg max-w-xl">
                  Join thousands of satisfied customers who have transformed their online presence with our premium services.
                </p>
              </div>
              <div>
                {/* Future CTA Button */}
                {/* <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-all shadow-md">Get Started</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
