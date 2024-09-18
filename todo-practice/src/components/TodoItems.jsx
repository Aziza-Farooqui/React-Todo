import React from 'react'
import tick from '../assets/tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({data,id,isComplete , deleteTodo}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div className='flex flex-1 items-center cursor-pointer'>
        <img src={tick}  className='w-7' alt="tick_icon" />
        <p className='text-slate-700 ml-4 text-[17px]'>
            {data}
        </p>
      </div>
      <img  onClick={()=>{deleteTodo(id)}}  src={delete_icon} className='w-3.5 cursor-pointer' alt="delete_icon" />
    </div>
  )
}

export default TodoItems;