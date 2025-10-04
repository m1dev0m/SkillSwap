import React from 'react';
import { Code, Palette, Globe, Music, ChefHat, Dumbbell, Camera, Briefcase } from 'lucide-react';

export function Categories() {
  const categories = [
    { name: 'Программирование', icon: Code, color: 'from-blue-500 to-blue-600', count: '2,341' },
    { name: 'Дизайн', icon: Palette, color: 'from-purple-500 to-purple-600', count: '1,892' },
    { name: 'Языки', icon: Globe, color: 'from-green-500 to-green-600', count: '3,105' },
    { name: 'Музыка', icon: Music, color: 'from-pink-500 to-pink-600', count: '987' },
    { name: 'Кулинария', icon: ChefHat, color: 'from-orange-500 to-orange-600', count: '1,456' },
    { name: 'Фитнес', icon: Dumbbell, color: 'from-red-500 to-red-600', count: '876' },
    { name: 'Фотография', icon: Camera, color: 'from-indigo-500 to-indigo-600', count: '654' },
    { name: 'Бизнес', icon: Briefcase, color: 'from-gray-500 to-gray-600', count: '1,234' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Популярные категории
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Найдите экспертов в любой области или поделитесь своими знаниями
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group cursor-pointer bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-gray-600 mb-4">{category.count} экспертов</p>
              <div className="text-sm text-purple-600 font-medium group-hover:text-purple-700">
                Смотреть все →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}