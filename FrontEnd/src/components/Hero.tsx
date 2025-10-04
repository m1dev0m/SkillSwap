import React from 'react';
import { Search, ArrowRight, Star, Users, BookOpen } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 py-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-200"></div>
        <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-400"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Обменивайся навыками
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Учись бесплатно
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Первая в СНГ платформа бартерного обмена знаниями. Научи кого-то своему навыку и взамен освой что-то новое.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Какой навык хотите изучить?"
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-purple-500 focus:outline-none transition-colors"
            />
            <button className="absolute right-2 top-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all flex items-center space-x-2">
              <span>Найти</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">15,000+ активных пользователей</h3>
            <p className="text-gray-600">Сообщество экспертов готово поделиться знаниями</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">500+ категорий навыков</h3>
            <p className="text-gray-600">От программирования до кулинарии и рукоделия</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">4.9/5 средний рейтинг</h3>
            <p className="text-gray-600">Высокое качество обучения подтверждено отзывами</p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-lg px-8 py-4 rounded-2xl hover:from-purple-700 hover:to-blue-700 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center space-x-3 mx-auto">
            <span>Начать обмен навыками</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-gray-500 mt-4">Бесплатная регистрация • Без скрытых платежей</p>
        </div>
      </div>
    </section>
  );
}