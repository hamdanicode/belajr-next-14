'use client';
import Link from 'next/link';
import React from 'react';
import { TERipple } from 'tw-elements-react';

export default function CardProduct({ product }: { product: any }) {
  const { id, title,price, thumbnail, description } = product;
  return (
    
    <div className='block rounded-sm bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700'>
      <Link href='#!'>
        <img
          className='mx-auto max-h-48 w-full rounded-t-sm'
          src={thumbnail}
          alt={title}
        />
      </Link>
      <div className='min-h-30 p-4'>
        <h5 className='text-sm mb-2 font-bold leading-tight text-neutral-800 dark:text-neutral-50'>
          {title}
        </h5>
        {/* <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
            {description}
          </p> */}
        <h6 className='font-bold'>${price}</h6>
      
            <button
              type='button'
              className='mt-auto inline-block rounded bg-teal-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-teal-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-teal-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-teal-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
            >
              Button
            </button>
      </div>
    </div>
  );
}
