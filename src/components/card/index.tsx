import React from 'react'
import Image from "next/image"

type Props = {
  title: string
  imgSrc: string
  onClick: () => void
}

export const Card = (props: Props) => {
  return (
    <div
      onClick={props.onClick}
      className='p-4 shadow-md rounded-md cursor-pointer w-[200px] hover:shadow-lg'
    >
      <p className='font-bold text-center'>
        {props.title}
      </p>
      <div className='mx-auto my-4 w-fit'>
        <Image src={props.imgSrc} alt={props.title} width={60} height={60} />
      </div>
    </div>
  );
};
