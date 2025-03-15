'use client'

import React, { useState } from 'react';
import { flexRowWrap, headerContainer, mainTitle, nav, selectedNav } from './headerStyles';

enum Nav {
  MAIN,
  RECS,
  CATALOG
}

export const Header = () => {
  const [navState, setNavState] = useState<Nav>(Nav.MAIN)  

  return (
    <header className={headerContainer}>
      <div className={`${flexRowWrap} mb-4`}>
        <h1 className={mainTitle}>
          Саженцы из Поповки
        </h1>
        <img alt="apple" src="img/apple.png" />
      </div>

      <div className={`${flexRowWrap}`}>
        <nav className={navState === Nav.MAIN ? selectedNav : nav}>
          Главная
        </nav>
        <nav className={navState === Nav.RECS ? selectedNav : nav}>
          Рекомендации по посадке и уходу
        </nav>
        <nav className={navState === Nav.CATALOG ? selectedNav : nav}>
          Каталог сортов
        </nav>
      </div>
    </header>
  );
}
