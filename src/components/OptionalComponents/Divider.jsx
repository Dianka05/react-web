import React from 'react'

export const Divider = ({title}) => {
  return (
    <div className='w-full py-4 col-start-4 col-end-1 divider-media' id={title}>
        <h2 className='text-4xl pl-4'> - {title} acticle</h2>
    </div>
  )
}