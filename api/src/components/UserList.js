import React, { useEffect,useState } from 'react'
import ListCard from './ListCard.js'
import axios from 'axios'


export default function UserList() {
    const [listOfUSer,setlistOfUSer]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>setlistOfUSer(res.data))
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    },[])

    return (
        <div>
           { listOfUSer.map((user,i)=><ListCard  key={i}  user={user} />)}            
        </div>
    )
}


