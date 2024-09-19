import React ,{useState} from 'react'
import './Remainder.css'
function Remainder() {
    const [reminder, setReminder] = useState([]);
    const [newreminder, setNewReminder] = useState("");
    const handleInputChnage =(event)=>
    {
setNewReminder(event.target.value)
    }
    const handleAddReminder=()=>
    {
    if(newreminder.trim())
    {
        setReminder([...reminder,newreminder])
        setNewReminder("")
    }
    }
    const handleDelete=(index)=>{
        setReminder(reminder.filter((item, itemIndex) => itemIndex !== index));}
  return (
    <div>
      <div className='container'>
        <h1>REMINDER APP</h1>
        <div className='input-container'>
            <input type='text' value={newreminder} placeholder='Enter anything' onChange={handleInputChnage} />
            <button className='add-btn' onClick={handleAddReminder}>Add remainder</button>
        </div>
        {                   
            reminder.length>0 ? (
            <ul className='Reminder-list'>
         {
            reminder.map((data,index)=>(
            <li  key={index}>
                {data}
                <button className='Del-btn' onClick={()=>handleDelete(index)}>Delete</button>
            </li>

            ))
         }
        </ul> ) : <p> No reminders found</p>
        }

      </div>
    </div>
  )
}

export default Remainder
