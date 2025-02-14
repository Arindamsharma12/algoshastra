import React from 'react'

function Button({children,type="button",className,...props}) {
  return (
    <button 
    type={type}
    className={`${className}
    bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 px-4 py-2 rounded-lg m-3`}
    {...props}
    >
      {children}
    </button>
  )
}

export default Button
