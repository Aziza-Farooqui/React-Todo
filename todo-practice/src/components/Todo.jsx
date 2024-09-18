import React, { useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'
import { useRef } from 'react'

const Todo = () => {

  const [todoList,setTodoList]=useState([]);
  const inputRef=useRef();

  const addBUtton=()=>{
      const inputText =inputRef.current.value.trim();

      if(inputText === ""){
        return null;
      }

      const newTodo = {
        id: Date.now(),
        text: inputText,
        isComplete: false,
      }

      setTodoList((prev)=> [...prev , newTodo]);
       inputRef.current.value= "";
    }

    const deleteTodo = (id)=>{
      setTodoList((prevTodos)=>{
        return prevTodos.filter((todo)=> todo.id !== id)
      })
    }


  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[500px] rounded-xl'>
      <div className="flex item-center mt-7 gap-2">
        <img className='w-8' src={todo_icon} alt='todo_icon'/>
        <h1 className='text-3xl font-bold'>To-do List</h1>
      </div>
      
      <div className="flex items-center my-7 bg-gray-400 rounded-full">
        <input  ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text"  placeholder='Add Task'/>
        <button onClick={addBUtton} className='border-none rounded-full cursor-pointer bg-orange-600 h-14 w-32 text-white font-medium text-lg'>ADD</button>
      </div>

      <div>
           {todoList.map((item,index)=>{
              return <TodoItems key={index} data={item.text} isComplete={item.isComplete} id={item.id} deleteTodo={deleteTodo} />
           })}
          
      </div>
    </div>
  )
}

export default Todo