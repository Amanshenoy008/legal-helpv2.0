import React from 'react'
import {  useSession  , signIn , signOut} from "next-auth/react";
import Link from 'next/link'
import { useRouter,NextRouter  } from 'next/router';
import Image from 'next/image';
import Logo  from '../public/mainlogo.png'

export default function Nav() {
    
    const router: NextRouter = useRouter()
    const {data , status} = useSession()
    const goto =()=>{
        router.push('/mytickets').catch(err=>{
            console.log(err)
        })
    }

  return (<div className='sticky'>
            <div className='absolute z-10 left-5 top-3'> 
            <Image src={Logo} alt='logo' width={100} height={100} />
            </div>
    <div className='w-screen h-32 bg-slate-900 p-10  flex flex-row justify-end gap-10 sticky text-white'>
        
      <div>
        <h1 className='btn' onClick={()=>{router.push('/').catch(err=>console.log(err))}}>Home</h1>
      </div>
      <div>
        <h1 className='btn' onClick={goto}>My Tickets</h1>
      </div>
      <div>
        {   
            status==='unauthenticated' &&
            <div className='btn' onClick={()=>{signIn()}}>Sign-In</div>
            
        }
        {
            status==='authenticated' && 
            <h1 className='btn' onClick={()=>{signOut()}}>Sign out</h1>
        }
        
      </div>
    </div>
    </div>
  )
}
