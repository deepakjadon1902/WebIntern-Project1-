import React from 'react';
import GlassContainer from './GlassContainer';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  imageSrc: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-tr from-[#0b1a3f] via-[#1a2a6c] to-[#4b6cb7]">
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 text-white drop-shadow-md">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide">
            What Our Clients Say
          </h2>
          <p className="text-yellow-300">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <GlassContainer
              key={index}
              className="p-6 h-full bg-gradient-to-r from-indigo-900/70 to-blue-800/70 border border-yellow-400/40 shadow-lg rounded-lg transition-transform hover:scale-[1.03]"
            >
              <div className="flex flex-col h-full text-yellow-100">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 transition-colors ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-yellow-700'
                      }`}
                    />
                  ))}
                </div>
                
                <p className="mb-6 flex-grow text-yellow-200 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center mt-auto">
                  <img
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover border-2 border-yellow-400 mr-4 shadow-md"
                  />
                  <div>
                    <p className="font-semibold text-yellow-300">{testimonial.name}</p>
                    <p className="text-yellow-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </GlassContainer>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
