// "use client"
import React from 'react'

const getData=async(id:string)=>{
    const result=await fetch(process.env.API_URL+"/products/"+id)

    return result.json();
}


const ProductDetail = async({params}:any) => {
    const product=await getData(params.id);
    // console.log(product);

    const {title,id,description,price,thumbnail}=product
    // console.log(product);
    
  return (
    <div className='container mx-auto my-10'>
        <div className='w-1/2 border mx-auto border-teal-700'>
            <img src={thumbnail} 
            alt="" 
            className='w-full'
            />
            <div className=' bg-white p-4 px-6'>
                <h3 className='text-lg text-teal-700 font-bold'>{title}</h3>
                <h4 className='font-bold'>${price}</h4>
                <p className='text-gray-700'>{description}</p>
            </div>

        </div>
    </div>
  )
}

export default ProductDetail