import React, { useState } from 'react'


export default function Hello() {
  const [val, setVal] = useState("");
  const [check, setCheck] =  useState(false);
   const arr = [{ id:1, location:"Chennai"}, { id:2, location:"Coimbature"}, { id:3, location:"Pondy"},]
  //  const {data} = useFetchData("https://jsonplaceholder.typicode.com/users");  // call fake api
  // console.log(data);
  const data = [ 
    { 
    id:1, 
    location:"Chennai" },
    { 
    id:2, 
    location:"Chennai" },
    { 
    id:3, 
    location:"Chennai" },
    { 
    id:4, 
    location:"Coimbature" },
    { 
    id:5, 
    location:"Pondy" }
]

const vale = [val];
   
  return (
    <div className='App' >
        <h1> Hello Everyone!!! </h1>
        <div display="flex">
       {arr.map((ele) => {
        return(
          <div key={ele.id}>
          <label >{ele.location}</label>
          <input type="checkbox" value={ele.location} onChange={(e)=> setVal(e.target.value)} onClick={()=> {setCheck(!check)}} defaultChecked={check}  />
          </div>      
        )
       })}
        </div>

        <div>
           {data.map((ed) =>{
            if(ed.location === val  | !check  ){
              return(
                <div key={ed.id}>
                <h1>{ed.location}</h1>
                </div>
               )
            }
             
           })}
        </div>
    </div>
  )
}
