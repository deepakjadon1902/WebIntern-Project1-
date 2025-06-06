import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  platform: string;
  icon: React.ReactNode;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ platform, icon, description }) => {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border border-gray-300
        p-6
        grid gap-4
        text-black
        transition-all duration-300
        hover:scale-[1.05]
        cursor-pointer
      "
    >
      <div className="text-5xl text-yellow-500 mb-2">{icon}</div>
      <h3 className="text-3xl font-extrabold capitalize tracking-wide">{platform}</h3>
      <p className="text-base leading-relaxed">{description}</p>
      <Link
        to={`/services/${platform.toLowerCase()}`}
        className="inline-flex items-center font-bold text-lg text-blue-600 hover:text-blue-800 mt-4 transition-all group"
      >
        View {platform} Services
        <ArrowRight
          size={24}
          className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
        />
      </Link>
    </div>
  );
};

export default ServiceCard;

