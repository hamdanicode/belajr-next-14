'use client';
import Link from 'next/link';
import React from 'react';

const SubPaginate = ({ number,page }: { number: any,page:any }) => {
  return (
    <Link
      href={'?page=' + number}
      className=
      {page==number?
        'relative block bg-teal-700 rounded px-3 py-1.5 text-sm text-white transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white'
        : 'relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white'
    }
     
    >
      {number}
    </Link>
  );
};

const Paginate = ({page}:any) => {
  const pages = [];
  let i: number;
  for (i = 1; i <= 10; i++) {
    pages.push(i);
  }
  return (
    <nav aria-label='Page navigation example'>
      <ul className='list-style-none flex'>
        <li>
          <Link
            href='?page=1'
            className='pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400'
          >
            Previous
          </Link>
        </li>
        {pages.map((el) => {
          return <SubPaginate key={el} page={page} number={el} />;
        })}
        <li>
          <Link
            href='?page=1'
            className='relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white'
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Paginate;
