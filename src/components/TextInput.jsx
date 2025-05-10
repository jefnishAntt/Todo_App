import { TbEdit } from "react-icons/tb";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { RiDraggable } from "react-icons/ri";


import { useState } from "react";


const TextInput = ({ todoData, filteredTasks, setTodoData }) => {
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
        filteredTasks().map(({ task, date, status }, index) => (
            <div key={index} className="flex justify-between items-center gap-4 pb-3">
                <div className="flex gap-4 w-full p-3 justify-between items-center shadow-md bg-blue-200 rounded-lg" role="button" onClick={()=>""}>
                {/* <span>{`${index+1}.`}</span> */}
                <RiDraggable />
                {
                    editTodo === index ? <input type="text" 
                    value={task} onChange={(e)=> {handleAddNewTask(e, index)}} className="border-2 rounded-md w-[50%]" /> : <h2 role="button" onClick={() => { handleTodoDataEdit(index) }}>{task}</h2>
                }
                <div className="flex gap-4">
                <span className="text-xs">{date}</span>
                {status && <IoMdCheckmarkCircleOutline className="text-green-500"/>}
                </div>
                </div>
                <div className="flex gap-4">
                    <IoIosCheckmarkCircle size={20} onClick={()=>{handleTaskMarking(index)}} />
                    <MdOutlineDeleteOutline size={20} role="button" onClick={() => handleTodoDataDeletion(index)} className="hover:text-red-500 ease-in hover:scale-90" />
                </div>
            </div>
        ))
    )
}

export default TextInput;