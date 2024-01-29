'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Logout from "./logout";

const menus = [
  {
    name: 'Home',
    url: '/',
    icon: '-',
  },
  {
    name: 'Product',
    url: '/products',
    icon: '-',
  }
]

const NavbarHome = ({isSession}:{isSession:boolean}) => {
  const pathname = usePathname()
  return (
    <nav className='absolute flex  h-11 w-full  bg-teal-700 px-20 text-white'>
      <span className='my-auto text-xl'>Logo</span>
      <ol className='mx-auto flex uppercase '>
        {menus.map((el, key) => {
           return <Link href={el.url} key={key} ><li className={pathname == el.url ? 'rounded-tl-xl rounded-tr-xl h-full px-3 pt-3 bg-white text-teal-700' : 'hover:rounded-tl-xl hover:rounded-tr-xl h-full px-3 pt-3 hover:bg-white hover:text-teal-700'}>{el.name}</li></Link>
          }
          )}
        {isSession &&
        <Link href="/login">
         <li className={false ? 'rounded-tl-xl rounded-tr-xl h-full px-3 pt-3 bg-white text-teal-700' : 'hover:rounded-tl-xl hover:rounded-tr-xl h-full px-3 pt-3 hover:bg-white hover:text-teal-700'}>Login</li> </Link>
        }
        {!isSession &&
         <li className={false ? 'rounded-tl-xl rounded-tr-xl h-full px-3 pt-3 bg-white text-teal-700' : 'hover:rounded-tl-xl hover:rounded-tr-xl h-full px-3 pt-3 hover:bg-white hover:text-teal-700'}><Logout /></li>
        }

      </ol>

        
    </nav>
  )
}

export default NavbarHome