'use client'

import React, { ReactNode, useState } from 'react'
import Link from 'next/link'
import './header.css'

enum Nav {
  MAIN,
  RECS,
  CATALOG
}

type NavLinkProps = {
  children: ReactNode,
  href: string,
  isSelected: boolean,
  action: () => void
}

const NavLink = (props: NavLinkProps ) => {
  return (
    <Link
      className={
        props.isSelected ?
          'notDecoratedLink bg-green-50 px-2 py-2 rounded-xl border-b-3 border-b-gray-200 shadow-inner'
        : 'notDecoratedLink not-even:cursor-pointer px-2 py-2 rounded-xl shadow-md hover:border-b-3 hover:border-b-gray-200 hover:-translate-y-1 hover:scale-105'
      }
      onClick={props.action}
      href={props.href}
    >
      {props.children}
    </Link>
  )
}

export const Header = () => {
  const [navState, setNavState] = useState<Nav>(Nav.MAIN)

  const handleChangeNav = (nav: Nav) => {
    setNavState(nav)
  }

  return (
    <header className='min-h-20 py-3 mb-4'>
      <div className='flex items-center gap-6 mb-7'>
        <h1 className='text-4xl text-green-950 font-bold'>
          Саженцы из Поповки
        </h1>
        <img alt="apple" src="img/apple.png" />
      </div>

      <div className='flex items-center gap-6'>
        <NavLink
          isSelected={navState === Nav.MAIN }
          action={() => handleChangeNav(Nav.MAIN)}
          href='/'
        >
          О нас
        </NavLink>
        <NavLink
          isSelected={navState === Nav.CATALOG}
          action={() => handleChangeNav(Nav.CATALOG)}
          href='/catalog'
        >
          Каталог сортов
        </NavLink>
        <NavLink
          isSelected={navState === Nav.RECS}
          action={() => handleChangeNav(Nav.RECS)}
          href='/recommends'
        >
          Рекомендации по посадке и уходу
        </NavLink>
      </div>
    </header>
  );
}
