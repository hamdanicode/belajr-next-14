import CardProduct from '@/app/components/dashboard/CardProduct';
import Paginate from '@/app/components/paginate';
// import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react'

// const url="https://dummyjson.com/products"
const url = new URL('https://dummyjson.com/products');
const getData=async(searchParams:any)=>{
  console.log(searchParams);
  url.searchParams.set('limit',searchParams.limit??15)
  url.searchParams.set('skip',searchParams.page??1)
  const result=await fetch(url);
  
  return await result.json();
}

const Products = async({searchParams}:{searchParams:{limit:string,page:string}}) => {  
  // const {limit}=searchParams;
  const data = await getData(searchParams)
  // console.log(data);
  
  // console.log(limit??6);
  
  return (
    <>
    <h1 className='font-bold text-md'>Products</h1>
    <div className='grid gap-4 grid-cols-5'>
    {
      data.products.map((el:any)=>{
        return <CardProduct key={el.id} product={el} />
      })
    }
    </div>
    <div className='mt-4'>
    <Paginate page={data.skip}/>
    </div>
    </>
  )
}

export default Products