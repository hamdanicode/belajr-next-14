import db from '@/lib/dbLib'
import { user } from '@/schemas/user'
import React from 'react'

const getData=async()=>{
  const data=await db.select().from(user)
  // console.log("================");
  
  // console.log(data);
  // console.log("================");
  return data

}

const User =async () => {

  const a=await getData()
  console.log(a);
  return (
    <div>User</div>
  )
}

export default User