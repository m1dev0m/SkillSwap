import React from 'react';
import { UserPlus, Search, MessageSquare, BookOpen } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Создайте профиль',
      description: 'Укажите навыки, которыми владеете, и что хотели бы изучить',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Search,
      title: 'Найдите партнера',
      description: 'Используйте поиск или получайте персональные рекомендации',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageSquare,
      title: 'Договоритесь об обмене',
      description: 'Обсудите формат, время и условия взаимного обучения',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: BookOpen,
      title: 'Учитесь и обучайте',
      description: 'Проводите сессии онлайн или офлайн, обменивайтесь знаниями',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Как это работает
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Простой процесс обмена знаниями в четыре шага
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Готовы начать обмен навыками?
            </h3>
            <p className="text-gray-600 mb-6">
              Присоединяйтесь к тысячам пользователей, которые уже учатся и обучают бесплатно
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all hover:shadow-lg">
              Зарегистрироваться бесплатно
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}