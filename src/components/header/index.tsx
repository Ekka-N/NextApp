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
          'notDecoratedLink py-2 rounded-xl border-b-gray-200 sm:shadow-inner sm:bg-green-50 sm:px-2 sm:border-b-3'
        : `notDecoratedLink not-even:cursor-pointer py-2 rounded-xl sm:bg-gray-50 sm:px-2 sm:hover:border-b-3 sm:hover:border-b-gray-200
          sm:shadow-md`
      }
      onClick={props.action}
      href={props.href}
    >
      <span className={
        props.isSelected ?
          'text-emerald-800 font-semibold underline sm:no-underline'
        : `text-gray-800`
      }>
        {props.children}
      </span>
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

      <div className='flex items-center gap-4'>
        <NavLink
          isSelected={navState === Nav.MAIN }
          action={() => handleChangeNav(Nav.MAIN)}
          href='/'
        >
          О нас
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
          Посадка и уход
        </NavLink>
      </div>
    </header>
  );
}
