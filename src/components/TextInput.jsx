import { TbEdit } from "react-icons/tb";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";

import { useState } from "react";


const TextInput = ({ todoData, setTodoData }) => {
    const [editTodo, setEditTodo] = useState(null);

    const handleTodoDataEdit = (currIndex) => {
        setEditTodo((activeInputIndex) => activeInputIndex === currIndex ? null : currIndex)
    }

    const handleTodoDataDeletion = (currIndex) => {
        setEditTodo(()=> null)

        setTodoData((preTodoData) => {
            return preTodoData.filter((value, index) => {
                return index !== currIndex
            })
        })
    }

    const handleAddNewTask = (e, currIndex) => {
        setTodoData((preTodoData)=>{
           preTodoData[currIndex].task = e.target.value;
           
           return [...preTodoData]
        })
    }

    const handleTaskMarking = (index)=> {
        setTodoData((preTodoData)=>{
            console.log(preTodoData);
            
            preTodoData[index].status = true
            return [...preTodoData]
        })
    }

    return (
        todoData.map(({ task, date, status }, index) => (
            <div key={index} className="flex justify-between items-center gap-4 pb-3">
                                    {/* <span>{`${index+1}.`}</span> */}

                <div className="flex gap-4 w-full p-3 justify-between items-center shadow-md bg-blue-200 rounded-lg" role="button" onClick={()=>""}>
                {
                    editTodo === index ? <input type="text"  value={todoData[index].task} onChange={(e)=> {handleAddNewTask(e, index)}} className="border-2 rounded-md w-[50%]" /> : <h2 role="button" onClick={() => { handleTodoDataEdit(index) }}>{task}</h2>
                }
                <div className="flex gap-4">
                <span className="text-xs">{date}</span>
                {status && <IoMdCheckmarkCircleOutline className="text-green-500"/>}
                </div>
                </div>
                <div className="flex gap-4">
                    <IoIosCheckmarkCircle size={20} onClick={()=>{handleTaskMarking(index)}} />
                    <MdOutlineDeleteOutline size={20} role="button" onClick={() => handleTodoDataDeletion(index)} />
                </div>
            </div>
        ))
    )
}

export default TextInput;