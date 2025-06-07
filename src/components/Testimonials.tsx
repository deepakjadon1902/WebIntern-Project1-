
import React from 'react';
import GlassContainer from './GlassContainer';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-tr from-[#0b1a3f] via-[#1a2a6c] to-[#4b6cb7] font-sans">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h1>
          <p className="text-gray-200 text-base md:text-lg">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <GlassContainer
              key={index}
              className="p-6 h-full bg-white backdrop-blur-md border border-white/20 rounded-3xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col h-full text-black">
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? 'text-yellow-500 fill-yellow-500'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="mb-6 flex-grow italic text-lg leading-relaxed text-gray-800">
                  "{testimonial.content}"
                </p>

                {/* Name and role */}
                <div className="mt-auto">
                  <p className="text-2xl font-extrabold text-black mb-1 leading-tight drop-shadow-xl">
                    {testimonial.name}
                  </p>
                  <p className="text-sm md:text-base text-gray-700">
                    {testimonial.role}
                  </p>
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
