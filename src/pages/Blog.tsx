import React from 'react';
import { Link } from 'react-router-dom';
import GlassContainer from '../components/GlassContainer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "10 Proven Strategies to Grow Your Instagram Following in 2025",
      excerpt: "Learn the latest techniques and best practices for organic Instagram growth that actually work in 2025.",
      author: "Sarah Johnson",
      date: "March 15, 2025",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Instagram Growth"
    },
    {
      title: "The Ultimate Guide to YouTube Algorithm: 2025 Edition",
      excerpt: "Understanding how YouTube's algorithm works and how to optimize your content for maximum reach.",
      author: "Michael Chen",
      date: "March 12, 2025",
      image: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "YouTube Marketing"
    },
    {
      title: "Why Authentic Engagement Matters More Than Ever",
      excerpt: "Discover why genuine social media engagement is crucial for long-term success in the digital age.",
      author: "Emma Davis",
      date: "March 10, 2025",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Social Media Strategy"
    },
    {
      title: "Maximizing Your LinkedIn Presence for Business Growth",
      excerpt: "Professional tips for leveraging LinkedIn to build your brand and generate leads.",
      author: "James Wilson",
      date: "March 8, 2025",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "LinkedIn Marketing"
    },
    {
      title: "The Rise of Threads: Building Your Audience on Meta's New Platform",
      excerpt: "Everything you need to know about growing your presence on the latest social media platform.",
      author: "Lisa Thompson",
      date: "March 5, 2025",
      image: "https://images.pexels.com/photos/3759059/pexels-photo-3759059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Threads Marketing"
    },
    {
      title: "Creating Viral Content: The Science Behind Social Media Success",
      excerpt: "Understanding the psychology and mechanics of content that spreads organically.",
      author: "David Brown",
      date: "March 3, 2025",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Content Strategy"
    }
  ];

  return (
    <div className="pt-28 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">EngageSphere Blog</h1>
          <p className="text-lg text-slate-600">
            Insights, tips, and strategies for social media success. Stay updated with the latest trends and best practices.
          </p>
        </div>

        {/* Featured Post */}
        <GlassContainer className="mb-12 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Featured post"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <span className="text-blue-600 font-medium">Featured Post</span>
              <h2 className="text-2xl font-bold mt-2 mb-4">
                The Future of Social Media Marketing: Trends to Watch in 2025
              </h2>
              <p className="text-slate-600 mb-6">
                Explore the emerging trends that will shape social media marketing in 2025. From AI-driven content creation to immersive experiences, learn how to stay ahead of the curve.
              </p>
              <div className="flex items-center text-sm text-slate-500 mb-6">
                <User className="h-4 w-4 mr-2" />
                <span className="mr-4">Alex Thompson</span>
                <Calendar className="h-4 w-4 mr-2" />
                <span>March 18, 2025</span>
              </div>
              <Link
                to="/blog/future-of-social-media"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </GlassContainer>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <GlassContainer key={index} className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{post.title}</h3>
                <p className="text-slate-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-slate-500 mb-4">
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <Link
                  to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </GlassContainer>
          ))}
        </div>

   
      </div>
    </div>
  );
};

export default Blog;