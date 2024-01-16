// 'use client';
import Modal from '@/app/components/core/modal/index';
import React from 'react';

const getData = async (id: string) => {
  const result = await fetch(process.env.API_URL + '/products/' + id);

  return result.json();
};

const ProductDetail = async ({ params }: any) => {
  const product = await getData(params.id);
  // console.log(product);

  const { title, id, description, price, thumbnail } = product;
  // console.log(product);

  return (
    <Modal>
      <img src={thumbnail} alt='' className='w-full' />
      <div className=' bg-white p-4 px-6'>
        <h3 className='text-lg font-bold text-teal-700'>{title}</h3>
        <h4 className='font-bold'>${price}</h4>
        <p className='text-gray-700'>{description}</p>
      </div>
    </Modal>
  );
};

export default ProductDetail;
