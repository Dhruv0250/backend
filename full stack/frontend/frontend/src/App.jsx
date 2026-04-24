import { useState } from 'react'
import './App.css'
import axios from "axios"
import { useEffect } from 'react'

function App() {
 const [jokes,setJokes]=useState([])

 useEffect(()=>{
axios.get('/api/jokes')
.then((Response)=>{
  setJokes(Response.data)
})
.catch((Error)=>{
  console.log(Error)
})
 },[])

  return (
    <>
    <h1>binding concept</h1>
    <p>JOKES : {jokes.length}</p>

    {
      jokes.map((joke,index)=>
        <div key={index}>
          <h2>{joke.title}</h2>
          <p>{joke.content}</p>
        </div>
      )
    }
    </>
  )
}

export default App
