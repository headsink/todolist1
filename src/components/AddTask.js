import React, { useState } from 'react'

const AddTask = () => {
  const [input, setInput ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>TASK: </label>
        <input type="text" placeholder='Add Task' />
      </div>
      <div>
        <label>Set Reminder: </label>
        <input type="checkbox" name="" id="" />
      </div>

      <input type="submit" value="Save" />
    
    </form>
  )
}

export default AddTask