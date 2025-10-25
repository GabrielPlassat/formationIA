
import React from 'react';
import { MobilityOption } from '../types';

interface MobilityCardProps {
  option: MobilityOption;
}

const colors: { [key: string]: string } = {
  train: 'bg-red-500',
  bus: 'bg-blue-500',
  carpooling: 'bg-green-500',
  bike: 'bg-purple-500',
  walk: 'bg-orange-500',
};

const linkColors: { [key: string]: string } = {
  train: 'hover:bg-red-100 text-red-700',
  bus: 'hover:bg-blue-100 text-blue-700',
  carpooling: 'hover:bg-green-100 text-green-700',
  bike: 'hover:bg-purple-100 text-purple-700',
  walk: 'hover:bg-orange-100 text-orange-700',
};

const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
);


const MobilityCard: React.FC<MobilityCardProps> = ({ option }) => {
  const bgColor = colors[option.id] || 'bg-gray-500';
  const linkColor = linkColors[option.id] || 'hover:bg-gray-100 text-gray-700';

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out flex flex-col">
      <div className="p-5 flex items-center space-x-4">
        <div className={`flex-shrink-0 p-3 rounded-full ${bgColor}`}>
          {option.icon}
        </div>
        <h3 className="text-xl font-bold text-slate-800">{option.title}</h3>
      </div>
      <div className="p-5 pt-0 flex-grow">
        <p className="text-slate-600">{option.description}</p>
      </div>
      <div className="p-5 pt-0 mt-auto">
        <div className="space-y-2">
          {option.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md transition-colors duration-200 ${linkColor}`}
            >
              {link.text}
              <ArrowRightIcon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobilityCard;
