import CardProduct from '@/app/components/dashboard/CardProduct';
import Paginate from '@/app/components/paginate';
// import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react';

// const url="https://dummyjson.com/products"
const url = new URL(process.env.API_URL + '/products');
const getData = async (searchParams: any) => {
  console.log(searchParams);
  url.searchParams.set('limit', searchParams.limit ?? 15);
  url.searchParams.set('skip', searchParams.page ?? 1);
  const result = await fetch(url);

  return await result.json();
};

const Products = async ({
  searchParams,
}: {
  searchParams: { limit: string; page: string };
}) => {
  const data = await getData(searchParams);
  return (
    <>
      <h1 className='text-md font-bold'>Products</h1>
      <div className='grid grid-cols-5 gap-4'>
        {data.products.map((el: any) => {
          return <CardProduct key={el.id} product={el} />;
        })}
      </div>
      <div className='mt-4'>
        <Paginate page={data.skip} />
      </div>
    </>
  );
};

export default Products;
