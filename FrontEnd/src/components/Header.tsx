import React from 'react';
import { Users, MessageCircle, Bell, User } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                SkillSwap
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Поиск</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Сообщества</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Мои обмены</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
              <MessageCircle className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-500 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all">
              <User className="w-4 h-4" />
              <span>Профиль</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}