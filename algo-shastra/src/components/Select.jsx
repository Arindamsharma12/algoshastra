import React, { useId, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Select({
  options,
  className="",
  ...props
},ref) {
  const id = useId()
  const navigate = useNavigate()
  return (
    <div className='w-full'>
      <select {...props} id={id} ref={ref}
      className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`}
      >
        <option disabled>All Courses</option>
        {options.map((option)=>(
          <option value={option} 
          key={option}>  
          {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)
