import { BiSort } from "react-icons/bi";


const Sort = ()=>{

    return(
        <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-50">
            <BiSort />
            <div className="flex gap-2">
                <button className="text-xs after:content-['|'] after:pl-2 py-1 px-2 rounded-md focus:bg-white focus:shadow-md">Date</button>
                <button className="text-xs py-1 px-2 rounded-md focus:bg-white focus:shadow-md">Alaphabet</button>
            </div>
        </div>
    )
}

export default Sort