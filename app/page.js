"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask,{title,desc}]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  }
  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }
  
   let renderTask = <h2>No Task Available</h2>;
   if(mainTask.length > 0){
       renderTask= mainTask.map((t,i) =>{
          return <li key={i} className='flex items-center justify-between'>
            <div className='flex justify-between mb-5 w-1/2'>
            <h5 className='font-semibold text-xl'>{t.title}</h5>
            <h6 className='font-semibold text-xl'>{t.desc}</h6>
            </div>
            <button 
            onClick={()=>{
              deleteHandler(i);
            }}
            className='bg-gray-50 text-pink-600 rounded-md text-md font-serif p-2 m-3 font-bold'>Delete</button>
            </li>
        })
      }
  return (
    <>
    <h1 className='bg-pink-100 text-pink-600 p-5 text-4xl font-bold text-center font-serif'>Let's LISTIFY</h1>
    <form onSubmit={submitHandler}>
      <input type="text"  className=" border-2 text 2xl p-1 border-pink-600 rounded-lg m-5 
      "
      placeholder = "Task"
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
      <input type="text"  className=" border-2 text 2xl p-1 border-pink-600 rounded-lg m-5 
      "
      placeholder = "Description"
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />
      <button className='bg-pink-100 text-pink-600 rounded-md p-2 text-md mb-20 ml-5 mt-0 font-serif flex'>Add Task</button>
    </form>
    <hr/>
    <h1 className='text-2xl text-center font-bold  text-pink-600'>YOUR TASKS...</h1>
    <div className='p-8 bg-pink-100 font-serif text-pink-600'>
      <ul>{renderTask}</ul>
    </div>
    </>
  )
}

export default page