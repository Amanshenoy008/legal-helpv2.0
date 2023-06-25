import React from 'react'
import { useSession , signIn} from 'next-auth/react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Nav from '../components/navbar'
import Footer from '../components/footer'
import Ticks from '../components/Ticks'


export default function Mytickets() {

    const router = useRouter()
    const {data, status} = useSession()


    if(status === 'unauthenticated'){

        const handlesignin =  ()=>{
            signIn().catch(err=>{
                console.log(err)
            })
        }


        return (
            <div className='w-screen h-screen bg-slate-950 flex flex-col justify-center items-center'>
                <h1 className='text-2xl text-white'>Sign-In to access this Page</h1>
                <div className='btn' onClick={handlesignin}>Sign-In</div>
            </div>
        )
    }

  return (
    <>
    <Head>
        <title>Legal-help || Mytickets</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className='w-screen h-screen overflow-x-hidden'>
    <Nav />
    <div className='w-screen h-fit bg-slate-950 p-10 overflow-x-hidden'>
        <h1>{" "}My Tickets{" "}<span className='italic text-sm'>(Click on the ticket to expand):</span></h1>
        <div>
             <Ticks />
        </div>
    </div>

    <Footer />
    </main>
    
    </>
  )
}
