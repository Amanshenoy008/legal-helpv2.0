import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';


export default function Cards() {

    const dispatch: any = useDispatch()

    const {data , status} = useSession()

    

    const services: string[] =[
            
                '83(b) Election',
                'Airline Flight Compensation',
                'Analyze TOS',
                'Animal Control',
                'Breach of Contract',
                'Break My Lease',
                'Cancel Any Subscription',
                'Car Lease Negotiation',
                'Change Mailing Address',
                'Clean Credit Report',
                'Compensation for Victims of Crime',
                'Connect with Inmate',
                'Dispute Traffic Tickets',
                'Emotional Support Animal',
                'File Police Report',
                'Frozen Crypto Funds'
    ]

    let tickets : object

    const handleclick =(e:any)=>{
        if(status==='authenticated'){
        toast.success("Ticket Booked !!!", {
            position: toast.POSITION.TOP_CENTER
          });
         /* const d : number= Math.ceil(Math.random()*100)
          tickets = {...tickets , [d]:e}
          console.log(tickets)*/
          const newTicket:any =
           { title: e ,
            stat:'inComplete',
            id:Math.ceil(Math.random()*100),
             };
          dispatch({ type: 'ADD_TICKET', payload: newTicket });
        }
        else{
            toast.error("Sign In To Book !!!",{
                position: toast.POSITION.TOP_CENTER
            })
        }
        console.log(e)
    }


  return (
    <>
    <div className='absolute'>
    <ToastContainer />
    </div>
    {

        services.map((d:string)=>(
            <div key={d} className='w-64 h-24 p-4 border-2 border-white text-sm cursor-pointer flex flex-col gap-4'>
                <p>{d}</p> 
                <p className='flex flex-row justify-end ' onClick={()=>handleclick(d)}>
                    <Button size="medium" variant="outlined" >
                    Book Ticket
                    </Button>
                </p>
            </div>
        ))
    }
   
    </>
  )

}
