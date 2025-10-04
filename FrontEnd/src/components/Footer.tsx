import React from 'react';
import { Users, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold">SkillSwap</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Первая в СНГ платформа для бартерного обмена навыками и знаниями. 
              Учитесь новому бесплатно, обмениваясь своими умениями.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">hello@skillswap.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">Москва, Россия</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Платформа</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Как это работает</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Поиск навыков</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Сообщества</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Мобильное приложение</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Центр помощи</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Правила безопасности</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Пользовательское соглашение</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">

          </p>
        </div>
      </div>
    </footer>
  );
}