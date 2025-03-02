import React from 'react';

export const Sidebar = () => {
  return (
    <div className='bg-emerald-100 w-56 h-screen py-7 px-5'>
      <h4 className='font-semibold text-2xl pb-4'>Контакты</h4>

      <p className='font-semibold text-lg'>Телефон:</p>
      <p className='pb-3'>+7 000-000-00-00</p>
      
      <p className='font-semibold text-lg'>WhatsApp:</p>
      <p className='pb-3'>+7 000-000-00-00</p>

      <p className='font-semibold text-lg'>Email:</p>
      <a
        href='mailto:san-nikishin@yandex.ru'
        className='pb-2'
      >
        san-nikishin@yandex.ru
      </a>

      
      <p className='font-semibold text-lg pt-6'>Адрес:</p>
      <p className='pt-1'>
        Ростовская область
        Каменский район
        хутор Поповка
        ул.Придорожная дом 8.
        1 км от дороги.
      </p>
    </div>
  );
}

