import React from 'react'
import { Button } from '../OptionalComponents/Button'

export const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[100vh] w-full gap-5'>
        <h1 className='text-4xl'>Not Found Page</h1>
        <Button to={'/'}>Back to home</Button>
    </div>
  )
}
