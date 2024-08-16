import React from 'react'

export const Aside = () => {
  return (
    <aside className='h-[75%] gap-2 row-start-1 row-end-3 col-start-4 bg-[#201E43] w-full flex flex-col items-center justify-center self-start sticky top-0 text-[#eee] ml-1 aside-media'>
        <h3 className='font-bold'>Article theme</h3>
        <hr className='border-2 w-full border-[#15132b]'/>
        <ul className='flex flex-col gap-2 text-center'>
            <li className='border-b-2 border-b-transparent hover:animate-showBorderLight'><a href="#WebDev">WebDev</a></li>
            <li className='border-b-2 border-b-transparent hover:animate-showBorderLight'><a href="#GameDev">GameDev</a></li>
            <li className='border-b-2 border-b-transparent hover:animate-showBorderLight '><a href="#Software">Software</a></li>
      </ul>
    </aside>
  )
}
