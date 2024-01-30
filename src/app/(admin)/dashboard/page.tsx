"use client"
import { useSession } from 'next-auth/react';
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Dashboard = () => {

  const {data:session,status}=useSession()
  // const router=useRouter()
  console.log("session status");
  
  console.log(session);
  console.log(status);

  console.log("==============");

  // useEffect(()=>{

  // },[router,status])

  return (
    <div className='px-4'>
      <h1>Dashboard</h1>
      {/* <CardProduct /> */}
    </div>
  );
};

export default Dashboard;
