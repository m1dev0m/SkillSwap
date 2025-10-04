import React from 'react';
import { Star, Clock, MapPin, ArrowRight } from 'lucide-react';

interface SkillCardProps {
  name: string;
  skill: string;
  wants: string;
  rating: number;
  location: string;
  experience: string;
  avatar: string;
  category: string;
}

export function SkillCard({ name, skill, wants, rating, location, experience, avatar, category }: SkillCardProps) {
  const categoryColors = {
    'Программирование': 'bg-blue-100 text-blue-700',
    'Дизайн': 'bg-purple-100 text-purple-700',
    'Языки': 'bg-green-100 text-green-700',
    'Музыка': 'bg-pink-100 text-pink-700',
    'Кулинария': 'bg-orange-100 text-orange-700',
    'Фитнес': 'bg-red-100 text-red-700',
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img 
            src={avatar} 
            alt={name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
          />
          <div>
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600">{rating}</span>
            </div>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-700'}`}>
          {category}
        </span>
      </div>

      <div className="space-y-3 mb-6">
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-1">Предлагает</h4>
          <p className="text-gray-900 font-medium">{skill}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-500 mb-1">Хочет изучить</h4>
          <p className="text-gray-900">{wants}</p>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>{experience}</span>
        </div>
        <div className="flex items-center space-x-1">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </div>

      <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all flex items-center justify-center space-x-2 group-hover:shadow-lg">
        <span>Предложить обмен</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}