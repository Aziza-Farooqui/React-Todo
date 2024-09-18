import React from 'react'
import not_tick from '../assets/not_tick.png'
import tick from '../assets/tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({data,id,isComplete , deleteTodo , toggle}) => {
  return (
    <div onClick={()=>{toggle(id)}} className='flex items-center my-3 gap-2'>
      <div className='flex flex-1 items-center cursor-pointer'>
        <img src={isComplete ? tick : not_tick}  className='w-7' alt="tick_icon" />
        <p className={`text-slate-700 ml-4 text-[17px] ${isComplete ? "line-through" : ""}`}>
            {data}
        </p>
      </div>
      <img  onClick={()=>{deleteTodo(id)}}  src={delete_icon} className='w-3.5 cursor-pointer' alt="delete_icon" />
    </div>
  )
}

export default TodoItems;