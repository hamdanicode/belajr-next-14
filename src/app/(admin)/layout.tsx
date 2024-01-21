"use client"
import { SessionProvider } from "next-auth/react";
import Sidebar from "../components/sidebar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SessionProvider>
        <div className='relative h-screen'>
          <div className='absolute  flex h-11  w-full bg-teal-700 px-4'>
            fsda
          </div>
          <div className='flex h-screen'>
            <Sidebar />
            <div className='w-full overflow-auto bg-slate-50'>
              <div className='mt-11'>
                {/* title */}
                <div className='flex  px-4 py-2'>
                  <h4 className='text-2xl font-bold'>Judul</h4>
                  <nav className='w-full ml-4 mt-auto rounded-md'>
                    <ol className='list-reset flex'>
                      <li>
                        <a
                          href='#'
                          className='text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <span className='mx-2 text-neutral-500 dark:text-neutral-400'>
                          /
                        </span>
                      </li>
                      <li>
                        <a
                          href='#'
                          className='text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600'
                        >
                          Library
                        </a>
                      </li>
                      <li>
                        <span className='mx-2 text-neutral-500 dark:text-neutral-400'>
                          /
                        </span>
                      </li>
                      <li className='text-neutral-500 dark:text-neutral-400'>
                        Data
                      </li>
                    </ol>
                  </nav>
                </div>
                {children}
              </div>
              <div className='h-12 mt-4 bg-slate-500 pt-2 text-white px-4'>
                <span>Footer</span>
              </div>
            </div>
          </div>
        </div>
      </SessionProvider>
    </>
  );
}

