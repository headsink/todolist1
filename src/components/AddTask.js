import React from 'react'

const AddTask = () => {
  return (
    <form>
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