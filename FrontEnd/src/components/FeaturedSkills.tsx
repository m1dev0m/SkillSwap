import React from 'react';
import { SkillCard } from './SkillCard';

export function FeaturedSkills() {
  const featuredSkills = [
    {
      name: 'Анна Петрова',
      skill: 'React и TypeScript',
      wants: 'Итальянский язык',
      rating: 4.9,
      location: 'Москва',
      experience: '5+ лет опыта',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Программирование'
    },
    {
      name: 'Михаил Иванов',
      skill: 'UI/UX дизайн в Figma',
      wants: 'Python программирование',
      rating: 4.8,
      location: 'СПб',
      experience: '3+ года опыта',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Дизайн'
    },
    {
      name: 'Екатерина Смирнова',
      skill: 'Английский (C2)',
      wants: 'Веб-дизайн',
      rating: 5.0,
      location: 'Казань',
      experience: '7+ лет опыта',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Языки'
    },
    {
      name: 'Дмитрий Козлов',
      skill: 'Игра на гитаре',
      wants: 'Фотография',
      rating: 4.7,
      location: 'Екатеринбург',
      experience: '4+ года опыта',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Музыка'
    },
    {
      name: 'Ольга Новикова',
      skill: 'Французская кухня',
      wants: 'Маркетинг в соцсетях',
      rating: 4.9,
      location: 'Нижний Новгород',
      experience: '6+ лет опыта',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Кулинария'
    },
    {
      name: 'Андрей Волков',
      skill: 'Силовые тренировки',
      wants: 'Немецкий язык',
      rating: 4.6,
      location: 'Самара',
      experience: '8+ лет опыта',
      avatar: 'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Фитнес'
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Рекомендуемые эксперты
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Высоко оцененные пользователи, готовые поделиться знаниями
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredSkills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all hover:shadow-lg">
            Показать всех экспертов
          </button>
        </div>
      </div>
    </section>
  );
}