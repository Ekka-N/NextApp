'use client'
import { Card } from '@/components';
import React from 'react'

const RecommendsPage = () => {
  return (
    <div>
      <h3 className="text-xl font-bold my-4 mb-8">
        Рекомендации к посадке и уходу
      </h3>
      <div>
        <Card
          title='Посадка смородины'
          imgSrc='/img/apple.png'
          onClick={() => {console.log('Click on recommendation card')}}
        />
      </div>
    </div>
  )
}

export default RecommendsPage;