import { useState } from "react"

export default function NewTask({onAdd})
{  
    const [enteredTask, setEnteredTask]=useState();

    function handleChange(event)
    {
        setEnteredTask(event.target.value);

    }
    function handleClick()
    {   
        onAdd(enteredTask);
        setEnteredTask("");
    }
    return <div className="flex items-center gap-4">
        <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={enteredTask} />
        <button className="hover:text-stone-950 text-stone-700" onClick={handleClick}>Add Task</button>
    </div>
}