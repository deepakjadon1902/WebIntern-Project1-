
import React from 'react';
import GlassContainer from './GlassContainer';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number; // 0 to 5
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-16 md:py-24 relative bg-gradient-to-tr from-[#0b1a3f] via-[#1a2a6c] to-[#4b6cb7] font-sans text-white">
      {/* Optional subtle background glow circle */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed text-yellow-200">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <GlassContainer
              key={index}
              className="
                p-6
                h-full
                bg-white/10
                backdrop-blur-md
                border border-yellow-300/30
                rounded-3xl
                cursor-pointer
                transition-transform duration-300
                hover:scale-[1.05]
                hover:-translate-y-1
                shadow-lg
              "
            >
              <div className="flex flex-col h-full text-white">
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-yellow-900/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="mb-6 flex-grow italic text-lg leading-relaxed text-black">
  "{testimonial.content}"
</p>


                {/* Name and role */}
                <div className="mt-auto">
                  <p className="text-2xl font-extrabold mb-1 leading-tight drop-shadow-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-sm md:text-base text-yellow-200">
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
