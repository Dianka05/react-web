import React from 'react'
import { Link } from 'react-router-dom'

export const Button = ({to, children, onClick}) => {
  return (
    <button onClick={onClick} className='border-[#201E43] border-2 rounded hover:animate-wiggle'><Link className='text-[#201E43] p-3 block' to={`${to}`}>{children}</Link></button>
  )
}
