import React from 'react'

interface ButtonProps  {
    placeholder:string,
    color:string
}

const Button = ({placeholder, color} : ButtonProps) => {
  return (
    <button style={{backgroundColor:color}} className=" w-52 h-14 text-white rounded">
        {placeholder}
    </button>  )
}

export default Button