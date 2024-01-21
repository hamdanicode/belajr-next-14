import Link from 'next/link';
import React from 'react';
import { signIn } from 'next-auth/react';
const menus = [
  {
    name: 'Home',
    url: '/',
    icon: '-',
  },
  { name: 'Dashboard', url: '/dashboard', icon: '-' },
  { name: 'Dashboard', url: '/dashboard', icon: '-' },
  { name: 'Dashboard', url: '/dashboard', icon: '-' },
  { name: 'Dashboard', url: '/dashboard', icon: '-' },
];

const Sidebar = () => {
  return (
    <div className='w-60 px-0 pt-11 overflow-auto shadow-xl'>
      {/* <div className='py-2'>
        <h4 className='text-center text-2xl font-bold'>Logo</h4>
      </div> */}
      <ol className=''>
        {menus.map((el,key:any) => {
          return (
            <li key={key} className='px-4 py-1 hover:bg-teal-100 hover:text-teal-700'>
              <Link href={el.url}>{el.name}</Link>
            </li>
          );
        })}
        <li className='px-4 py-1 hover:bg-teal-100 hover:text-teal-700'>
          <button onClick={()=>{
            signIn();
          }}>Login</button>
        </li>

      </ol>
    </div>
  );
};

export default Sidebar;
