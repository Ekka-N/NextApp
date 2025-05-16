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
      className="flex flex-col content-center justify-center bg-gray-50 p-4 shadow-md rounded-md cursor-pointer w-[165px] hover:shadow-lg"
    >
      <p className="font-bold text-center">
        {props.title}
      </p>
      <div className="mx-auto my-4 w-fit">
        <Image src={props.imgSrc} alt={props.title} width={60} height={60} />
      </div>
    </div>
  );
};
