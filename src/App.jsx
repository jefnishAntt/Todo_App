import { useEffect, useState } from "react"
import TextInput from "./components/TextInput"


const localStorageValue = JSON.parse(localStorage.getItem("tasks"));

const initialValue = localStorageValue.length > 0 ? localStorageValue : [{
  task: "Task",
  date: new Date().toLocaleDateString("en-GB"),
  status: false
}]

function App() {
  const [todoData, settodoData] = useState(initialValue);

  const handleAddNewTask = () => {
    settodoData((preTodoData) => {
      return [...preTodoData, {
        task: "Task",
        date: new Date().toLocaleDateString("en-GB"),
        status: false
      }]
    })
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todoData))
  }, [todoData])

  return (
    <div className='relative bg-white p-8 rounded-2xl min-w-[600px] h-[50%] shadow-md overflow-auto'>
      <div className="mb-4">
        <h1 className="text-2xl font-medium text-center">My RoteeeN
        </h1>
        <div className="flex justify-between">
          <h2>Search Bar</h2>
          <button onClick={() => handleAddNewTask()} className="relative right-0 px-6 py-2 bg-blue-400 rounded-md focus:bg-blue-500 transition-discrete cursor-pointer">Add</button>
        </div>
      </div>
      <TextInput todoData={todoData} setTodoData={settodoData} />
    </div>
  )
}

export default App
