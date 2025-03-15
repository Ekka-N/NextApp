import React from 'react';
import { flexRowWrap, headerContainer, mainTitle, nav } from './headerStyles';

export const Header = () => {
  return (
    <header className={headerContainer}>
      <div className={`${flexRowWrap} mb-7`}>
        <h1 className={mainTitle}>
          Саженцы из Поповки
        </h1>
        <img alt="apple" src="img/apple.png" />
      </div>

      <div className={`${flexRowWrap}`}>
        <nav className={`${nav}`}>
          Главная
        </nav>
        <nav className={`${nav}`}>
          Рекомендации по посадке и уходу
        </nav>
        <nav className={`${nav}`}>
          Каталог сортов
        </nav>
      </div>
    </header>
  );
}
