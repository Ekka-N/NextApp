'use client'

import React, { useState } from 'react'
import { flexRowWrap, headerContainer, mainTitle, nav, selectedNav } from './headerStyles'
import Link from 'next/link'
import './header.css'

enum Nav {
  MAIN,
  RECS,
  CATALOG
}

export const Header = () => {
  const [navState, setNavState] = useState<Nav>(Nav.MAIN)

  const handleChangeNav = (nav: Nav) => {
    setNavState(nav)
  }

  return (
    <header className={headerContainer}>
      <div className={`${flexRowWrap} mb-7`}>
        <h1 className={mainTitle}>
          Саженцы из Поповки
        </h1>
        <img alt="apple" src="img/apple.png" />
      </div>

      <div className={`${flexRowWrap}`}>
        <Link
          className={navState === Nav.MAIN ? selectedNav : nav}
          onClick={() => handleChangeNav(Nav.MAIN)}
          href='/'
        >
          О нас
        </Link>
        <Link
          className={navState === Nav.CATALOG ? selectedNav : nav}
          onClick={() => handleChangeNav(Nav.CATALOG)}
          href='/catalog'
        >
          Каталог сортов
        </Link>
        <Link
          className={navState === Nav.RECS ? selectedNav : nav}
          onClick={() => handleChangeNav(Nav.RECS)}
          href='/recommends'
        >
          Рекомендации по посадке и уходу
        </Link>
      </div>
    </header>
  );
}
