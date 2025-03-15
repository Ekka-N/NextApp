import React from 'react';
import {
  mainContainer,
  mainTitle,
  title,
  subTitle
} from './sidebarStyles'

export const Sidebar = () => {
  return (
    <div className={mainContainer}>
      <h4 className={mainTitle}>Контакты</h4>

      <p className={title}>Телефон:</p>
      <p className={subTitle}>+7 000-000-00-00</p>
      
      <p className={title}>WhatsApp:</p>
      <p className={subTitle}>+7 000-000-00-00</p>

      <p className={title}>Email:</p>
      <p className={subTitle}>
        <a href='mailto:san-nikishin@yandex.ru'>
          san-nikishin@yandex.ru
        </a>
      </p>
      
      <p className={title}>Адрес:</p>
      <p>
        Ростовская область
        Каменский район
        хутор Поповка
        ул.Придорожная дом 8.
        1 км от дороги.
      </p>
    </div>
  );
}

