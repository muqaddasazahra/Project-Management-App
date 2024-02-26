import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";
export default function NewProject({onSave,onCancel})
{   
    const title=useRef();
    const description=useRef();
    const dueDate =useRef();
    const modal=useRef();

    function handleSave()
    {
        const enteredTitle=title.current.value;
        const enteredDescription=description.current.value;
        const enteredDueDate=dueDate.current.value;

        if(enteredTitle.trim()==="" || enteredDescription.trim()===""|| enteredDueDate.trim()==="")
        {modal.current.open();
         return;
        }
       
        onSave({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate,
        })
    }

    return <>
    <Modal buttonCaption="Close" ref={modal}>
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">Oops....Looks like you forgot to enter a value</p>
        <p className="text-stone-600 mb-4">Please make sure you entered a valid value for every input field</p>
    </Modal>
    <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end my-4 gap-4">
            <li>
                <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
            </li>
            <li>
                <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-700 text-stone-50 hover:bg-stone-950">Save</button>
            </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title"/>
          <Input ref={description} label="Description" textarea/>
          <Input type="date" ref={dueDate} label="Due Date"/>
        </div>
    </div>
    </>
    
}