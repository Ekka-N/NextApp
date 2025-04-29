import { YandexMap } from '@/components';
import React from 'react'

const MainPage = () => {
  return (
    <main className="">
      <h3 className="text-xl font-bold mt-2 mb-2">
        Саженцы из собственного питомника
      </h3>
      <ul className="max-w-md space-y-1 list-disc list-inside pl-4">
        <li className="">
          Привой (сорта) только <span className="font-bold">с собственных деревьев</span>
        </li>
        <li>
          <span className="font-bold">Строгая маркировка сортов </span> цветовыми маркерами и бирками
        </li>
        <li>
          Гарантия <span className="font-bold">высокого качества корневой системы</span> благодаря выпашке саженцев выкопочным плугом
        </li>
        <li>
          <span className="font-bold">Бережное хранение </span> с соблюдением температуры и влажности. Это продлевает сроки посадки без ущерба для растений и позволяет получить высокий процент приживаемости саженцев с открытой корневой системой
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-4 mb-2">
        Расписание на весну 2025
      </h3>
      <p className="font-medium">
        Ежедневно: с 8.30 до 17.30 до 1 мая
      </p>
      <p className="font-medium">
        Выходные:  20 апреля
      </p>
      <p className="italic">
        В субботу 19 апреля до 16.00
      </p>

      <p className="text-l font-semibold mt-2">
        Предварительный заказ можно делать через   WhatsApp: +7 000-000-00-00
      </p>

      <h3 className="text-xl font-bold mt-4 mb-2">
        Как наc найти?
      </h3>
      <p>
        Адрес: Ростовская область Каменский район хутор Поповка ул.Придорожная дом 8. <br />1 км от дороги.
      </p>
      <p>
        Если ехать со стороны Каменска-Шахтинского, то съезд на грунтовую дорогу влево
      </p>
      <div className='mt-4 mb-2'>
        <YandexMap />
      </div>
    </main>
  )
}

export default MainPage;