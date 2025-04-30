'use client'
import { Card } from '@/components';
import React from 'react'

const RecommendsPage = () => {
  return (
    <div className='w-full'>
      <h3 className="text-xl font-bold my-4 mb-8">
        Рекомендации к посадке и уходу
      </h3>
      <div className='grid gap-2 grid-cols-[repeat(auto-fill,_165px)] sm:gap-4'>
        <Card
          title='Посадка смородины'
          imgSrc='/img/blackcurrant.png'
          onClick={() => {console.log('Click on recommendation card')}}
        />
        <Card
          title='Посадка клубники'
          imgSrc='/img/strawberry.png'
          onClick={() => {console.log('Click on recommendation card')}}
        />
        <Card
          title='Посадка саженцев'
          imgSrc='/img/seed.png'
          onClick={() => {console.log('Click on recommendation card')}}
        />
        <Card
          title='Посадка клематиса'
          imgSrc='/img/flower.png'
          onClick={() => {console.log('Click on recommendation card')}}
        />
        <Card
          title='Посадка малины'
          imgSrc='/img/raspberry.png'
          onClick={() => {console.log('Click on recommendation card')}}
        />
        <Card
          title='Посадка крыжовника'
          imgSrc='/img/gooseberry.png'
          onClick={() => {console.log('Click on recommendation card')}}
        />
        <Card
          title='Посадка винограда'
          imgSrc='/img/grapes.png'
          onClick={() => {console.log('Click on recommendation card')}}
        />
        <Card
          title='Посадка роз'
          imgSrc='/img/rose.png'
          onClick={() => {console.log('Click on recommendation card')}}
        />
        <Card
          title='Голубое опрыскивание'
          imgSrc='/img/sprayer.png'
          onClick={() => {console.log('Click on recommendation card')}}
        />
      </div>
    </div>
  )
}

export default RecommendsPage;