import {getToken} from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server';
import React from 'react'

const GetToken =async (req:any, res:any) => {
    console.log("get Token");
    const token = await getToken({ req })
    console.log(token);
    if(token){
        

    }

    
  return (
    <div>GetToken</div>
  )
}

export default GetToken