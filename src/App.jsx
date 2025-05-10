import { useEffect, useState } from "react";
import TextInput from "./components/TextInput";
import { IoMdAddCircleOutline } from "react-icons/io";
import Filter from "./components/Filter";
import Sort from "./components/Sort";


const localStorageValue = JSON.parse(localStorage.getItem("tasks"));

const initialValue =
  localStorageValue.length > 0
    ? localStorageValue
    : [
        {
          task: "Add a new task",
          date: new Date().toLocaleDateString("en-GB"),
          status: false,
        },
      ];

function App() {
  const [todoData, settodoData] = useState(initialValue);
  const [currActiveFilter, setCurrActiveFilter] = useState('all');

  const handleAddNewTask = () => {
    settodoData((preTodoData) => {      
      return [
        ...preTodoData,
        {
          task: "Add a new task",
          date: new Date().toLocaleDateString("en-GB"),
          status: false,
        },
      ];
    });
  };  
  const getTaskByFilter = ()=> {
    const filteredTasks = todoData.filter((value)=> { return currActiveFilter === 'all' ?  todoData : value.status === currActiveFilter } )
    return filteredTasks;
  }  

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todoData));
  }, [todoData]);

  return (
    <div className="relative bg-white p-8 rounded-2xl min-w-[600px] h-[50%] shadow-md overflow-auto">
      <div className="">
        <h1 className="text-2xl font-medium text-center">Remaind Mee</h1>
        <div className="flex justify-between items-center py-8">
          <div className="flex gap-4 items-center">
            <Filter setCurrActiveFilter={setCurrActiveFilter}/>
            <Sort />
          </div>

          <IoMdAddCircleOutline
            size={20}
            onClick={() => handleAddNewTask()}
            className="relative right-0 rounded-md focus:bg-blue-500 transition-discrete cursor-pointer"
          />
        </div>
      </div>
      <TextInput todoData={todoData} filteredTasks={ getTaskByFilter } setTodoData={settodoData} />
    </div>
  );
}

export default App;
