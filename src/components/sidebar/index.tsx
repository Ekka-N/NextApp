import React from "react"

export const Sidebar = () => {
  return (
    <div className='bg-green-100 w-56  h-full py-7 px-5 rounded-3xl shadow-inner min-h-fit'>
      <h4 className='font-semibold text-2xl pb-4'>
        Контакты
        </h4>

      <p className='font-semibold text-lg pb-1'>Телефон:</p>
      <p className='pb-3'>+7 000-000-00-00</p>
      
      <p className='font-semibold text-lg pb-1'>WhatsApp:</p>
      <p className='pb-3'>+7 000-000-00-00</p>

      <p className='font-semibold text-lg pb-1'>Email:</p>
      <p className='pb-3'>
        <a href='mailto:san-nikishin@yandex.ru'>
          san-nikishin@yandex.ru
        </a>
      </p>
      
      <p className='font-semibold text-lg pb-1'>Адрес:</p>
      <p className='pb-3'>
        Ростовская область
        Каменский район
        хутор Поповка
        ул.Придорожная дом 8.
        1 км от дороги.
      </p>
    </div>
  );
}

