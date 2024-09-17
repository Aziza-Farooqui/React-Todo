import React from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[500px] rounded-xl'>
      <div className="flex item-center mt-7 gap-2">
        <img className='w-8' src={todo_icon} alt='todo_icon'/>
        <h1 className='text-3xl font-bold'>To-do List</h1>
      </div>
      
      <div className="flex items-center my-7 bg-gray-400 rounded-full">
        <input className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text"  placeholder='Add Task'/>
        <button className='border-none rounded-full cursor-pointer bg-orange-600 h-14 w-32 text-white font-medium text-lg'>ADD</button>
      </div>

      <div className="">
        <TodoItems data='Sample Todo'/>
      </div>
    </div>
  )
}

export default Todo