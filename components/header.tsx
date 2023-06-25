import React,{useState} from 'react'
import { useSession } from 'next-auth/react'
import Cards from './Cards'

export default function Header() {

    const {data, status} = useSession()
    const [search,setsearch]=useState()
    

  return (
    <>
    <div className='w-screen h-48 p-10 border-b-2 border-slate-500 rounded-lg'>
        <div className='flex justify-center'>
            <h1 className='text-white text-2xl'>Hello @ <span className='bg-slate-800 p-1 rounded-lg'>{ (status==='authenticated'? data.user.name: 'User')}</span> , what can we help with?</h1>
        </div>
        <div className='flex justify-center mt-4'>
            
            <input type="text" name="" id="" className='pr-6 input input-bordered w-full max-w-xs' onChange={(e)=>{setsearch(e.target.value)}} placeholder='Find anything in Legal-help universe...' />
        </div>
      
    </div>
    <div className='w-screen p-10 '>
        <h1 className='flex justify-center italic text-xl'>Our Services</h1>
        <div className='flex flex-row gap-11 flex-wrap justify-center mt-10 overflow-hidden'>
        <Cards  />
        </div>
    </div>
    </>
  )
}
