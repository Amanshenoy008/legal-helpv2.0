import React,{useState , useEffect} from 'react'
import { useSelector } from 'react-redux';
import Rating from '@mui/material/Rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';


type ticks={
    title:string,
    stat: string,
    id:number
}

export default function Ticks() {
    const dispatch: any = useDispatch()

    const ticket:any = useSelector((state) => state.tickets);
    const [tickets,settickets]=useState(ticket)
    const [stat, setstat] = useState()
    const [value,setValue] = useState(0)
    const [visiblediv,setvisiblediv] = useState(false)
    const [visibledata,setvisbledata]= useState()
    const [note,setnote]= useState()
    let idd
    const handleclick=(d)=>{
        setvisiblediv(true)
        setvisbledata(d)
        //console.log(d)
         idd = d.id
    }
    useEffect(()=>{
        const findd: any = tickets.find((obj:any)=> {return obj.id=== idd})
        console.log(findd)
        setvisbledata(findd)
    },[tickets])

   /*const handlenotechange =(e,id)=>{
        const findd: any = tickets.find((obj:any)=> {return obj.id===id})
        if(findd){
            findd.note = e.target.value
        }
       // console.log(tickets)
        
    }*/
    const calllawyer =()=>{
        toast.success('You will be Contacted by our Lawyer shortly !!!',{
            position: toast.POSITION.TOP_CENTER
        })
        const findd:any = tickets.find((obj:any)=>{return obj.id === visibledata.id})
        if(findd){
            findd.stat = 'Completed'
        }
    }
    

    const handleform =(vd)=>{
        toast.success('Thank you for your FeedBack !!!',{
            position: toast.POSITION.TOP_CENTER
        })
        console.log(vd)
        const updatedTickets = tickets.filter((ticket: ticks) => ticket.id !== visibledata?.id);

        dispatch({ type: 'UPDATE_TICKETS', payload: updatedTickets })
    }
    /*const handlerating=(data , vd)=>{
        const findd:any = tickets.find((obj:any)=>{return obj.id===vd.id})
        if(findd){
            findd.rating=data
            setValue(data)
        }
    }
    const handlefeed=(e,vd)=>{
        const findd:any = tickets.find((obj:any)=>{return obj.id===vd.id})
        if(findd){
            findd.feed = e.target.value
        }
    }*/
   // console.log(tickets)
  return (
    <div className=' w-full h-fit overflow-hidden'>
        <div className='absolute'>
            <ToastContainer />
        </div>
    <div className='w-full h-fit flex flex-row   gap-10 p-10 overflow-x-scroll overflow-y-hidden  cursor-pointer'>
      {
        tickets && 
        tickets.map((d: ticks)=>(
            <div key={d.id} className='w-80 h-48 rounded-xl p-5 bg-black border-2 border-white flex flex-col justify-between hover:scale-75 transition-all ease-in-out'  onClick={()=>handleclick(d,note)}>
                <p className='text-xl'>{d.title}</p>
                <p className='input flex justify-center items-center'>Id: {d.id}</p>
                <p className='text-sm'>Status : <span className={(d.stat==='Completed'?'text-green-500 line-through	':'text-red-500')}> {d.stat} </span></p>
                
            </div>
        ))
      }
      {
        !tickets && 
        <div className=''> 
                <p className='text-2xl text-white'> No Tickets Booked ...</p>
        </div>
      }
      {
       
      }
    </div>
    
    <div className='w-full h-96 border-2 border-white p-10 rounded-xl bg-slate-950' >
       { visiblediv && 
     <div className='flex flex-col gap-5'>
        <h1 className='text-xl text-blue-500'> Service:{" "} <span className='text-2xl text-white'>{visibledata?.title}</span></h1>
        <p className='text-sm text-blue-500'>Status:{" "} <span className={visibledata?.stat === 'Completed'?'text-green-500 line-through':' text-red-500 '}>{visibledata?.stat}</span></p>
        <p className='text-blue-500'>Id:{" "} <span className='text-white'>{visibledata?.id}</span></p>
        {
        ( visibledata?.stat === 'Completed' ? 
                <>
                <div>
                <Rating
                name="simple-controlled"
                value={value}
                 onChange={(event, newValue) => {
                    setValue(newValue)
                 }}
                 size="large" 
                 defaultValue={3}
                 className='bg-blue-500'
                  />
                    </div> <div>
                        <textarea className='textarea textarea-ghost w-full bg-gray-800'  placeholder='Any FeedBack...' ></textarea>
                </div>
                <div className='flex justify-end'>
                 <button className='btn relative -top-5' onClick={()=>{handleform(visibledata)}}>Submit</button>
                </div> 
                </>
                : 
                <div className='flex flex-row gap-10'>
                    <input type="number" name="" id=""className='input w-64' placeholder='Phone number to contact' required />
                    <button className='btn ' onClick={calllawyer}>Submit</button>
                    
                 </div>   )
    
        }
    </div>
        }
    </div>
    </div>
  )
}
