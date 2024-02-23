import React from 'react'
import useState from "react"
import { useEffect } from 'react';
export const Home = () => {
const[state , setState]= useState([]);
const [ loading , setLoading]= useState(false)

useEffect(()=>{
fetchData()
},[])

 const fetchData= async ()=>{
    setLoading(true);
    const res= await fetch("http://localhost:3000/data")
    const data = await res.json()
    setState(data);
    setLoading(false)
 }
if(loading){
    return(
        <div>
            <h1>Loading...</h1>
        </div>
    )
}
  return (
    <div>
        <div>
            <h2>Title</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat beatae itaque illum reiciendis dolorum iusto rerum odit, nobis culpa explicabo laudantium tempora praesentium. Enim dolore perspiciatis iusto voluptates nam harum.</p>
            <button>Read More</button>
        </div>
        <div>
            <h3>Classes</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus excepturi nobis tempora quam culpa magnam fuga fugit magni, molestias doloremque? Neque sed voluptatum dolores, earum quam facilis pariatur alias dolorem.</p>

        </div>
        {
            state?.map((e)=>(
                <div>
                    <img src={e.ImageUrl} />
                    <h3>{e.name}</h3>
                    <h4>{e.ShortDesc}</h4>
                    <button>View</button>
                </div>
            ))
        }
    </div>
  )
}
